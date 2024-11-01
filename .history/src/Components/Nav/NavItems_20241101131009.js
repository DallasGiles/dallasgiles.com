const scrollWithOffset = (el) => {
  const yOffset = -90; 
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: yCoordinate, behavior: "smooth" });
};

export const navItems = [
    {
      name: "About",
      link: "#about",
      scroll: scrollWithOffset,
    },
    {
      name: "Projects",
      link: "#project",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];