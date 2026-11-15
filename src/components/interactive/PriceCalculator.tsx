"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import { Phone, Plus, Trash2, Calculator, Truck } from "lucide-react";

const PRET_MP = 13; // lei / mp spălare
const PRET_ML = 13; // lei / ml festonare
const MINIM_BRASOV_MP = 6; // comanda minimă în Brașov

type Covor = {
  id: number;
  lungime: string;
  latime: string;
  festonare: boolean;
};

function num(v: string): number {
  const n = parseFloat(v.replace(",", "."));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function fmt(n: number, digits = 2): string {
  return n.toLocaleString("ro-RO", { minimumFractionDigits: 0, maximumFractionDigits: digits });
}

export default function PriceCalculator() {
  const uid = useId();
  const [covoare, setCovoare] = useState<Covor[]>([
    { id: 1, lungime: "3", latime: "2", festonare: false },
  ]);
  const [nextId, setNextId] = useState(2);

  const calc = useMemo(() => {
    const linii = covoare.map((c) => {
      const L = num(c.lungime);
      const l = num(c.latime);
      const supraf = L * l;
      // sub 1 mp se tarifează ca 1 mp
      const mpTaxat = supraf > 0 ? Math.max(1, supraf) : 0;
      const perimetru = c.festonare && L > 0 && l > 0 ? 2 * (L + l) : 0;
      return {
        id: c.id,
        mp: supraf,
        mpTaxat,
        spalare: mpTaxat * PRET_MP,
        perimetru,
        festonare: perimetru * PRET_ML,
      };
    });
    const totalMp = linii.reduce((s, x) => s + x.mpTaxat, 0);
    const totalSpalare = linii.reduce((s, x) => s + x.spalare, 0);
    const totalMl = linii.reduce((s, x) => s + x.perimetru, 0);
    const totalFestonare = linii.reduce((s, x) => s + x.festonare, 0);
    const subMinim = totalMp > 0 && totalMp < MINIM_BRASOV_MP;
    return {
      linii,
      totalMp,
      totalSpalare,
      totalMl,
      totalFestonare,
      total: totalSpalare + totalFestonare,
      subMinim,
    };
  }, [covoare]);

  const update = (id: number, patch: Partial<Covor>) =>
    setCovoare((list) => list.map((c) => (c.id === id ? { ...c, ...patch } : c)));

  const add = () => {
    setCovoare((list) => [...list, { id: nextId, lungime: "", latime: "", festonare: false }]);
    setNextId((n) => n + 1);
  };

  const remove = (id: number) => setCovoare((list) => list.filter((c) => c.id !== id));

  return (
    <div className="calc-card">
      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-6 lg:gap-8">
        {/* Covoare */}
        <div>
          <div className="flex items-center gap-3">
            <span className="service-ic">
              <Calculator className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <div className="font-extrabold text-text text-lg">Covoarele tale</div>
              <div className="text-sm text-muted">Introdu lungimea și lățimea în metri</div>
            </div>
          </div>

          <ul className="mt-5 space-y-3">
            {covoare.map((c, idx) => {
              const linie = calc.linii.find((x) => x.id === c.id);
              return (
                <li key={c.id} className="calc-row">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-extrabold text-text">Covor {idx + 1}</span>
                    {covoare.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(c.id)}
                        className="calc-icon-btn"
                        aria-label={`Șterge covorul ${idx + 1}`}
                      >
                        <Trash2 className="h-4 w-4" aria-hidden />
                      </button>
                    )}
                  </div>

                  <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-end gap-2">
                    <label className="block">
                      <span className="text-xs font-semibold text-muted">Lungime (m)</span>
                      <input
                        id={`${uid}-L-${c.id}`}
                        className="input mt-1"
                        inputMode="decimal"
                        placeholder="ex. 3"
                        value={c.lungime}
                        onChange={(e) => update(c.id, { lungime: e.target.value })}
                      />
                    </label>
                    <span className="pb-3 text-muted font-bold" aria-hidden>
                      ×
                    </span>
                    <label className="block">
                      <span className="text-xs font-semibold text-muted">Lățime (m)</span>
                      <input
                        id={`${uid}-l-${c.id}`}
                        className="input mt-1"
                        inputMode="decimal"
                        placeholder="ex. 2"
                        value={c.latime}
                        onChange={(e) => update(c.id, { latime: e.target.value })}
                      />
                    </label>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                    <label className="calc-toggle">
                      <input
                        type="checkbox"
                        checked={c.festonare}
                        onChange={(e) => update(c.id, { festonare: e.target.checked })}
                      />
                      <span>Festonare pe tot conturul (13 lei/ml)</span>
                    </label>
                    {linie && linie.mp > 0 && (
                      <span className="text-xs text-muted">
                        {fmt(linie.mp)} mp
                        {linie.perimetru > 0 ? ` • ${fmt(linie.perimetru)} ml contur` : ""}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <button type="button" onClick={add} className="btn-ghost mt-4 !py-3">
            <Plus className="h-4 w-4" aria-hidden /> Adaugă încă un covor
          </button>
        </div>

        {/* Rezultat */}
        <div className="calc-result" aria-live="polite">
          <div className="text-sm font-semibold opacity-80">Preț estimativ</div>
          <div className="calc-total">
            {fmt(calc.total, 0)} <span className="text-2xl md:text-3xl">lei</span>
          </div>

          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="opacity-80">Spălare ({fmt(calc.totalMp)} mp × 13 lei)</dt>
              <dd className="font-bold whitespace-nowrap">{fmt(calc.totalSpalare)} lei</dd>
            </div>
            {calc.totalMl > 0 && (
              <div className="flex justify-between gap-4">
                <dt className="opacity-80">Festonare ({fmt(calc.totalMl)} ml × 13 lei)</dt>
                <dd className="font-bold whitespace-nowrap">{fmt(calc.totalFestonare)} lei</dd>
              </div>
            )}
            <div className="flex justify-between gap-4">
              <dt className="opacity-80">Ridicare și livrare</dt>
              <dd className="font-bold whitespace-nowrap">Gratuit</dd>
            </div>
          </dl>

          {calc.subMinim && (
            <p className="mt-4 rounded-2xl bg-white/10 px-3 py-2 text-xs leading-relaxed">
              Comanda minimă în Brașov este de 6 mp (78 lei). Poți adăuga și alte covoare din casă.
            </p>
          )}

          <div className="mt-5 flex flex-col gap-3">
            <a href="tel:0759158914" className="calc-cta-primary">
              <Phone className="h-5 w-5" aria-hidden /> Sună acum: 0759 158 914
            </a>
            <Link href="/comanda-online" className="calc-cta-secondary">
              <Truck className="h-5 w-5" aria-hidden /> Programează ridicarea online
            </Link>
          </div>

          <p className="mt-4 text-xs leading-relaxed opacity-70">
            Estimarea este orientativă. Prețul final se stabilește după măsurarea covoarelor. Sub 1 mp, un covor se
            tarifează ca 1 mp. În stațiuni și localitățile mai depărtate minimul este 25 mp.
          </p>
        </div>
      </div>
    </div>
  );
}
