import fysio from "./assets/images/fysio.webp";
import LagoJardin from "./assets/images/lagoJardin.webp";
import jumppa from "./assets/images/jumppa.webp";
import sunset from "./assets/images/sunset.webp";
import rovaniemi from "./assets/images/rovaniemi.webp";
import riittaJyrki from "./assets/images/riittaJyrki.webp";
import lagoView from "./assets/images/lagoView.webp";

export const pageLinks = [
  { id: 1, href: "#about", text: "info" },
  { id: 3, href: "#communities", text: "Palvelut & aktiviteetit" },
  { id: 4, href: "#blogidetail", text: "blogi" },
  //{ id: 5, href: "#tours", text: "tours" },
];

export const partner = [
  { id: 1, image: LagoJardin }
];

export const socialLinks = [
  { id: 0, href: "https://chat.whatsapp.com/JPhol4gvpCx9xB5FEXWqSd", icon: "FaWhatsapp", text: "WhatsApp Community" },
  // { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  // { id: 2, href: "https://www.x.com", icon: "fab fa-x-twitter" },
  // { id: 3, href: "https://www.squarespace.com/", icon: "fab fa-squarespace" },
  // { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  // { id: 2, href: "https://www.x.com", icon: "fab fa-x-twitter" },
  // { id: 3, href: "https://www.squarespace.com/", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 0,
    icon: "FaCheck",
    title: "Helppo käyttää",
    text: "Yhtä helppo kuin Bolt. Varaa kyyti muutamalla klikkauksella reaaliajassa tai ajastetusti.",
  },
  {
    id: 1,
    icon: "FaUsers",
    title: "Gyydin yhteisö",
    text: "Kuin Tori, mutta kyydeille. Jokainen voi vapaasti tarjota tai pyytää kyytiä omien aikataulujensa mukaan.",
  },
  {
    id: 2,
    icon: "FaRoute",
    title: "Älykäs reittien yhdistely",
    text: "Gyydi löytää reaaliajassa samaan suuntaan kulkevat ja näyttää selkeän reittikartan. Yhdessä liikkuminen ei ole koskaan ollut näin helppoa.",
  },
  {
    id: 3,
    icon: "UserRaiting",
    title: "Luottamus ja arvostelu",
    text: "Kaikki käyttäjät esiintyvät omalla nimellään, ja arvosteluilla rakennetaan luottamusta.",
  },
  {
    id: 4,
    icon: "Timing",
    title: "Aina oikeaan aikaan",
    text: "Voit sopia kyydin etukäteen tai hypätä kyytiin spontaanisti tien päältä. Gyyti elää ruuhka-aikojen ja arjen rytmissä, joustavasti sinun aikatauluissasi.",
  },
];

export const tours = [
  
  {
    id: 1,
    image: lagoView,
    title: "Luennot Torreviejassa",
    info: `Tervetuloa kuuntelemaan ja keskustelemaan lihasvoiman tärkeydestä ikääntyessä. Luento on maksuton ja avoin kaikille kiinnostuneille.`,
    hasModal: true,
    eventTitle: "Luento: Lihasvoiman merkitys ikääntyessä",
    eventInfo: `Tervetuloa kuuntelemaan ja keskustelemaan lihasvoiman tärkeydestä`,
    eventPlace: `Lago Bar , Los Balcones, Torrevieja`,
    eventTime: `Tiistaina 17.03. klo 13.00`,
  },
  {
    id: 2,
    image: jumppa,
    title: "Spiralistabilaatioryhmä",
    info: `Olen toiminut usean vuosikymmenen ajan Suomessa fysioterapeuttina, sekä erikoistunut eri jatkokoulutushaarojen avulla. Ammattitaitoni fyioterapeuttina tarkoittaa myös liikunnan ohjaamista. Pidän mielelläni kokonaisuuksia, joissa käsitellään jotain suurempaa teemaa ohjattujen tuntien merkeissä. Tule mukaan oppimaan, kokemaan ja tekemään uusia tuttavuuksia!`,
    hasModal: true,
    eventTitle: "Ryhmäliikunta: Spiralistabilaatio",
    eventInfo: `Tule tutustumaan spiralistabilaatio harjoitteluun, jossa käydään läpi kehon liikkuvuutta, lihasvoimaa, kehonhallintaa ja ryhdin parantamista. Ryhmä kokoontuu yhteensä viisi kertaa hintaan 10€ / kerta. Tämä ryhmä on oiva tapa tutustua uusiin tuttavuuksiin sekä saada iloa ja motivaatiota oman kunnon ylläpitoon muiden ihmisten kanssa.`,
    eventPlace: `Paikka päätetään osallistujien kesken, mutta se on todennäköisesti Torreviejan keskustassa rantakadun läheisyydssä.`,
    eventTime: `Ilmoitetaan myöhemmin osallistujien kesken tai ottamalla minuun yhteyttä`,
  },
  {
    id: 3,
    image: fysio,
    title: "Fysio- ja lymfaterapia sekä faskiamanipulaatio",
    info: `Tarjoan fysioterapiaa sisältäen faskiamanipulaatiohoitoja, hierontaa sekä ohjausta ja neuvontaa. Toimin Torreviejan Lago Jardinissa sekä lähialueilla, ja tarjoan palveluitani myös yrityksille ja yhteisöille. Erikoisosaamistani fysioterapian lisäksi on lymfaterapia. Lisäksi hoidan huimauksesta ja purentaongelmista kärsiviä asiakkaita. Ota rohkeasti yhteyttä ajanvaraukseen tai vaivoihisi liittyvissä asioissa.`,
    hasModal: true,
    eventTitle: "Ajanvaraus ja hinnat",
    eventInfo: `riitta.uusitalo69@gmail.com  tai  +358 45 111 3263. Hinnat: Manuaalinen käsittely: 30 min - 40€, 45 min - 65€ ja 60 min - 75€`,
    eventPlace: `Sovitaan asiakkaan kanssa`,
    eventTime: `Sovitaan asiakkaan kanssa`,
  },
  
];


export const blogi = [

  {
    id: 1,
    image: riittaJyrki,
    title: "Kuinka kaikki alkoi",
    info: `Tervetuloa kuuntelemaan ja keskustelemaan lihasvoiman tärkeydestä ikääntyessä. Luento on maksuton ja avoin kaikille kiinnostuneille.`,
    hasModal: true,
    eventTitle: "Kuinka kaikki alkoi",
    p1: `Olen pienestä pitäen liikkunut paljon ja pitänyt urheilusta. Nuorena harrastin kilpahiihtoa, 
        joka sitten lopulta hiipui fysioterapiaopintojen alettua. Kävin opiskeluaikoinani myös 
        liikunnanohjaajan peruskurssin Rovaniemellä Lapin Urehiluopistossa, jossa sain rauhassa tutustua 
        eri urheilulajeihin. Se oli upeaa aikaa, ja monipuolisti osaamistani niin tietojen ja taitojen 
        osalta liikunnan puolella sekä vahvisti omaa harrastuneisuuttani.`,
    p2: `Fysioterapiaopintojen alettua, sain syvempää tietoa ihmisen hyvinvoinnista, ja kiinnostuin siitä, 
        kuinka ihminen on kokonaisuus. Pelkkä liikunta ei riitä, vaan tarvitaan hyvää ja laadukasta unta 
        sekä ravintoa, toki myös sosiaalisen elämän merkitystä unohtamatta. Kaikki vaikuttaa siihen, että 
        pääsisimme mahdollisimman tasapainoiseen elämään ja pysyisimme mahdollisimman pitkään terveenä.`,
    p3: `Nykyään työskentelen fysioterapeuttina Terveystalossa ja Mehiläisessä. Asiakkaani vaihtelevat 
        laajalti iän ja ongelmiensa suhteen, mutta juuri erilaisuus ja vaihtelevuus on pitänyt mielenkiinnon 
        työssäni. Olisi mukava jakaa tietojani ja taitojani kanssanne Torreviejassa näiden asioiden 
        tiimoilta.`,
  },
  {
    id: 2,
    image: rovaniemi,
    title: "Ajatuksia opiskeluajoilta",
    info: `Tervetuloa kuuntelemaan ja keskustelemaan lihasvoiman tärkeydestä ikääntyessä. Luento on maksuton ja avoin kaikille kiinnostuneille.`,
    hasModal: true,
    eventTitle: "Ajatuksia opiskeluajoilta",
    p1: `Opiskeluaikana olimme lähdössä vuodeksi Yhdysvaltoihin vaihtoon, mutta se lopulta jäi 
    kuitenkin toteuttamatta. Valmistumiseni jälkeen, hain fysioterapeutin paikkaa Saksasta. Tehtävään 
    kuitenkin valikoitui jo Saksassa asuva fysioterapeutti, jolla oli työlupa-asiat jo valmiiksi kunnossa. 
    Silloin olisimme olleet valmiita mieheni ja lastemme kanssa muuttamaan Saksaan. Vaikka lopulta jäimme 
    Suomeen ja asetuimme rakentamaan elämää täällä, asia ulkomailla asumisesta ja työskentelystä jäi 
    kuitenkin hautumaan, aina nykyhetkeen asti.`,
    p2: `Nyt, kun lapset ovat kasvaneet aikuisiksi, haluaisimme yrittää uudelleen, ainakin 
    vuoroittaista asumista ja työskentelyä ulkomailla. Ensikosketuksemme Torreviejaan oli vuonna 2017, 
    jolloin olimme viettämässä mieheni syntymäpäiviä siellä. Ihastuimme ja myöhemmin myös rakastuimme 
    paikkaan, ja nyt meillä on oma mukava pieni koti Torreviejassa — näin unelmistamme tuli totta.`,
    p3: `Olemme huomanneet, että elämä Espanjassa kulttuurin tapaan on leppoisaa, ja sääkin lähes 
    aina kohdallaan. Valo ja lämpö voimaannuttavat monella tavalla positiivisesti varsinkin silloin, kun 
    Suomessa on pimeää ja kylmää. Siellä me elämme aktiivista elämää: Lenkkeilemme tai pelaamme tennistä 
    aamuisin, vaellamme vuoristossa ja tapaamme ihania ystäviä. Siihen myös kuuluu tuore ja hyvä ruoka, joka 
    tukee elämäntapaamme. Valo tuo energiaa ja iloa päivään jo varhain aamusta, ja on myös iso kontrasti 
    verrattuna Suomen talvikuukausiin. Keskipäivän pieni levähdyshetki tekee hyvää keholle ja mielelle. 
    Auringon laskiessa keho alkaa jo rauhoittumaan ja valmistautumaan tulevaan yöhön ja uuteen päivään.`,
  },
  {
    id: 3,
    image: sunset,
    title: "Ystävät auringon alla",
    info: `Tervetuloa kuuntelemaan ja keskustelemaan lihasvoiman tärkeydestä ikääntyessä. Luento on maksuton ja avoin kaikille kiinnostuneille.`,
    hasModal: true,
    eventTitle: "Ystävät auringon alla",
    p1: `Täytyy sanoa, että meillä on aivan ihanat naapurit yläkerrassa. He ovat espanjalaisia, aivan 
    huippuja! Erityistä espanjalaisesta kulttuurista ja ja ihmisistä tekevät juurikin erilaiset tapahtumat. 
    Täällä on paljon kivoja tapahtumia ja aktiviteetteja, kuten pyöräily- ja juoksutapahtumia, 
    jalkappallo-otteluita ja padelia sekä erilaisia juhlia, hieman vuodenajan mukaan vaihdellen. 
    Juuri tällaisista tapahtumista olemme saaneet uusia ystäviä, sillä juuri ne yhdistävät ihmisiä ja 
    vetävät väkeä puoleensa, vieläpä monesti koko perheen voimin nuorimmasta vanhimpaan.`,
    p2: `On upeaa, että Espanjalaisilla yhteistä aikaa on koko perheen voimin — ystävät ovat tärkeitä. 
    Olemme huomanneet mieheni kanssa, että Espanjalaisessa kulttuurissa vahvasti ovat läsnä pyöräily, 
    juokseminen ja jalkapallo. Erityisesti aamukävelyitä tulee tehtyä itsekin Espanjassa ollessa, sillä on 
    ihana kävellä ja katsella, kun ympäristö on vasta heräämässä ja linnut sirittää, tai kun ihmiset 
    herättelevät kehoaan rannalla pienessä joogaryhmässä. Tällaisista aamurutiineista olisi itse kullekin 
    hyötyä.`,
    p3: `Ihmisen on tärkeää tuntee kuuluvuutta ja hyväksymiseksi tulemisen tunnetta, ja vaikka suomalaisena 
    Espanjassa onkin, täällä on helppo löytää itsellee jokin harrastus ja yhteisö, kuten sauvakävely- tai 
    hölkkäryhmän, ulkokuntosalin tai vaikkapa pilateksen avulla.`,
    }

];
