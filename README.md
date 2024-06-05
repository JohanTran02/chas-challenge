# Xplore

Xplore är en webbapplikation som uppmuntrar människor att upptäcka Sveriges natur på ett roligt och interaktivt sätt genom att samla på "stamps". Stamps är uppdrag som man kan samla genom att använda kameran för att ta bilder av de föremål som uppdraget kräver. När en bild godkänns, erhåller användaren en avklarad stamp med en minikarta och en nål som visar platsen där stampen hittades.
<br>

## Installera

```
git clone https://github.com/JohanTran02/chas-challenge
cd chas-challenge
npm install
npm run dev
```

## Funktioner

- Bildigenkänning med OpenAi - [OpenAi](https://platform.openai.com/docs/guides/vision)
- Autentisering med Google Auth0 för en säker och smidig inloggning - [Google Auth0](https://cloud.google.com/api-gateway/docs/authenticating-users-auth0)
- En karta som kan hitta enhetens koordinater och visa en filtrerad lista över platser runt om i världen baserat på inmatningsfältets innehåll. - [Mapbox](https://visgl.github.io/react-map-gl/docs)

## Verktyg

- Next.js version 14.2.1
- Tailwind version 3.4.1
- Typescript version 5
- Trello [Projektplanering](https://trello.com/b/plJwoQk7/chas-challenge)
- Mapbox-gl-geocoder version 3.3.0
- Mapbox-gl version 3.3.0
- React-webcam version 7.2.0
- React hook form version 7.51.4
- Redux toolkit version 2.2.4
- React Cookie version 7.1.4
- Google Authentication
  <br>

## Svagheter

Applikationen körs i webbläsaren istället för som en specifik mobilapplikation. Detta innebär att appen endast körs i webbläsare, vilket kan vara en nackdel eftersom alla webbläsare inte är lika avancerade. Till exempel uppstod problem med kameran i webbläsare som Safari och Opera GX. Dessa problem hade kunnat undvikas om applikationen hade utvecklats med ramverk som är anpassade för mobilapplikationer, som React Native. Cookies var svårt att implementera eftersom Next.js använder SSR(Server Side Rendering) och funktionalitet med API-anrop från Node.js server. Dokumentationen visar att klienten kan lägga cookies genom att skicka en HTTP-begäran eller -svar till servern men problemet var att det inte gick att skapa en cookie när sidan var hostad. Det beror på att en cookie som skapas genom HTTP-anrop är en dynamisk funktion som returnerar ett värde som inte går att veta i förväg. Filstrukturen för projektet var också fylld med mappar som gjorde mappträdet som gjorde det tidskrävande för att hitta rätt komponenter.

## Styrkor

Next.js kommer med extra funktionalitet som optimerar prestandan på hemsidan. Bilder och länkar blir optimerade med komponenter som kommer med ramverket. Med Länk-komponenten börjar upphämtningen av sidan när den syns på skärmen. Funktionalitet som layout och page gör att inte hela sidan inte laddas om utan bara komponenter som skiljer sig från varandra. Med Next.js blir mappträdet själva navigeringen mellan sidorna vilket gör det tydligare när man ska programmera och ändra på komponenterna till skillnad från React Router som används för att manuellt ange navigeringen för olika sidor.

## Gruppmedlemmar

- Filip Hällgren
- Isak Tilahun
- Johan Tran
