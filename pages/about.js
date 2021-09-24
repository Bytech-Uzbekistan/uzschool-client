import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Headers";
import styles from "../styles/about.module.css";
import Link from "next/link";
import aboutBanner from "../public/about-banner-img.png";
import step1 from "../public/about-step-1-icon.png";
import step2 from "../public/about-step-2-icon.png";
import step3 from "../public/about-step-3-icon.png";
import Patterns from "../public/Patterns.png";
import Video_Thumbnail from "../public/Video-Thumbnail.png";
import playIcon from "../public/play-icon.png";

const About = () => {
  return (
    <div>
      <Header />
      <div className={styles.progress}>
        <div className={styles.color}></div>
      </div>
      <div className={styles.about_section}>
        <div className={styles.about_top}>
          <div className={styles.top_heading}>
            <h1>Kurs haqida</h1>
          </div>
          <div className={styles.top_content}>
            <div className={styles.image_section}>
              <Image src={aboutBanner} />
            </div>
            <div className={styles.detail_section}>
              <div className={`${styles.step} ${styles.active_step}`}>
                <div className={styles.step_left}>
                  <Image src={step1} />
                </div>
                <div className={styles.step_right}>
                  <label>STEP 1</label>
                  <p>Download and install the app from play store or app store. The app will guide you through the configuration process. Live support is available to help you.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.step_left}>
                  <Image src={step2} />
                </div>
                <div className={styles.step_right}>
                  <label>STEP 2</label>
                  <p>Connect the device anywhere your home and turn it on. Then follow the guide given by the app to configure. Make sure your home WiFi is working well.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.step_left}>
                  <Image src={step3} />
                </div>
                <div className={styles.step_right}>
                  <label>STEP 3</label>
                  <p>After the configuration process is completed as per the app guide, you will be able to control your home applicance from anywhere remotely.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.matters_section}>
          <div className={styles.shape_seciton}>
            <Image src={Patterns} className={styles.img_responsive} />
          </div>
          <div className={styles.matters_heading}>
            <h1>Some count that matters</h1>
            <span>Our achievement in the journey depicted in numbers</span>
          </div>
          <div className={styles.matters_details}>
            <div className={styles.matter_box}>
              <h1>5</h1>
              <span>Service Geographics</span>
            </div>
            <div className={styles.matter_box}>
              <h1>30</h1>
              <span>Fortune 500 Clients</span>
            </div>
            <div className={styles.matter_box}>
              <h1>300</h1>
              <span>Dedicated Members</span>
            </div>
            <div className={styles.matter_box}>
              <h1>8</h1>
              <span>Years of Journey</span>
            </div>
          </div>
        </div>
        <div className={styles.video_section}>
          <div className={styles.banner_image}>
            <Image src={Video_Thumbnail} className={styles.img_responsive} />
          </div>
          <div className={styles.inner_banner}>
            <h1>Trying is Believing</h1>
            <p>See what people are saying about our unique and effective formulas.</p>
            <div className={styles.play_icon}>
              <Image src={playIcon} className={styles.img_responsive} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
