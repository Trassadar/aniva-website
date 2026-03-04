# Pași Post-Deployment SEO - ANIVA

## ✅ Ce ai făcut deja:
- [x] Site-ul este live pe Vercel
- [x] DNS-ul este configurat
- [x] Site-ul apare pe `www.spalatoriaaniva.ro`

## 🔍 Verificări imediate (ACUM):

### 1. Testează toate paginile

Verifică că toate paginile funcționează:
- [ ] Homepage: `https://www.spalatoriaaniva.ro/`
- [ ] Servicii: `https://www.spalatoriaaniva.ro/servicii`
- [ ] Tarife: `https://www.spalatoriaaniva.ro/tarife`
- [ ] Contact: `https://www.spalatoriaaniva.ro/contact`
- [ ] Comanda online: `https://www.spalatoriaaniva.ro/comanda-online`

### 2. Verifică redirects-urile

Testează că redirects-urile funcționează:
- [ ] `/preturi` → redirectează la `/tarife`
- [ ] `/home` → redirectează la `/`
- [ ] `/acasa` → redirectează la `/`

### 3. Verifică sitemap și robots.txt

- [ ] Sitemap: `https://www.spalatoriaaniva.ro/sitemap.xml`
- [ ] Robots.txt: `https://www.spalatoriaaniva.ro/robots.txt`

## 🚀 Pași SEO critici (FA ASTA ACUM):

### Pasul 1: Înregistrează site-ul în Google Search Console

**IMPORTANT:** Fă asta în primele 24 de ore!

1. Mergi la [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Selectează "URL prefix"
4. Introdu: `https://www.spalatoriaaniva.ro`
5. Verifică proprietatea:
   - **Opțiunea 1 (Recomandată):** HTML tag
     - Vercel → Settings → Domains → Click pe domeniul tău
     - Vei vedea un tag HTML pentru verificare
     - Adaugă-l în `src/app/layout.tsx` în `<head>`
   - **Opțiunea 2:** DNS verification (dacă ai acces la DNS)
   - **Opțiunea 3:** HTML file upload (mai complicat)

### Pasul 2: Trimite sitemap-ul la Google

După ce ai verificat proprietatea:

1. În Google Search Console → Sitemaps
2. Click "Add a new sitemap"
3. Introdu: `sitemap.xml`
4. Click "Submit"
5. Așteaptă procesarea (poate dura câteva ore)

### Pasul 3: Request Indexing pentru paginile importante

După ce sitemap-ul este procesat:

1. În Google Search Console → URL Inspection
2. Introdu URL-urile importante:
   - `https://www.spalatoriaaniva.ro/`
   - `https://www.spalatoriaaniva.ro/servicii`
   - `https://www.spalatoriaaniva.ro/tarife`
   - `https://www.spalatoriaaniva.ro/contact`
   - `https://www.spalatoriaaniva.ro/comanda-online`
3. Pentru fiecare URL: Click "Request Indexing"

### Pasul 4: Verifică structured data

1. Mergi la [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Introdu: `https://www.spalatoriaaniva.ro`
3. Verifică că LocalBusiness schema este detectată
4. Dacă apar erori, spune-mi și le corectăm

## 📊 Monitorizare (Primele 2 săptămâni):

### Zilnic (primele 7 zile):
- [ ] Verifică Google Search Console pentru erori
- [ ] Verifică că paginile importante sunt indexate
- [ ] Testează redirects-urile pentru URL-uri vechi

### Săptămânal (săptămâna 2):
- [ ] Analizează performanța în Google Search Console
- [ ] Verifică pozitiile pentru cuvinte cheie principale
- [ ] Compară traficul cu săptămâna precedentă

## ⚠️ IMPORTANT:

### Nu șterge site-ul WordPress încă!

**Pastrează-l activ cel puțin 1-2 săptămâni** pentru:
- Google să indexeze noile URL-uri
- Redirects-urile să funcționeze pentru link-uri vechi
- Să poți face rollback dacă este necesar

### Cuvinte cheie de monitorizat:

Urmărește pozitiile pentru:
- "spalatorie covoare brasov"
- "spalare covoare brasov"
- "curatare covoare brasov"
- "spalatorie aniva"
- "pret spalare covoare brasov"

## 🔧 Dacă apar probleme:

### Problema: Paginile nu sunt indexate

**Soluție:**
- Verifică că nu au `noindex` în metadata
- Trimite sitemap-ul în Google Search Console
- Folosește "Request Indexing" pentru paginile importante
- Așteaptă 1-2 săptămâni (Google are nevoie de timp)

### Problema: Redirects nu funcționează

**Soluție:**
- Verifică `next.config.ts` - redirects sunt configurate corect
- Testează redirects-urile manual
- Verifică logs-urile Vercel pentru erori

### Problema: Traficul scade

**Soluție:**
- Normal în primele 2-4 săptămâni (Google re-indexează)
- Monitorizează zilnic în Google Search Console
- Verifică că toate paginile importante sunt indexate
- Dacă scăderea continuă după 1 lună, contactează un specialist SEO

## 📝 Nota finală:

**Timp estimat pentru stabilizare SEO:** 2-4 săptămâni

După această perioadă, Google ar trebui să:
- Indexeze toate paginile noi
- Recunoască redirects-urile
- Actualizeze pozițiile în search results
- Stabilizeze traficul

**Succes!** 🎉
