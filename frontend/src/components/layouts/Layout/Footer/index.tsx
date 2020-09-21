import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  FaInstagram,
  FaTwitterSquare,
  FaTiktok,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import styles from "./index.module.scss";

const Footer = () => {
  const location = useLocation();

  const isBigScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isCollectionPage = location.pathname.includes("collections");

  return (
    <footer
      className={`${styles.footer} ${
        isCollectionPage && isBigScreen
          ? styles.is_collection_page_b
          : styles.is_collection_page_s
      }`}
    >
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.nav_wrapper}>
            <div className={styles.nav_title}>Flowy Cart</div>
            <div className={styles.subTitle}>
              Unleash your fashion. Find your flow.
            </div>
            <div className={styles.socials_wrapper}>
              <div className={styles.socials}>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                  <FaTiktok />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FaTwitterSquare />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className={styles.subTitle}>
              All rights reserved.©️ 2024 Flowy Cart
            </div>
          </div>
        </div>
        <div className={styles.sitemap}>
          <div className={styles.nav_wrapper}>
            <h4 className={styles.nav_title}>Help</h4>
            <ul className={styles.nav}>
              <li>
                <Link to="/">Help Center</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Shipping Info</Link>
              </li>
              <li>
                <Link to="/">Track My Order</Link>
              </li>
              <li>
                <Link to="/">Returns & Exchanges</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
