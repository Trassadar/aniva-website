# Ghid Deployment ANIVA pe Vercel

Acest ghid te ajuta sa urci site-ul pe Vercel folosind GitHub, fara sa pierzi pozitiile SEO pe Google.

## Pregatire inainte de deployment

### 1. Verifica ca totul functioneaza local

```bash
cd aniva
npm install
npm run build
npm start
```

Testeaza site-ul local pe `http://localhost:3000` si verifica ca toate paginile functioneaza.

### 2. Pregateste repository-ul GitHub

1. Creeaza un repository nou pe GitHub (ex: `aniva-website`)
2. Initializeaza git in folderul `aniva`:

```bash
cd aniva
git init
git add .
git commit -m "Initial commit - ANIVA website"
git branch -M main
git remote add origin https://github.com/TU_USERNAME/aniva-website.git
git push -u origin main
```

## Deployment pe Vercel

### Pasul 1: Conecteaza GitHub cu Vercel

1. Mergi pe [vercel.com](https://vercel.com) si logheaza-te
2. Click pe "Add New Project"
3. Selecteaza repository-ul `aniva-website` din GitHub
4. Vercel va detecta automat ca este un proiect Next.js

### Pasul 2: Configureaza proiectul

**Important:** In sectiunea "Settings" -> "General":

1. **Project Name**: `aniva-website` sau `spalatoriaaniva`
2. **Framework Preset**: Next.js (detectat automat)
3. **Root Directory**: `aniva` (daca repository-ul contine folderul aniva)
4. **Build Command**: `npm run build` (default)
5. **Output Directory**: `.next` (default)
6. **Install Command**: `npm install` (default)

### Pasul 3: Variabile de mediu (daca sunt necesare)

Daca ai variabile de mediu (ex: Firebase keys), adauga-le in:
- Settings -> Environment Variables

**Exemplu:**
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `FIREBASE_ADMIN_PRIVATE_KEY`
- etc.

### Pasul 4: Domain Configuration (CRITICAL pentru SEO)

1. Mergi la Settings -> Domains
2. Adauga domeniul: `www.spalatoriaaniva.ro`
3. Vercel va iti da instructiuni pentru DNS:
   - Adauga un record CNAME in DNS-ul domeniului
   - Point `www` la `cname.vercel-dns.com`

**IMPORTANT:** 
- Asteapta sa se propage DNS-ul (poate dura pana la 24 ore)
- Verifica ca domeniul functioneaza pe Vercel inainte de a schimba DNS-ul vechi

### Pasul 5: Deploy

1. Click pe "Deploy"
2. Asteapta sa se termine build-ul (2-5 minute)
3. Site-ul va fi live pe URL-ul Vercel (ex: `aniva-website.vercel.app`)

## Migrare SEO - Pasii critici

### Inainte de a schimba DNS-ul:

1. **Verifica ca site-ul functioneaza pe Vercel**
   - Acceseaza URL-ul Vercel
   - Testeaza toate paginile
   - Verifica ca redirects functioneaza

2. **Verifica sitemap-ul**
   - Acceseaza: `https://aniva-website.vercel.app/sitemap.xml`
   - Verifica ca toate URL-urile sunt corecte

3. **Verifica robots.txt**
   - Acceseaza: `https://aniva-website.vercel.app/robots.txt`

### Schimbarea DNS-ului (Momentul critic)

**Cand site-ul este gata pe Vercel:**

1. **Inregistreaza site-ul in Google Search Console**
   - Mergi la [Google Search Console](https://search.google.com/search-console)
   - Adauga proprietatea: `https://www.spalatoriaaniva.ro`
   - Verifica proprietatea (Vercel va iti da un token pentru verificare)

2. **Schimba DNS-ul**
   - Mergi la provider-ul de domeniu (unde ai cumparat domeniul)
   - Schimba record-ul A sau CNAME pentru `www.spalatoriaaniva.ro`
   - Point la Vercel (urmareste instructiunile Vercel)

3. **Asteapta propagarea DNS** (1-24 ore)
   - Verifica cu: `nslookup www.spalatoriaaniva.ro`
   - Sau foloseste: [whatsmydns.net](https://www.whatsmydns.net)

4. **Dupa ce DNS-ul s-a propagat:**
   - Site-ul vechi WordPress va fi inlocuit automat
   - Redirects-urile vor functiona pentru URL-urile vechi

### Dupa migrare:

1. **Trimite sitemap-ul la Google**
   - In Google Search Console: Sitemaps -> Adauga `https://www.spalatoriaaniva.ro/sitemap.xml`

2. **Monitorizeaza in Google Search Console**
   - Verifica daca apar erori
   - Verifica indexing-ul paginilor
   - Verifica redirects-urile

3. **Testeaza redirects-urile**
   - Acceseaza URL-uri vechi de pe site-ul WordPress
   - Verifica ca redirecteaza corect

4. **Verifica viteza site-ului**
   - Foloseste [PageSpeed Insights](https://pagespeed.web.dev/)
   - Optimizeaza daca este necesar

## Configurari importante Vercel

### Headers pentru SEO

Vercel va adauga automat headers necesare, dar poti adauga custom headers in `next.config.ts`:

```typescript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ];
},
```

### Cache pentru static assets

Vercel va cache-ui automat static assets, dar poti optimiza in `next.config.ts`:

```typescript
async headers() {
  return [
    {
      source: '/images/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ];
},
```

## Rollback (daca ceva merge rau)

Daca site-ul nou are probleme:

1. In Vercel: Deployments -> Selecteaza un deployment vechi -> "Promote to Production"
2. Sau schimba DNS-ul inapoi la hosting-ul vechi WordPress

## Checklist final

- [ ] Site-ul functioneaza local fara erori
- [ ] Repository-ul este pe GitHub
- [ ] Proiectul este conectat pe Vercel
- [ ] Build-ul reuseste pe Vercel
- [ ] Toate paginile functioneaza pe URL-ul Vercel
- [ ] Sitemap.xml este accesibil
- [ ] Robots.txt este accesibil
- [ ] Redirects functioneaza
- [ ] Domain-ul este configurat pe Vercel
- [ ] DNS-ul este schimbat
- [ ] Site-ul este inregistrat in Google Search Console
- [ ] Sitemap-ul este trimis la Google
- [ ] Monitorizezi erorile in Search Console

## Suport

Daca ai probleme:
- Verifica logs-urile in Vercel: Deployments -> Selecteaza deployment -> "View Function Logs"
- Verifica erorile in Google Search Console
- Contacteaza support Vercel daca este necesar

## Nota importanta

**Nu sterge site-ul WordPress imediat!** 
Pastreaza-l activ cel putin 1-2 saptamani dupa migrare pentru a permite:
- Google sa indexeze noile URL-uri
- Redirects-urile sa functioneze pentru utilizatorii care acceseaza link-uri vechi
- Sa poti face rollback daca este necesar
