import React, { useEffect, useState } from "react";
import styles from "../styles/header.module.css";
import Image from "next/image";
import headerLogo from "../public/header_logo.png";
import instaIcon from "../public/insta-icon.png";
import webIcon from "../public/web-icon.png";
import twitterIcon from "../public/twitter-icon.png";
import youtubeIcon from "../public/youtube-icon.png";
import Link from "next/link";

const Header = () => {
  // var navList = document.getElementById( "nav_lists" );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuMobile = () => {
    console.log("clicked");
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    // <header>
    <div className={`${styles.header_section},${styles.container}`}>
      <div className={styles.inner_header}>
        <div className={styles.navbar}>
          <div className={styles.icon_bar} onClick={() => toggleMenuMobile()}>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <ul id="nav_lists" className={styles.isMenuOpen ? "_Menus_show" : ""}>
            <li className={styles.close}>
              <span onClick={() => toggleMenuMobile()}>×</span>
            </li>
            <li>
              <Link href="/">
                <a className={styles.a}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={styles.a}>About course</a>
              </Link>
            </li>
            <li>
              <Link href="/result">
                <a className={styles.a}>Results</a>
              </Link>
            </li>
            <li>
              <Link href="/prices">
                <a className={styles.a}>Prices</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.logo}>
          <a className={styles.a} href="#">
            <Link href="/">
              <Image src={headerLogo} />
            </Link>
          </a>
        </div>
        <div className={styles.social_icons}>
          <div className={styles.social_inner} d-flex>
            <div className={styles.icon}>
              <Link href="/">
                <Image src={instaIcon} />
              </Link>
            </div>
            <div className={styles.icon}>
              <Link href="/">
                <Image src={webIcon} />
              </Link>
            </div>
            <div className={styles.icon}>
              <Link href="/">
                <Image src={twitterIcon} />
              </Link>
            </div>
            <div className={styles.icon}>
              <Link href="/">
                <Image src={youtubeIcon} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobile_menu}>
        <div className={styles.navbar}>
          <div className={styles.icon_bar} onClick={() => toggleMenuMobile()}>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
        <div className={styles.mobile_sidebar}>
          <ul id="nav_lists" className={styles.isMenuOpen ? "" : "_Menus_show"}>
            <li className={styles.close_btn}>
              <span onClick={() => toggleMenuMobile()}>×</span>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About course</Link>
            </li>
            <li>
              <Link href="/results">Results</Link>
            </li>
            <li>
              <Link href="/price">Prices</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </header>
  );
};

export default Header;
