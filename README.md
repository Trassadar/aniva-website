# ANIVA - Spalatorie de Covoare Brasov

Site nou pentru spalatoria de covoare ANIVA din Brasov, construit cu Next.js, TypeScript si Tailwind CSS.

## Caracteristici

- **Design warm/soft**: Paleta peach+cream cu carduri rotunjite si umbre soft
- **Mobile-first**: Design app-like optimizat pentru telefon (max-width ~430px)
- **Integrare Firebase**: Comenzi salvate automat in Firestore prin API route
- **SEO optimizat**: Metadata, sitemap, robots.txt, schema LocalBusiness
- **100% responsive**: Functioneaza perfect pe toate dispozitivele
- **Fara diacritice in UI**: Toate textele sunt fara diacritice

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Firebase Admin SDK
- Lucide React (iconuri)

## Instalare Locala

1. Navigheaza in folderul proiectului:
```bash
cd aniva
```

2. Instaleaza dependentele:
```bash
npm install
```

3. Creeaza fisierul `.env.local` cu variabilele de mediu:
```bash
cp .env.example .env.local
```

4. Completeaza variabilele de mediu in `.env.local` (vezi sectiunea "Variabile de Mediu" de mai jos)

5. Ruleaza serverul de dezvoltare:
```bash
npm run dev
```

6. Deschide [http://localhost:3000](http://localhost:3000) in browser

## Variabile de Mediu

### Firebase Admin SDK

Pentru a configura Firebase Admin SDK, ai nevoie de:

1. **FIREBASE_PROJECT_ID**: ID-ul proiectului Firebase
   - Gasesti in Firebase Console > Project Settings > General

2. **FIREBASE_CLIENT_EMAIL**: Email-ul service account-ului
   - Format: `firebase-adminsdk-xxxxx@your-project-id.iam.gserviceaccount.com`
   - Gasesti in Firebase Console > Project Settings > Service Accounts

3. **FIREBASE_PRIVATE_KEY**: Cheia privata
   - Generezi in Firebase Console > Project Settings > Service Accounts > Generate New Private Key
   - Copiaza intreg continutul (inclusiv `-----BEGIN PRIVATE KEY-----` si `-----END PRIVATE KEY-----`)
   - In `.env.local`, pune intre ghilimele si pastreaza `\n` pentru newlines

**Exemplu `.env.local`:**
```
FIREBASE_PROJECT_ID=aniva-spalatorie
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-abc123@aniva-spalatorie.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

**IMPORTANT**: 
- Cheia privata trebuie sa fie intre ghilimele duble
- Pastreaza `\n` pentru newlines (NU inlocui cu newlines reale)
- Daca ai probleme, verifica ca nu ai spatii suplimentare

## Deploy pe Vercel

### Pas 1: Pregatire

1. Asigura-te ca ai un cont Vercel (gratuit)
2. Instaleaza Vercel CLI (optional):
```bash
npm i -g vercel
```

### Pas 2: Conectare Repository

1. Mergi pe [vercel.com](https://vercel.com)
2. Click pe "Add New Project"
3. Conecteaza repository-ul GitHub/GitLab/Bitbucket
4. Selecteaza folderul `aniva` (daca repository-ul contine mai multe proiecte)

### Pas 3: Configurare Environment Variables

In Vercel Dashboard > Project Settings > Environment Variables, adauga:

- **FIREBASE_PROJECT_ID**: ID-ul proiectului Firebase
- **FIREBASE_CLIENT_EMAIL**: Email-ul service account-ului
- **FIREBASE_PRIVATE_KEY**: Cheia privata (cu `\n` pentru newlines)

**IMPORTANT pentru FIREBASE_PRIVATE_KEY in Vercel:**
- Pune intre ghilimele duble
- Pastreaza `\n` pentru newlines (NU inlocui cu newlines reale)
- Exemplu: `"-----BEGIN PRIVATE KEY-----\nMIIEvQ...\n-----END PRIVATE KEY-----\n"`

### Pas 4: Build Settings

Vercel detecteaza automat Next.js, dar verifica:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)
- **Root Directory**: `aniva` (daca e cazul)

### Pas 5: Deploy

1. Click pe "Deploy"
2. Asteapta finalizarea build-ului (1-3 minute)
3. Site-ul va fi disponibil la URL-ul generat de Vercel (ex: `aniva.vercel.app`)

### Pas 6: Conectare Domeniu

1. In Vercel Dashboard > Project Settings > Domains
2. Adauga domeniul: `www.spalatoriaaniva.ro`
3. Vercel va afisa recordurile DNS necesare

#### Configurare DNS

In panoul DNS al provider-ului de domeniu (ex: Namecheap, GoDaddy, etc.), adauga:

**Varianta 1: CNAME (recomandat)**
- **Type**: CNAME
- **Name**: www
- **Value**: cname.vercel-dns.com
- **TTL**: 3600 (sau default)

**Varianta 2: A Record (daca CNAME nu e disponibil pentru root)**
- **Type**: A
- **Name**: www
- **Value**: 76.76.21.21 (IP-ul Vercel - verifica in Vercel Dashboard pentru IP-ul actual)
- **TTL**: 3600

**Pentru root domain (spalatoriaaniva.ro fara www):**
- Vercel ofera automat redirect de la root la www daca configurezi www
- Sau configureaza A record pentru root domain cu IP-ul Vercel

4. Asteapta propagarea DNS (poate dura pana la 48 ore, de obicei 1-2 ore)
5. Vercel va emite automat certificat SSL (HTTPS)

### Pas 7: Verificare dupa Deploy

Verifica urmatoarele pagini dupa deploy:
- [ ] https://www.spalatoriaaniva.ro/ (Homepage)
- [ ] https://www.spalatoriaaniva.ro/servicii
- [ ] https://www.spalatoriaaniva.ro/tarife
- [ ] https://www.spalatoriaaniva.ro/comanda-online (testeaza formularul - trebuie sa salveze in Firebase)
- [ ] https://www.spalatoriaaniva.ro/contact
- [ ] https://www.spalatoriaaniva.ro/sitemap.xml
- [ ] https://www.spalatoriaaniva.ro/robots.txt

## Structura Proiect

```
aniva/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── orders/
│   │   │       └── create/
│   │   │           └── route.ts          # API route pentru comenzi Firebase
│   │   ├── comanda-online/
│   │   │   └── page.tsx                  # Pagina comanda online
│   │   ├── contact/
│   │   │   └── page.tsx                  # Pagina contact
│   │   ├── servicii/
│   │   │   └── page.tsx                  # Pagina servicii
│   │   ├── tarife/
│   │   │   └── page.tsx                  # Pagina tarife
│   │   ├── layout.tsx                    # Root layout cu metadata si schema
│   │   ├── page.tsx                      # Homepage
│   │   ├── robots.ts                     # robots.txt
│   │   ├── sitemap.ts                    # sitemap.xml
│   │   └── globals.css                   # Stiluri globale + design system
│   ├── components/
│   │   ├── ui/
│   │   │   └── aniva.tsx                 # Componente UI (Card, Button, Input, etc.)
│   │   ├── Header.tsx                    # Header component
│   │   └── Footer.tsx                    # Footer component
│   └── lib/
│       ├── firebaseAdmin.ts              # Firebase Admin initialization
│       └── utils.ts                      # Utility functions (cn)
├── tailwind.config.ts                    # Tailwind config cu culorile Aniva
├── package.json
├── .env.example                          # Exemplu variabile de mediu
└── README.md
```

## Design System

### Culori

- **Background Gradient**: `#F7D7C9` -> `#F4E9E1`
- **Card Surface**: `#F8F3EE`, `#FFF9F4`
- **Text**: `#2A1F18`
- **Text Muted**: `#6B5B52`
- **Border**: `#E9DED6`
- **Accent/Buttons**: `#2B1E16`
- **Hover Accent**: `#3A2A22`

### Componente UI

Toate componentele sunt disponibile in `components/ui/aniva.tsx`:
- `PageShell` - Wrapper pentru pagini cu background gradient si blur blobs
- `Card` / `SoftCard` - Carduri cu border-radius mare (32px/24px)
- `Badge` - Badge-uri pentru preturi, durata, etc.
- `ButtonPrimary` / `ButtonGhost` - Butoane pill (rounded-full)
- `Input` / `Textarea` - Input-uri cu stil Aniva si focus ring

## API Endpoints

### POST /api/orders/create

Creeaza o comanda noua in Firestore (collection: `orders`).

**Request Body:**
```json
{
  "customerName": "Ion Popescu",
  "phone": "0759123456",
  "email": "ion@exemplu.ro",
  "address": {
    "street": "Str. Exemplu",
    "number": "1",
    "bloc": "A3",
    "scara": "2",
    "ap": "14",
    "city": "Brasov",
    "county": "Brasov"
  },
  "serviceType": "spalare_covoare",
  "preferredDate": "2024-12-25",
  "notes": "Observatii"
}
```

**Response Success:**
```json
{
  "ok": true,
  "orderId": "abc123..."
}
```

**Response Error:**
```json
{
  "ok": false,
  "error": "Mesaj de eroare"
}
```

## Firebase Structure

Comenzile sunt salvate in collection `orders` cu urmatoarea structura:

```typescript
{
  sourceSite: "aniva",
  createdAt: serverTimestamp(),
  customerName: string,
  phone: string,
  email: string,
  address: {
    street: string,
    number: string,
    bloc: string,
    scara: string,
    ap: string,
    city: string,
    county: string,
    full: string  // adresa completa concatenata
  },
  serviceType: string,
  preferredDate: string,
  notes: string,
  status: "inregistrata",
  tenantId: string | null
}
```

## Scripts

- `npm run dev` - Ruleaza serverul de dezvoltare (http://localhost:3000)
- `npm run build` - Build pentru productie
- `npm run start` - Ruleaza serverul de productie (dupa build)
- `npm run lint` - Ruleaza ESLint

## Date Reale Site

- **Telefon**: 0759158914
- **Email**: spalatoriaaniva@gmail.com
- **Adresa**: Str. Panselelor Nr.2, Brasov, Romania
- **Pret**: 13 lei/mp
- **Comanda minima**:
  - 6 mp in Brasov / Stupini / Sanpetru
  - 6 mp in Codlea / Sacele / Harman / Ghimbav / Cristian
  - 25 mp in Prejmer / Poiana Brasov / Bran / Sinaia / Busteni / Predeal
- **Festonat**: 15 lei/ml
- **Durata medie**: ~3 zile lucratoare

## Nota Importanta

- **Fara diacritice in UI**: Toate textele afisate in interfata sunt fara diacritice (a in loc de a, i in loc de i, etc.)
- **Mobile-first**: Design-ul este optimizat pentru telefon, cu container max-width ~430px pe mobil
- **Firebase**: Asigura-te ca ai configurat corect Firebase Admin SDK pentru ca comenzile sa fie salvate in Firestore

## Suport

Pentru intrebari sau probleme, contacteaza echipa de dezvoltare.
