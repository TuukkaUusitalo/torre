import about from "../assets/images/riitta.webp";
import Title from "./Title.jsx";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
      {/*<Title title="riitta" subTitle="uusitalo" />*/}
      </div>
      <div className="section-center about-center">
        <div className="about-img">
          <img src={about} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>Mukava tavata</h3>
          <p>
            Tervehdys, olen Riitta Uusitalo! Olen fysio- ja lymfaterapeutti. 
            Valmistuin Rovaniemeltä vuonna 1993, ja työurani aikana olen ollut 
            paljon liikunnan kanssa tekemisissä, ja ohjannut urheilijoita ja 
            erilaisia liikuntaryhmiä vauvasta vaariin. Vahvuuksiini 
            ammattilaisena kuuluvat tuki-ja liikuntaelinfysioterapia 
            (niska-hartiaseutu, selkä ja raajat), faskiamanipulaatiohoidot. 
            Lisäksi, annan hoitoa myös päänsärystä, huimauksesta ja 
            purentaelinongelmista kärsiville ihmisille. Suomessa tarjoan 
            palveluitani ammatinharjoittajana Mehiläisessä ja Terveystalossa. Lisäksi kiinnostukseni 
            kohteita ovat ruokavalio, hyvinvointi ja pitkäikäisyys kokonaisvaltaisesti.
          </p>
          <p>
          Minua kiinnostaa ihmisen hyvinvointi myös laajemmin - kokonaisvaltaisemmin. Yksi, myös omia
           ajatuksiani, kokonaisvaltaisesta hyvinvoinnista parhaiten avaava kirja on Aki Hintsa - Voittamisen 
           anatomia (WSOY, 2015), jossa pureudutaan ihmisen terveyteen ja hyvinvointiin. Kirja käsittelee 
           huippu-urheilijoiden elämää, vertailee hyvinvointia ja elämäntapaeroja ja järjestelmien vaikutusta 
           terveyteemme ja suorituskykyyn länsimaisen yhteiskuntamallin sekä kehittyvien maiden kesken, sekä 
           käsittelee myös ihmisen terveyden "corea". Siinä myös ruokavaliolla on merkittävä osa. Lisäksi 
           kiinnostavia kirjoja ovat Glukoosikumous ja Biohakkerin käsikirja, joissa on runsaasti tietoa ravinnosta. 
           Liikunta, ravinto ja uni ovat elämän peruskolmio. Näitä kunnioittamalla ja toteuttamalla elämä on 
           tasapainoisempaa.
          </p>
          <p style={{fontWeight: 'bold'}}>
            riitta.uusitalo69@gmail.com

            <p style={{fontWeight: 'bold'}}>
            puh. +358 45 111 3263
          </p>
          </p>
          
          <p style={{fontWeight: 'bold'}}>
            Nähdään Torreviejassa seuraavan kerran 11. - 24.03.2026
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
