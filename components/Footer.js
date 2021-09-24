import styles from"../styles/footer.module.css";
import Image from "next/image";
import footerLogo from "../public/footer-logo.png";
import footerInsta from "../public/footer-insta.png";
import footerWeb from "../public/footer-web.png";
import footerTwitter from "../public/footer-twitter.png";
import footerYoutube from "../public/footer-youtube.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_container}>
        <div className={styles.footer_logo}>
          <Link href="/">
            <Image src={footerLogo} />
          </Link>
        </div>
        <div className={styles.footer_menu}>
          <ul>
            <li>Bosh sahifa</li>
            <li>Kurs haqida</li>
            <li>Natijalar</li>
            <li>Tariflar</li>
          </ul>
        </div>
        <div className={styles.blank_line}></div>
        <div className={styles.social_container}>
          <div className="">
            <p>© 2021 Bytech IT Solutions. All rights reserved</p>
          </div>
          <div className={styles.footer_social}>
            <div className={styles.footer_icon}>
              <Link href="/">
                <Image src={footerInsta} />
              </Link>
            </div>
            <div className={styles.footer_icon}>
              <Link href="/">
                <Image src={footerWeb} />
              </Link>
            </div>
            <div className={styles.footer_icon}>
              <Link href="/">
                <Image src={footerTwitter} />
              </Link>
            </div>
            <div className={styles.footer_icon}>
              <Link href="/">
                <Image src={footerYoutube} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
