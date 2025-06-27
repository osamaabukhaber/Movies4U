import { NavLink } from "react-router-dom";

export default function NavLinks({ links, onClick }) {
  const linkClass =
    "text-white no-underline relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full";
  return (
    <>
      {links.map((link) => (
        <NavLink key={link.to} to={link.to} onClick={onClick} className={linkClass}>
          {link.label}
        </NavLink>
      ))}
    </>
  );
}