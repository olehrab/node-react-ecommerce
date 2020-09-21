import { useNavigate } from "react-router-dom";
import { RiUserLine, RiMenuLine, RiCloseLine } from "react-icons/ri";
import styles from "./index.module.scss";
import { navData } from "../../../../../data/navItems";
import CartIcon from "./CartIcon";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiLoginBoxLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";

interface NavBarProps {
  handleShow: () => void;
}

const Navbar: React.FC<NavBarProps> = ({ handleShow }) => {
  const [hasScrolled, setHasSrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const resizeHeaderOnScroll = () => {
    setHasSrolled((hasScrolled) => {
      if (
        !hasScrolled &&
        (document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20)
      ) {
        return true;
      }

      if (
        hasScrolled &&
        document.body.scrollTop < 4 &&
        document.documentElement.scrollTop < 4
      ) {
        return false;
      }

      return hasScrolled;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll);

    return () => window.removeEventListener("scroll", resizeHeaderOnScroll);
  }, []);

  const navStyles = hasScrolled
    ? `${styles.nav} ${styles.hasScrolled}`
    : styles.nav;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog/search?query=${searchQuery}`);
    }
  };

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleDropdownLinkClick = () => {
    setIsDropdownVisible(false);
  };

  return (
    <nav className={navStyles}>
      <div className={` ${styles.container_bottom}`}>
        <Link to="/" className={styles.title}>
          Flowy Cart
        </Link>
        <ul className={`${styles.links} ${isNavVisible ? styles.show : ""}`}>
          {navData.map((option) => (
            <li key={option.name}>
              <NavLink to={`/catalog/${option.name}`} className={styles.link}>
                {option.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className={styles.icons_menu}>
          <li>
            <form className="hidden lg:block md:block" onSubmit={handleSearch}>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  id="default-search"
                  className="block w-80 p-3 text-xl font-bold text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2 bottom-2 hover:bg-black bg-black font-medium rounded-lg py-1 px-1.5"
                >
                  <IoMdSearch className="text-3xl" />
                </button>
              </div>
            </form>
          </li>
          <li>
            <div
              className={`hidden lg:block md:block ${styles.link}`}
              onClick={handleShow}
            >
              <CartIcon />
            </div>
          </li>
          <li className="relative">
            <div className="hidden">
              <NavLink to={`/login`} className={styles.link}>
                <RiLoginBoxLine />
              </NavLink>
            </div>
            <div onClick={toggleDropdownVisibility} className="hidde">
                <RiUserLine />
            </div>
            {isDropdownVisible && (
              <div className="absolute z-[101] right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <Link to="/profile" onClick={handleDropdownLinkClick} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Profile
                </Link>
                <Link to="/order" onClick={handleDropdownLinkClick} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Orders
                </Link>
                <Link to="/wishlist" onClick={handleDropdownLinkClick} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Wishlist
                </Link>
                <Link to="/" onClick={handleDropdownLinkClick} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Logout
                </Link>
              </div>
            )}
          </li>
          <div className={styles.mobile_icon} onClick={toggleNavVisibility}>
            {isNavVisible ? (
              <RiCloseLine size={27} />
            ) : (
              <RiMenuLine size={24} />
            )}
          </div>
        </ul>
      </div>
      <div className="flex gap-4 items-center pb-1">
        <form className="lg:hidden md:hidden block" onSubmit={handleSearch}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              id="default-search"
              className="block w-full p-4 text-sm font-bold text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 hover:bg-black bg-black font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
        <div
          className={`block lg:hidden md:hidden text-4xl`}
          onClick={handleShow}
        >
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
