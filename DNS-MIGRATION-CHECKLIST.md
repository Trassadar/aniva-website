# Checklist Migrare DNS - ANIVA

## ⚠️ IMPORTANT: Verificari inainte de a schimba DNS-ul

### 1. Verifica ca site-ul functioneaza pe Vercel

Inainte de a schimba DNS-ul, verifica:

- [ ] Site-ul este live pe URL-ul Vercel (ex: `aniva-website.vercel.app`)
- [ ] Toate paginile se incarca corect:
  - [ ] Homepage: `https://aniva-website.vercel.app/`
  - [ ] Servicii: `https://aniva-website.vercel.app/servicii`
  - [ ] Tarife: `https://aniva-website.vercel.app/tarife`
  - [ ] Contact: `https://aniva-website.vercel.app/contact`
  - [ ] Comanda online: `https://aniva-website.vercel.app/comanda-online`
- [ ] Sitemap functioneaza: `https://aniva-website.vercel.app/sitemap.xml`
- [ ] Robots.txt functioneaza: `https://aniva-website.vercel.app/robots.txt`
- [ ] Redirects functioneaza (testeaza `/preturi` → ar trebui sa redirecteze la `/tarife`)

### 2. Inregistreaza site-ul in Google Search Console

**CRITICAL:** Fa asta INAINTE de a schimba DNS-ul!

1. Mergi la [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Selecteaza "URL prefix"
4. Introdu: `https://www.spalatoriaaniva.ro`
5. Verifica proprietatea:
   - Vercel va iti da un token pentru verificare
   - Sau poti verifica prin DNS (daca ai acces)
   - Sau poti verifica prin HTML tag (adauga tag-ul in `<head>`)

### 3. Schimba DNS-ul

**Unde sa schimbi DNS-ul:**
- La provider-ul unde ai cumparat domeniul (ex: Namecheap, GoDaddy, etc.)
- Sau la provider-ul de hosting unde ai DNS-ul configurat

**Ce sa schimbi:**

1. **Gaseste record-ul CNAME pentru `www`**
   - Daca exista deja un CNAME pentru `www`, modifica-l
   - Daca nu exista, creeaza unul nou

2. **Seteaza CNAME:**
   - **Name/Host:** `www`
   - **Value/Target:** `cname.vercel-dns.com` (sau ce iti da Vercel)
   - **TTL:** 3600 (sau default)

3. **Pentru domeniul root (`@` sau `spalatoriaaniva.ro`):**
   - Vercel recomanda sa folosesti un record A sau ALIAS
   - Sau poti sa redirectezi `spalatoriaaniva.ro` → `www.spalatoriaaniva.ro`
   - Verifica instructiunile exacte in Vercel → Settings → Domains

### 4. Asteapta propagarea DNS

- Propagarea DNS poate dura de la cateva minute la 24 ore
- Verifica cu: [whatsmydns.net](https://www.whatsmydns.net)
- Sau in PowerShell: `nslookup www.spalatoriaaniva.ro`

### 5. Dupa ce DNS-ul s-a propagat

1. **Verifica ca site-ul functioneaza pe domeniul nou:**
   - `https://www.spalatoriaaniva.ro`
   - Testeaza toate paginile

2. **Trimite sitemap-ul la Google:**
   - In Google Search Console: Sitemaps → Adauga
   - URL: `https://www.spalatoriaaniva.ro/sitemap.xml`

3. **Monitorizeaza in Google Search Console:**
   - Verifica erorile (Coverage)
   - Verifica indexing-ul paginilor
   - Verifica redirects-urile

### 6. Pastreaza site-ul WordPress activ

**CRITICAL:** Nu sterge site-ul WordPress imediat!

- Pastreaza-l activ cel putin 1-2 saptamani
- Asta permite:
  - Google sa indexeze noile URL-uri
  - Redirects-urile sa functioneze pentru link-uri vechi
  - Sa poti face rollback daca este necesar

### 7. Monitorizeaza primele 2 saptamani

- Verifica zilnic Google Search Console pentru erori
- Monitorizeaza pozitiile pentru cuvinte cheie principale
- Verifica ca traficul nu scade dramatic
- Testeaza redirects-urile pentru URL-uri vechi

## Rollback (daca ceva merge rau)

Daca site-ul nou are probleme majore:

1. **Schimba DNS-ul inapoi:**
   - Sterge sau modifica CNAME-ul pentru `www`
   - Point inapoi la hosting-ul WordPress vechi

2. **In Vercel:**
   - Poti sa "unlink" domeniul temporar
   - Sau sa promovezi un deployment vechi

## Contact

Daca ai probleme, verifica:
- Logs-urile in Vercel: Deployments → Selecteaza deployment → "View Function Logs"
- Erorile in Google Search Console
- Support Vercel daca este necesar
