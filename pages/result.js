import styles from "../styles/result.module.css";
// import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Headers";
import Image from "next/image";
import blog1 from "../public/blog-1.png";
import blog2 from "../public/blog-2.png";
import blog3 from "../public/blog-3.png";
import Slider from "../components/slider";
import playIcon from "../public/play-icon.png";
import QuoteMark from "../public/Quote-Mark.png";
// import profileImg from "../public/profile-img.png";

const Results = () => {
  return (
    <div>
      <Header />
      
      <div className={styles.Results_cotainer}>
        <div className={styles.headin}>
          <h1>Our Clients Speak</h1>
          <span>We have been working with clients around the world</span>
        </div>
        <Slider />
      </div>
      <div className={styles.testimonial_container}>
        <div className={styles.Quote_shape}>
          <Image src={QuoteMark} className={styles.img_responsive} />
        </div>
        <div className={styles.heading}>
          <h1>Trying is Believing</h1>
          <span>
            See what people are saying about our unique and effective formulas.
          </span>
        </div>
        <div className={styles.testimonial_section}>
          <div className={styles.testimonial_inner}>
            <div className={styles.testimonial_img}>
              <Image src={blog1} />
              <span>
                <Image src={playIcon} />
              </span>
            </div>
            <div className={styles.testimonial_detail}>
              <label>Review by Michelle Hyatt</label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus,
                sit imperdiet risus, venenatis at.
              </p>
            </div>
          </div>
          <div className={styles.testimonial_inner}>
            <div className={styles.testimonial_img}>
              <Image src={blog2} />
              <span>
                <Image src={playIcon} />
              </span>
            </div>
            <div className={styles.testimonial_detail}>
              <label>Review by Angie Bellemare</label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus,
                sit imperdiet risus, venenatis at.
              </p>
            </div>
          </div>
          <div className={styles.testimonial_inner}>
            <div className={styles.testimonial_img}>
              <Image src={blog3} />
              <span>
                <Image src={playIcon} />
              </span>
            </div>
            <div className={styles.testimonial_detail}>
              <label>Review by Brittany Nichole</label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus,
                sit imperdiet risus, venenatis at.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Results;
