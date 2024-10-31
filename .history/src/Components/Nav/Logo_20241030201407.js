import { HashLink } from "react-router-hash-link";
import './src/Components/logo/logo.css';

function Logo({ clicked, setClicked }) {
  return (
    <div className="header__logo">
      <HashLink
        smooth
        to="/#"
        onClick={() => {
          if (clicked) {
            setClicked(false);
          }
        }}
      >
        <div className="logo">
      <span className="initials">D</span><span className="initials">G</span>
    </div>
      </HashLink>
    </div>
  );
}

export default Logo;