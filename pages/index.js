import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import circleShape from "../public/Circle-img.png";
import bannerImg from "../public/banner-Image.png";
import PolygonShape from "../public/Polygon-shape.png";
import Header from "../components/Headers";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <Head>
        <meta name="viewport" content="width=device_width, initial_scale=1" />
      </Head> */}
      <div>
        <Header />
        <div className={styles.home_container}>
          <div className={styles.banner_section}>
            <div className={styles.banner_content}>
              <h1>IELTS 7+ Something cool.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>
              <button className={styles.btn_red}>
                <Link href="/">
                <a className= {styles.button}>
                  Boshlang
                </a>
                </Link>
              </button>
            </div>
            <div className={styles.banner_image_section}>
              <div className={styles.circle_shape}>
                <Image className={styles.img_responsive} src={circleShape} />
              </div>
              <div className={styles.banner_img}>
                <Image src={bannerImg} className={styles.img_responsive} />
              </div>
            </div>
          </div>
          <div className={styles.achievement_section}>
            <div className={styles.achievement_text}>
              <h2>Some count that matters</h2>
              <p>Our achievement in the journey depicted in numbers</p>
            </div>
            <div className={styles.achievement_box}>
              <div className={styles.box}>
                <Image src={PolygonShape} />
                <div className={styles.count}>
                  <label>40+</label>
                  <span>Happy Clients</span>
                </div>
              </div>
              <div className={styles.box}>
                <Image src={PolygonShape} />
                <div className={styles.count}>
                  <label>540+</label>
                  <span>Projects Completed</span>
                </div>
              </div>
              <div className={styles.box}>
                <Image src={PolygonShape} />
                <div className={styles.count}>
                  <label>300</label>
                  <span>Dedicated Members</span>
                </div>
              </div>
              <div className={styles.box}>
                <Image src={PolygonShape} />
                <div className={styles.count}>
                  <label>25+</label>
                  <span>Awards Won</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
