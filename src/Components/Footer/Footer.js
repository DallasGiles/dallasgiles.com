import Logo from "../Nav/Logo";
import "./Footer.css";
import SocialMediaIcons from "./SocialMediaIcons";
import SourceCodeLink from "./SourceCodeLink";

function Footer() {
  return (
    <footer className="footer">
      <SocialMediaIcons />
      <Logo />
      <p className="footer__copyright">Copyright © 2024 Dallas Giles.</p>
      <SourceCodeLink />
    </footer>
  );
}

export default Footer;