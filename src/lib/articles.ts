// Articolele de blog. Functii: getArticle, getAllArticles.
// Textul este informativ. Nu inventeaza recenzii, statistici sau premii.

export interface ArticleBlock {
  type: 'p' | 'h2' | 'ul';
  text?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  published: string;
  blocks: ArticleBlock[];
}

const published = '2026-11-26';

const articles: Article[] = [
  {
    slug: 'pete-de-vin-pe-covor',
    title: 'Cum scoți petele de vin de pe covor',
    description:
      'Ce faci în primele minute după vin vărsat pe covor, ce să nu torni pe fibră și când merită spălarea în atelier, cu ridicare de acasă.',
    published,
    blocks: [
      {
        type: 'p',
        text: 'Vinul vărsat pe covor pare o urgență, și chiar este, dar numai în primele minute. După aceea pata nu se mai „șterge”: pigmentul intră în fibră. Ce poți face acasă este să limitezi pata. Ce nu poți face, de cele mai multe ori, este să readuci covorul la starea dinainte cu o sticlă din dulap.',
      },
      {
        type: 'h2',
        text: 'În primul minut: tamponezi, nu freci',
      },
      {
        type: 'p',
        text: 'Ia un șervețel alb, un prosop curat sau hârtie absorbantă. Apasă pe pată, ridică, schimbă zona curată a prosopului și apasă din nou. Frecarea împinge vinul mai adânc și lărgește pata, mai ales pe shaggy, unde firul este lung. Dacă pe covor a rămas o baltă, adună lichidul cu lingura sau cu prosopul înainte să faci orice altceva.',
      },
      {
        type: 'p',
        text: 'Lucrează de la marginea petei spre mijloc, ca să nu o întinzi pe zona curată. Nu turna apă dintr-o sticlă peste tot covorul: uzi dosul, iar umezeala prinsă sub covor miroase în câteva zile.',
      },
      {
        type: 'h2',
        text: 'Apă rece, nu apă fierbinte',
      },
      {
        type: 'p',
        text: 'După ce ai absorbit surplusul, umezește ușor un colț de cârpă albă cu apă rece și tamponează din nou. Apa fierbinte fixează pigmentul de vin, la fel cum fixează o pată de sânge sau de cafea. Apa carbogazoasă, turnată puțin pe cârpă, nu direct în valuri pe covor, ajută uneori la vinul proaspăt, pentru că bulele ridică pigmentul spre suprafață. Tot tamponezi, tot cu prosop uscat după.',
      },
      {
        type: 'p',
        text: 'Un strop de detergent de vase, diluat mult în apă rece, poate ajuta pe un covor sintetic. Pui soluția pe cârpă, nu pe sticlă. Clătești locul tot prin tamponare cu apă curată, apoi usuci cu prosop și aer, nu cu fierul de călcat și nu cu uscătorul de păr ținut aproape. Căldura mare fixează pata rămasă.',
      },
      {
        type: 'h2',
        text: 'Ce să nu torni pe covor',
      },
      {
        type: 'ul',
        items: [
          'Înălbitor sau clor, mai ales pe lână și pe culori închise: decolorează fibra, iar pata de vin devine o pată deschisă.',
          'Amoniac amestecat cu clor sau cu orice alt produs de curățenie. Amestecul poate fi periculos, nu doar pentru covor.',
          'Oțet și bicarbonat turnate unul după altul, în cantitate mare, „ca să facă spumă”. Spuma nu scoate pigmentul din dosul covorului.',
          'Sare pusă în strat gros și lăsată o zi întreagă pe un covor ud. Sarea poate ține umezeala și poate aspri lâna.',
          'Frecat cu peria până se rarește firul. Locul curat, dar tocit, se vede mai tare decât o umbră de vin.',
        ],
      },
      {
        type: 'h2',
        text: 'Lână, mătase și shaggy',
      },
      {
        type: 'p',
        text: 'Pe lână și pe mătase nu experimenta cu detergenți tari. Fibrele naturale se pot pâsli, se pot decolora sau își pierd luciul. Dacă covorul este de mătase, sau are franjuri subțiri, oprește-te după tamponarea cu apă rece și lasă spălarea pentru atelier. Shaggy-ul ține vinul pe toată lungimea firului: ceea ce pare „ieșit” la suprafață rămâne jos, lângă dos.',
      },
      {
        type: 'p',
        text: 'Același lucru este valabil pentru un covor persan sau pentru unul cu culori care fug. Un test pe un colț ascuns, cu apă rece, îți arată dacă culoarea se ia pe cârpa albă. Dacă se ia, nu mai insista acasă.',
      },
      {
        type: 'h2',
        text: 'Când pata nu mai este treaba de acasă',
      },
      {
        type: 'p',
        text: 'Dacă vinul a stat ore sau zile, dacă pata este mare, dacă sub covor este ud sau dacă a rămas miros dulceag, tamponarea nu mai schimbă mare lucru. Spălarea în atelier înseamnă desprăfuire, spălare controlată, stoarcere și uscare cu dezumidificatoare, nu o clătire pe jos. Nici acolo nu se poate promite că orice pată veche dispare: pigmentul intrat în fibră poate lăsa o umbră. Diferența este că se spală toată grosimea, nu doar fața.',
      },
      {
        type: 'p',
        text: 'La [ANIVA](/), spălarea covoarelor în Brașov este 13 lei/mp. Comanda minimă în oraș este 6 mp, adică 78 lei. Ridicăm covorul de la domiciliu și îl aducem înapoi; nu primim covoare la sediu. Termenul obișnuit este de 3 zile lucrătoare. Poți lăsa dimensiunile în [comanda online](/comanda-online) sau să suni la 0759 158 914. Dacă marginea este mâncată, [festonarea](/festonare-covoare) se măsoară separat, la 13 lei pe metru liniar, și se confirmă înainte.',
      },
      {
        type: 'p',
        text: 'Până ajunge mașina, lasă covorul aerisit, cu pata tamponată, nu înecat în apă. Un covor ud rulat în așteptare prinde miros mai greu de scos decât vinul.',
      },
    ],
  },
  {
    slug: 'cat-de-des-se-spala-covoarele',
    title: 'Cât de des se spală covoarele',
    description:
      'Un ritm practic pentru spălat covoarele acasă: o dată pe an într-o casă liniștită, mai des cu copii, animale sau praf de iarnă. Fără reguli inventate.',
    published,
    blocks: [
      {
        type: 'p',
        text: 'Nu există o zi din calendar în care toate covoarele din Brașov trebuie spălate. Ritmul ține de cum este folosit covorul: cine calcă pe el, dacă sunt animale, dacă iarna aduci sare și noroi, și dacă praful a intrat în dos, nu doar în fir. Aspiratorul întreține. Spălarea scoate ce aspiratorul nu mai poate.',
      },
      {
        type: 'h2',
        text: 'Un ritm simplu, pe care îl poți verifica tu',
      },
      {
        type: 'p',
        text: 'Într-o casă fără animale și fără copii mici, o spălare pe an este un ritm bun pentru covorul din living și pentru cel din dormitor. Nu pentru că o spune o cifră de pe internet, ci pentru că într-un an se adună praf fin, fire de păr și urme de tălpi pe care aspiratul săptămânal nu le ridică din dos.',
      },
      {
        type: 'p',
        text: 'Dacă ai câine, pisică sau copii care mănâncă pe covor, de două ori pe an se simte diferența: o dată după iarnă, o dată înainte de sezonul rece. Nu este o obligație. Este un interval la care mirosul și culoarea încă se pot recupera ușor, înainte să stea un an în plus în fibră.',
      },
      {
        type: 'h2',
        text: 'Semne că a trecut de aspirat',
      },
      {
        type: 'ul',
        items: [
          'Culoarea pare mai cenușie pe mijloc, unde se calcă, și mai vie sub mobilă.',
          'Când bați ușa sau calci apăsat, se ridică un praf fin.',
          'Mirosul rămâne după ce ai aerisit camera: praf umed, mâncare sau animale.',
          'Aspiratorul se umple repede, iar a doua zi covorul arată la fel.',
          'Pe dos apar fire de nisip sau o dungă întunecată. Asta nu iese cu o duză de canapea.',
        ],
      },
      {
        type: 'h2',
        text: 'Iarna în Brașov',
      },
      {
        type: 'p',
        text: 'Între noiembrie și martie, pe tălpi intră zăpadă, sare de pe trotuar și noroi. Sarea usucă fibra și, dacă rămâne în covor, ține umezeala. De aceea primăvara este momentul în care multe comenzi pleacă din apartamente: nu pentru că așa cere un obicei, ci pentru că sezonul rece lasă în covor ceva ce vara nu lasă.',
      },
      {
        type: 'p',
        text: 'Un preș la intrare, scuturat des, protejează covorul mare. Nu înlocuiește spălarea, dar amână momentul în care nisipul ajunge sub masă. Dacă preșul este el însuși un covor care se poate ridica, intră la aceeași comandă și se adună la metrii pătrați.',
      },
      {
        type: 'h2',
        text: 'Copii, alergii și animale',
      },
      {
        type: 'p',
        text: 'Copiii stau pe covor, nu pe canapea. Praful, firimiturile și părul ajung la înălțimea la care ei respiră când se joacă. O spălare mai deasă nu este un tratament medical și nu înlocuiește sfatul unui medic. Este doar o curățare a suprafeței pe care se joacă.',
      },
      {
        type: 'p',
        text: 'La animale, problema nu este doar părul. Urina uscată stă în dos. Aspiratul o împrăștie, nu o scoate. Dacă mirosul revine când camera este închisă sau când umiditatea crește, covorul are nevoie de spălare și de uscare controlată, nu de un parfum pulverizat pe față. Parfumul acoperă o zi și lasă dosul la fel.',
      },
      {
        type: 'h2',
        text: 'Între două spălări',
      },
      {
        type: 'p',
        text: 'Aspiră încet, pe ambele direcții ale firului, inclusiv marginile. Mută din când în când fotoliul: praful de sub el nu se vede, dar iese când aerisești. Nu uda covorul ca să „îl răcorești”. Apa fără stoarcere și fără uscare în profunzime este modul în care apare mirosul de umed, chiar dacă fața pare uscată seara.',
      },
      {
        type: 'p',
        text: 'Petele proaspete se tamponează imediat. O pată de vin lăsată o săptămână nu așteaptă spălarea anuală: cu cât stă, cu atât pigmentul se fixează. Pentru primii pași, fără frecat și fără apă fierbinte, este ghidul despre [petele de vin](/blog/pete-de-vin-pe-covor).',
      },
      {
        type: 'h2',
        text: 'Ce înseamnă o spălare, nu doar o clătire',
      },
      {
        type: 'p',
        text: 'La [spălătoria ANIVA](/) covorul pleacă de la tine, se spală în atelier și se întoarce uscat. Pașii sunt inspecție, desprăfuire, aspirare, spălare controlată, stoarcere și uscare. Prețul este 13 lei/mp, cu minim 6 mp în Brașov, adică 78 lei. Ridicarea și livrarea sunt gratuite peste acest minim. Termenul obișnuit este de 3 zile lucrătoare. Nu primim covoare aduse la sediu: venim noi.',
      },
      {
        type: 'p',
        text: 'Lâna și sinteticele nu se spală la fel; diferența este explicată în articolul despre [lână și covoare sintetice](/blog/covoare-din-lana-sau-sintetice). Dacă vrei o programare, lasă dimensiunile în [comanda online](/comanda-online) sau sună la 0759 158 914. Mai multe covoare din aceeași casă se adună: două covoare de 2×2 m fac 8 mp, deci ești peste minim și plătești suprafața reală.',
      },
    ],
  },
  {
    slug: 'covoare-din-lana-sau-sintetice',
    title: 'Spălarea covoarelor din lână și a celor sintetice',
    description:
      'De ce lâna, mătasea și shaggy-ul nu se spală ca un covor sintetic, cum se usucă și de ce prețul pe metru pătrat rămâne 13 lei.',
    published,
    blocks: [
      {
        type: 'p',
        text: 'Două covoare de aceeași mărime pot ieși complet diferit dintr-o spălare greșită. Lâna este păr de animal. Un covor sintetic este plastic filat: polipropilenă, poliester sau nailon. Apa, frecarea și căldura nu înseamnă același lucru pentru ele. De aceea, la inspecție, prima întrebare nu este „cât de murdar e”, ci „din ce este făcut”.',
      },
      {
        type: 'h2',
        text: 'Lâna: se poate pâsli',
      },
      {
        type: 'p',
        text: 'Firul de lână are solzi. Dacă este frecat tare, în apă caldă și cu detergent agresiv, solzii se agață între ei și covorul se pâslește: se strânge, se îngroașă și nu se mai întinde la loc. Acesta este motivul pentru care lâna nu se spală „mai zdravăn ca să iasă mai bine”. Se spală mai controlat.',
      },
      {
        type: 'p',
        text: 'Lâna bună ține murdăria mai degrabă la suprafață decât în miezul firului, deci o spălare potrivită o curăță bine. În schimb, stă udă mai mult și trebuie stoarsă și uscată până în dos, altfel miroase. În atelier, uscarea se face cu dezumidificatoare și ventilatoare, nu pe calorifer și nu împachetată.',
      },
      {
        type: 'p',
        text: 'Dacă marginea de lână este desfăcută, spălarea nu o coase la loc. [Festonarea](/festonare-covoare) este alt serviciu, 13 lei pe metru liniar, măsurat pe contur. Se confirmă separat, ca să nu se amestece cu metrii pătrați.',
      },
      {
        type: 'h2',
        text: 'Sinteticele: rezistente, dar țin praful',
      },
      {
        type: 'p',
        text: 'Polipropilena, des întâlnită la covoarele de trafic, nu absoarbe apa în fibră așa cum o face lâna. Pata stă mai mult între fire. Se spală mai ușor, dar nisipul și praful se bat în dos și ies greu dacă sari peste desprăfuire. Poliesterul ține culoarea bine, însă se poate turti pe zonele călcate. Nailonul este elastic și își revine mai bine după spălare, dacă nu a fost topit de o căldură prea mare.',
      },
      {
        type: 'p',
        text: 'Pe sintetice, oamenii pun adesea prea mult detergent acasă. Spuma rămasă în dos atrage murdăria la loc, în câteva săptămâni, și covorul pare „iar murdar” deși a fost frecat. În atelier, clătirea și stoarcerea există tocmai ca să nu rămână soluție în covor.',
      },
      {
        type: 'h2',
        text: 'Shaggy și mătase',
      },
      {
        type: 'p',
        text: 'Shaggy-ul este, de cele mai multe ori, sintetic cu fir lung. Arată moale și ține în el tot ce cade: nisip, păr, firimituri. Dacă îl uzi înainte să scoți praful, faci noroi în fibră. Ordinea corectă este desprăfuire, aspirare, abia apoi apă. Uscarea durează până se usucă firul pe toată lungimea, nu doar vârfurile.',
      },
      {
        type: 'p',
        text: 'Mătasea este rară și subțire. Nu suportă frecarea, alcalinitatea mare și apa în exces. Dacă ai un covor de mătase, sau unul cu fire de mătase în model, spune asta când comanzi, înainte de ridicare. Nu îl freca acasă cu o perie „ca să vezi dacă iese pata”. Un ochi decolorat nu se mai repară din detergent.',
      },
      {
        type: 'h2',
        text: 'Mocheta nu este un covor rulat',
      },
      {
        type: 'p',
        text: 'Mocheta lipită, prinsă în cuie sau întinsă de la un perete la altul nu se ridică și nu se tarifează la 13 lei/mp. Este alt serviciu, la cerere, cu preț după material și după cât de prinsă este de podea. Pagina de [curățare mochetă](/curatare-mocheta-brasov) explică diferența. Dacă o poți rula și urca în mașină, este covor, indiferent că o numești mochetă în casă.',
      },
      {
        type: 'h2',
        text: 'Prețul nu depinde de fibră',
      },
      {
        type: 'p',
        text: 'La ANIVA, spălarea este 13 lei/mp și pentru lână, și pentru sintetic, și pentru shaggy, atât timp cât covorul se poate ridica. Nu există un tarif separat „de lână” pe [lista de prețuri](/tarife). Ce se schimbă este modul de lucru, nu lei pe metru. Comanda minimă în Brașov este 6 mp (78 lei). Un covor sub 1 mp se tarifează ca 1 mp.',
      },
      {
        type: 'p',
        text: 'Ridicăm de la domiciliu în Brașov și în localitățile din jur și aducem covorul uscat. Termenul obișnuit este de 3 zile lucrătoare. Poți vedea cum decurge comanda pe [pagina principală](/) sau lăsa datele în [comanda online](/comanda-online). La telefon, 0759 158 914, este de ajuns să spui materialul dacă îl știi și dimensiunile: lungime și lățime, în metri.',
      },
    ],
  },
];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
