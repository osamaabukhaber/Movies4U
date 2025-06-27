import { NavLink } from "react-router-dom";

export default function MobileMenu({ links, onClose }) {
  return (
    <div className="md:hidden bg-gray-900 bg-opacity-90 px-4 pb-4 transition-all duration-300 ease-in-out">
      <ul className="space-y-4 pt-4">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              onClick={onClose}
              className="block text-white no-underline hover:text-red-600 font-bold transition text-lg py-2 px-3 rounded-md"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            to="/login"
            onClick={onClose}
            className="block bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition text-lg text-center mt-2"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}