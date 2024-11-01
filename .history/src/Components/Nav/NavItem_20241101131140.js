import { NavHashLink } from "react-router-hash-link";
import "./NavItem.css";

function NavItem({ clicked, setClicked, name, link }) {
  const isContact = name === "Contact";

  // Custom scroll function to add an offset
  const scrollWithOffset = (el) => {
    const yOffset = isContact ? -50 : -80; // Adjust offsets as needed
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yCoordinate, behavior: "smooth" });
  };

  return (
    <NavHashLink
      scroll={scrollWithOffset} // Apply the custom scroll function here
      to={`/${link}`}
      className="navItem"
      onClick={() => {
        if (clicked) {
          setClicked(false);
        }
      }}
    >
      <h3>{name}</h3>
    </NavHashLink>
  );
}

export default NavItem;