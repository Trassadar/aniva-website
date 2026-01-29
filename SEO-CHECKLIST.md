# Checklist SEO pentru Migrare ANIVA

Acest document contine toate verificările necesare pentru a asigura o migrare SEO fara pierderi.

## ✅ Ce am implementat deja

### 1. Metadata completa
- ✅ Open Graph tags pentru toate paginile
- ✅ Twitter Cards pentru toate paginile
- ✅ Canonical URLs pentru toate paginile
- ✅ Title si description optimizate pentru fiecare pagina

### 2. Structured Data (JSON-LD)
- ✅ LocalBusiness schema pentru homepage
- ✅ Date complete: adresa, telefon, email, program
- ✅ Servicii si preturi incluse

### 3. Redirects
- ✅ Redirects pentru URL-uri comune WordPress
- ✅ Redirects pentru categorii, tag-uri, blog
- ✅ Redirects pentru wp-admin/wp-content (securitate)
- ✅ Redirect /preturi -> /tarife (consolidare)

### 4. Sitemap si Robots
- ✅ Sitemap.xml cu toate paginile importante
- ✅ Robots.txt configurat corect
- ✅ Priorities si changeFrequency setate

## 📋 Verificari inainte de deployment

### Technical SEO

- [ ] **Testeaza build-ul local**
  ```bash
  npm run build
  npm start
  ```

- [ ] **Verifica ca toate paginile se incarca**
  - Homepage: `/`
  - Servicii: `/servicii`
  - Tarife: `/tarife`
  - Preturi: `/preturi`
  - Comanda online: `/comanda-online`
  - Comanda: `/comanda`
  - Contact: `/contact`

- [ ] **Verifica sitemap.xml**
  - Acceseaza: `http://localhost:3000/sitemap.xml`
  - Verifica ca toate URL-urile sunt corecte
  - Verifica ca nu sunt URL-uri duplicate

- [ ] **Verifica robots.txt**
  - Acceseaza: `http://localhost:3000/robots.txt`
  - Verifica ca sitemap-ul este specificat corect

- [ ] **Testeaza redirects-urile**
  - `/preturi` -> `/tarife`
  - `/home` -> `/`
  - `/acasa` -> `/`

### Content SEO

- [ ] **Verifica title-urile**
  - Fiecare pagina are un title unic
  - Title-urile contin cuvinte cheie relevante
  - Title-urile nu depasesc 60 caractere

- [ ] **Verifica description-urile**
  - Fiecare pagina are o description unica
  - Description-urile contin cuvinte cheie
  - Description-urile nu depasesc 160 caractere

- [ ] **Verifica heading-urile (H1, H2, etc.)**
  - Fiecare pagina are un singur H1
  - H1-urile contin cuvinte cheie principale
  - Structura heading-urilor este logica

- [ ] **Verifica imagini**
  - Toate imaginile au alt text
  - Imaginile sunt optimizate (compresie)
  - Imaginile folosesc format modern (WebP daca e posibil)

### Performance

- [ ] **Testeaza viteza site-ului**
  - Foloseste [PageSpeed Insights](https://pagespeed.web.dev/)
  - Target: peste 90 pentru mobile si desktop
  - Verifica Core Web Vitals

- [ ] **Optimizeaza imagini**
  - Foloseste Next.js Image component (deja folosit)
  - Verifica ca imaginile sunt optimizate
  - Considera folosirea WebP format

- [ ] **Verifica lazy loading**
  - Imagini si componente se incarca la nevoie
  - Nu blocheaza rendering-ul initial

## 🔍 Verificari dupa deployment

### In Google Search Console

1. **Adauga proprietatea**
   - Mergi la [Google Search Console](https://search.google.com/search-console)
   - Adauga: `https://www.spalatoriaaniva.ro`
   - Verifica proprietatea (Vercel va iti da un token)

2. **Trimite sitemap-ul**
   - Sitemaps -> Adauga: `https://www.spalatoriaaniva.ro/sitemap.xml`
   - Asteapta procesarea (1-2 zile)

3. **Monitorizeaza indexing-ul**
   - Coverage -> Verifica erorile
   - Verifica ca paginile importante sunt indexate
   - Verifica ca nu sunt duplicate content

4. **Monitorizeaza performanta**
   - Performance -> Verifica queries importante
   - Verifica CTR-ul
   - Verifica pozitiile pentru cuvinte cheie principale

### Testeaza redirects-urile

Dupa ce site-ul este live, testeaza redirects-urile pentru URL-uri vechi:

- [ ] `/preturi` -> `/tarife`
- [ ] `/home` -> `/`
- [ ] `/acasa` -> `/`
- [ ] `/servicii/ceva` -> `/servicii`
- [ ] `/blog/articol` -> `/`

### Verifica structured data

1. **Testeaza cu Google Rich Results Test**
   - Mergi la [Rich Results Test](https://search.google.com/test/rich-results)
   - Introdu URL-ul homepage-ului
   - Verifica ca LocalBusiness schema este detectata

2. **Verifica cu Schema Markup Validator**
   - [Schema.org Validator](https://validator.schema.org/)
   - Introdu URL-ul sau codul JSON-LD
   - Verifica ca nu sunt erori

## 🚨 Probleme comune si solutii

### Problema: Paginile nu sunt indexate

**Solutie:**
- Verifica robots.txt - nu blocheaza paginile
- Verifica ca paginile nu au `noindex` in metadata
- Trimite sitemap-ul in Google Search Console
- Foloseste "Request Indexing" pentru paginile importante

### Problema: Redirects nu functioneaza

**Solutie:**
- Verifica `next.config.ts` - redirects sunt configurate corect
- Verifica ca redirects sunt `permanent: true` (301)
- Testeaza redirects-urile manual
- Verifica logs-urile Vercel pentru erori

### Problema: Structured data nu este detectata

**Solutie:**
- Verifica ca JSON-LD este in `<body>` (nu in `<head>`)
- Verifica ca JSON-ul este valid
- Foloseste Google Rich Results Test
- Asteapta 1-2 saptamani pentru re-indexare

### Problema: Viteza site-ului este lenta

**Solutie:**
- Verifica imagini - optimizeaza-le
- Verifica bundle size - foloseste `npm run build` si verifica output-ul
- Activeaza caching in Vercel
- Considera folosirea CDN pentru assets statice

## 📊 Monitoring continuu

### Saptamana 1-2 dupa migrare

- [ ] Verifica zilnic Google Search Console pentru erori
- [ ] Monitorizeaza pozitiile pentru cuvinte cheie principale
- [ ] Verifica ca traficul nu scade dramatic
- [ ] Testeaza redirects-urile pentru URL-uri vechi

### Luna 1 dupa migrare

- [ ] Analizeaza performanta in Google Search Console
- [ ] Compara traficul cu luna precedenta
- [ ] Verifica ca toate paginile importante sunt indexate
- [ ] Optimizeaza paginile cu performanta slaba

### Luna 2-3 dupa migrare

- [ ] Analizeaza tendintele de trafic
- [ ] Identifica pagini noi care trebuie optimizate
- [ ] Verifica ca nu sunt probleme tehnice
- [ ] Considera adaugarea de content nou pentru SEO

## 🎯 Cuvinte cheie principale de monitorizat

Urmareste pozitiile pentru:
- "spalatorie covoare brasov"
- "spalare covoare brasov"
- "curatare covoare brasov"
- "spalatorie aniva"
- "pret spalare covoare brasov"
- "ridicare covoare brasov"

## 📝 Nota finala

**IMPORTANT:** 
- Nu sterge site-ul WordPress imediat
- Pastreaza-l activ cel putin 1-2 saptamani
- Monitorizeaza zilnic in primele 2 saptamani
- Contacteaza un specialist SEO daca observi scaderi majore de trafic

**Timp estimat pentru stabilizare SEO:** 2-4 saptamani

Dupa aceasta perioada, Google ar trebui sa:
- Indexeze toate paginile noi
- Recunoasca redirects-urile
- Actualizeze pozitiile in search results
- Stabilizeze traficul
