import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      
      <p style={{fontSize: '25px', textAlign: 'center', color: 'white'}}>
        Contact:
      </p>
      <p style={{fontSize: '15px', textAlign: 'center', color: 'white'}}>
        riitta.uusitalo69@gmail.com
        <p style={{color: 'white'}}>
        puh +358 45 111 3263
        </p>
      </p>
      <p className="copyright">
        copyright © riittauusitalo™<span id="date">2026</span>. all rights
        reserved
      </p>
    </footer>
  );
}

export default Footer;
