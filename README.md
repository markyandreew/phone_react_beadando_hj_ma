 <!-- Horváth Jenni, Márki András - Telefonok web -->


<!-- TO DO LIST -->

<!-- angol változónevek -->



<!-- JENNI 
----------------------------------------------------------------------------------------
FONTOS: (ezt a részt majd törölheted) - src - components - szekciók mappára bontva, a könnyebb kezelés miatt (README LEGALJÁN MAPPASTRUKTURA)
tsx és css is van benne,  a css-ekbe bele importáltam a nav-ot és bele fogom tenni a footert is, ugye ez minden oldalon ugyan az. A stylust az index.css-ben a global-ba alakítjuk ki, ezen belül meg majd, ami kell ami az adott oldalon egyedi pl.: telefonok gridbe , de a fő elemek meg ott

http://localhost:3000/home   <-------  /HOME  nem sima / , hanem Home az útvonal, amúgy not found page.
---------------------------------------------------------------------------------------

- NotFound - oldal -  középen elhelyezve egy H1 v 2 v 3 -as szöveg, Köszönjük a vásárlást
alatta egy rövid szöveg -> hamarosn megérkezik a telod stb.stb...

alatta pedig egy button -> vissza a főoldalra

- Payment - oldal - adatok bekérése, név, email, teloszám, cím, fizetési mód radio gombokkal

2 gomb - elvetés , fizetés, 

és amit még akarsz :D 


JELENLEG FOGLYAMATBAN: (ide írd min dolgozol épp)

-->


<!-- ANDRIS -
---------------------------------------------------------------------------------------

Index -  Teljes Főoldal felépítés - nav bar, hero, sections, footer, 


JELENLEG FOGLYAMATBAN:  
- Nav bar css
- Hero section kialakítás (Ötlet?)


-->


<!-- MEGJEGYZÉSEK -  FONTOS FELJEGYZÉSEK-------------------!!!!!!!!!!!!!!!!!!!!!!!
-----------------------------------------------------------------------------------------

- tsconfig.json -ben bundler-re lett állítva a moduleResolution node helyett (nem működött) -->


<!-- MAPPASTRUKTÚRA 


src/
 ├─ components/                  Globális, újrahasznosítható komponensek
 │   ├─ NavBar/
 │   │   ├─ NavBar.tsx
 │   │   └─ NavBar.module.css
 │   ├─ Footer/
 │   │   ├─ Footer.tsx
 │   │   └─ Footer.module.css
 │   └─ Layout/
 │       ├─ Layout.tsx           NavBar + Footer + children
 │       └─ Layout.module.css    opcionális layout stílus
 ├─ pages/                       Oldalak
 │   ├─ Home/
 │   │   ├─ Home.tsx
 │   │   └─ Home.module.css
 │   ├─ Payment/
 │   │   ├─ Payment.tsx
 │   │   └─ Payment.module.css
 │   ├─ SuccessPayment/
 │   │   ├─ SuccessPayment.tsx
 │   │   └─ SuccessPayment.module.css
 │   └─ NotFound/
 │       ├─ NotFound.tsx
 │       └─ NotFound.module.css
 ├─ App.tsx                      App + React Router beállítás
 ├─ index.tsx                    belépési pont
 └─ index.css                    globális stílusok (body, font, alap színek)

 -->