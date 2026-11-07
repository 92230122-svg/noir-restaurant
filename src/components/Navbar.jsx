import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'MENU', path: '/menu' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className="noir-navbar">
      <div className="container">
        <div className="noir-navbar-inner">

          <Link to="/" className="noir-logo" onClick={closeMenu}>
            NOIR<span>.</span>
            <small>BURGER & MORE</small>
          </Link>

          <div className={`noir-nav-links ${menuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'noir-nav-link active' : 'noir-nav-link'
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link to="/cart" className="noir-cart-mobile" onClick={closeMenu}>
              <ShoppingBag size={19} />
              <span>MY CART</span>
            </Link>
          </div>

          <div className="noir-navbar-actions">
            <Link to="/cart" className="noir-cart-button">
              <ShoppingBag size={19} />
              <span>CART</span>
            </Link>

            <Link to="/menu" className="noir-order-button">
              ORDER NOW
            </Link>
          </div>

          <button
            className="noir-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;