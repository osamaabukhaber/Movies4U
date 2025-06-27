// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// import './header.css'

// export default function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   const navLinks = [
//     { to: "/", label: "Home" },
//     { to: "/movie", label: "Trending" },
//     // { to: "/movieDetails", label: "Movie Details" },
//     { to: "/favourites", label: "Favourites" },
//   ];

//   const Icon = ({ open }) =>
//     open ? (
//       <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <line x1="18" y1="6" x2="6" y2="18" />
//         <line x1="6" y1="6" x2="18" y2="18" />
//       </svg>
//     ) : (
//       <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <line x1="3" y1="6" x2="21" y2="6" />
//         <line x1="3" y1="12" x2="21" y2="12" />
//         <line x1="3" y1="18" x2="21" y2="18" />
//       </svg>
//     );

//   const linkClass =
//     "text-white no-underline relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full";

//   return (
//     <nav className="bg-gradient-to-r from-cyan-950 to-slate-800 text-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <NavLink to="/" onClick={closeMenu} className="text-2xl font-extrabold tracking-wide  text-white hover:text-red-600">
//             Movies Land
//           </NavLink>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-6 font-bold">
//             {navLinks.map((link) => (
//               <NavLink key={link.to} to={link.to} onClick={closeMenu} className={linkClass}>
//                 {link.label}
//               </NavLink>
//             ))}
//           </div>

//           {/* Login */}
//           <div className="hidden md:block">
//             <NavLink
//               to="/login"
//               onClick={closeMenu}
//               className="justify-content-center bg-cyan-800 text-white px-4 py-2 rounded-full hover:bg-cyan-700 transition duration-300 ease-in-out shadow-md font-bold"
//             >
//               Login
//             </NavLink>
//           </div>



//           {/* Hamburger (Mobile Only) */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition"
//               aria-label="Toggle Menu"
//             >
//               <Icon open={menuOpen} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-gray-900 bg-opacity-90 px-4 pb-4 transition-all duration-300 ease-in-out">
//           <ul className="space-y-4 pt-4">
//             {navLinks.map((link) => (
//               <li key={link.to}>
//                 <NavLink
//                   to={link.to}
//                   onClick={closeMenu}
//                   className="block text-white no-underline hover:text-yellow-300 transition text-lg py-2 px-3 rounded-md"
//                 >
//                   {link.label}
//                 </NavLink>
//               </li>
//             ))}
//             <li>
//               <NavLink
//                 to="/login"
//                 onClick={closeMenu}
//                 className="block bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition text-lg text-center mt-2"
//               >
//                 Login
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

//*!

// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// import './header.css'

// export default function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   const navLinks = [
//     { to: "/", label: "Home" },
//     { to: "/movie", label: "Trending" },
//     // { to: "/movieDetails", label: "Movie Details" },
//     { to: "/favourites", label: "Favourites" },
//   ];

//   const Icon = ({ open }) =>
//     open ? (
//       <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <line x1="18" y1="6" x2="6" y2="18" />
//         <line x1="6" y1="6" x2="18" y2="18" />
//       </svg>
//     ) : (
//       <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <line x1="3" y1="6" x2="21" y2="6" />
//         <line x1="3" y1="12" x2="21" y2="12" />
//         <line x1="3" y1="18" x2="21" y2="18" />
//       </svg>
//     );

//   const linkClass =
//     "text-white no-underline relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full";

//   return (
//     <nav className="bg-gradient-to-r from-cyan-950 to-slate-800 text-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <NavLink to="/" onClick={closeMenu} className="text-2xl font-extrabold tracking-wide  text-white hover:text-red-600">
//             Movies Land
//           </NavLink>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-6 font-bold">
//             {navLinks.map((link) => (
//               <NavLink key={link.to} to={link.to} onClick={closeMenu} className={linkClass}>
//                 {link.label}
//               </NavLink>
//             ))}
//           </div>

//           {/* Login */}
//           <div className="hidden md:block">
//             <NavLink
//               to="/login"
//               onClick={closeMenu}
//               className="justify-content-center bg-cyan-800 text-white px-4 py-2 rounded-full hover:bg-cyan-700 transition duration-300 ease-in-out shadow-md font-bold"
//             >
//               Login
//             </NavLink>
//           </div>



//           {/* Hamburger (Mobile Only) */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition"
//               aria-label="Toggle Menu"
//             >
//               <Icon open={menuOpen} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-gray-900 bg-opacity-90 px-4 pb-4 transition-all duration-300 ease-in-out">
//           <ul className="space-y-4 pt-4">
//             {navLinks.map((link) => (
//               <li key={link.to}>
//                 <NavLink
//                   to={link.to}
//                   onClick={closeMenu}
//                   className="block text-white no-underline hover:text-yellow-300 transition text-lg py-2 px-3 rounded-md"
//                 >
//                   {link.label}
//                 </NavLink>
//               </li>
//             ))}
//             <li>
//               <NavLink
//                 to="/login"
//                 onClick={closeMenu}
//                 className="block bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition text-lg text-center mt-2"
//               >
//                 Login
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }


import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/movie", label: "Trending" },
    { to: "/favourites", label: "Favourites" },
  ];

  return (
    <nav className="bg-gradient-to-r from-cyan-950 to-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* <NavLink to="/" className="text-2xl font-extrabold tracking-wide text-white hover:text-red-600"> */}
          <NavLink to="/" className="text-2xl font-extrabold tracking-wide text-white hover:text-red-600">
          {/* <NavLink to="/" className="text-amber-600 text-2xl font-extrabold tracking-wide  after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"> */}
            Movies Land
          </NavLink>
          <div className="hidden md:flex space-x-6 font-bold ">
            <NavLinks links={navLinks} />
          </div>
          <div className="flex items-center space-x-2 ">
            <SearchBar />
            <NavLink
              to="/login"
              className="hidden md:block bg-cyan-800 text-white px-4 py-2 rounded-full hover:bg-cyan-700 transition font-bold"
            >
              Login
            </NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition"
              aria-label="Toggle Menu"
            >
              {/* Hamburger Icon */}
              <span className="sr-only">Open main menu</span>
              
              {menuOpen?<MdClose className="text-2xl"/> :  <RxHamburgerMenu className="text-2xl" />           }

            </button>
          </div>
        </div>
      </div>
      {menuOpen && <MobileMenu links={navLinks} onClose={() => setMenuOpen(false)} />}
    </nav>
  );
}