# Setup Variabile de Mediu Vercel - ANIVA

## Variabile necesare pentru formularul de comandă

### 1. Firebase Admin (OBLIGATORII)

Aceste variabile sunt necesare pentru ca API-ul să funcționeze:

#### FIREBASE_PROJECT_ID
- **Unde să găsești:** Firebase Console → Project Settings → General → Project ID
- **Exemplu:** `aniva-app-12345`

#### FIREBASE_CLIENT_EMAIL
- **Unde să găsești:** Firebase Console → Project Settings → Service Accounts
- **Exemplu:** `firebase-adminsdk-xxxxx@aniva-app-12345.iam.gserviceaccount.com`

#### FIREBASE_PRIVATE_KEY
- **Unde să găsești:** Firebase Console → Project Settings → Service Accounts
- **Pași:**
  1. Click "Generate new private key"
  2. Descarcă fișierul JSON
  3. Deschide JSON-ul și caută câmpul `private_key`
  4. Copiază întreaga valoare (include `-----BEGIN PRIVATE KEY-----` și `-----END PRIVATE KEY-----`)
  5. **IMPORTANT:** În Vercel, poți adăuga pe mai multe linii sau pe o singură linie cu `\n`

### 2. ANIVA Config (OPȚIONALE)

Aceste variabile sunt opționale dacă formularul trimite deja `ownerUid`:

#### ANIVA_TENANT_ID
- ID-ul tenant-ului din Firebase
- **Dacă nu o adaugi:** Formularul va folosi `ownerUid` din request body

#### ANIVA_USER_ID
- ID-ul utilizatorului din Firebase
- **Dacă nu o adaugi:** Formularul va folosi `ownerUid` din request body

## Pași în Vercel

### 1. Accesează Environment Variables

1. Mergi în proiectul tău pe Vercel
2. Click pe "Settings" (din meniul din stânga)
3. Click pe "Environment Variables"

### 2. Adaugă variabilele

Pentru fiecare variabilă:

1. Click "Add New"
2. **Name:** Numele variabilei (ex: `FIREBASE_PROJECT_ID`)
3. **Value:** Valoarea variabilei
4. **Environment:** Selectează:
   - ✅ Production (obligatoriu)
   - ✅ Preview (recomandat)
   - ⬜ Development (opțional)
5. Click "Save"

### 3. Redeploy

După ce adaugi toate variabilele:

1. Mergi în "Deployments"
2. Click pe ultimul deployment
3. Click "Redeploy" (sau așteaptă următorul push pentru redeploy automat)

## Verificare

După redeploy, testează formularul:
1. Accesează `https://www.spalatoriaaniva.ro/comanda-online`
2. Completează formularul
3. Trimite comanda
4. Ar trebui să funcționeze fără erori

## Troubleshooting

### Eroare: "Firebase environment variables lipsesc"

**Soluție:** Verifică că toate cele 3 variabile Firebase sunt adăugate în Vercel.

### Eroare: "Invalid private key"

**Soluție:** 
- Verifică că `FIREBASE_PRIVATE_KEY` include `-----BEGIN PRIVATE KEY-----` și `-----END PRIVATE KEY-----`
- Verifică că nu ai spații suplimentare la început/sfârșit
- Dacă ai probleme, poți încerca să adaugi cheia pe o singură linie cu `\n` în loc de newlines reale

### Eroare: "Server configuration error"

**Soluție:** 
- Verifică că formularul trimite `ownerUid` în request body
- Sau adaugă `ANIVA_TENANT_ID` sau `ANIVA_USER_ID` în environment variables

## Securitate

⚠️ **IMPORTANT:** 
- Nu partaja niciodată aceste variabile publice
- Nu le adăuga în cod (sunt deja în `.gitignore`)
- Folosește doar Environment Variables în Vercel
