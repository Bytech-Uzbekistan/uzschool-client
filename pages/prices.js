import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Headers";
import styles from "../styles/prices.module.css";
import checkmark from "../public/checkmark.png";
import whiteCheckmark from "../public/white-checkmark.png";
import Link from "next/link";

const Price = () => {
  return (
    <div>
      <Header />
      <div className={styles.price_section}>
        <div className={styles.heading}>
          <h1>Simple, transparent pricing</h1>
          <p>No contracts. No surprise fees.</p>
        </div>
        <div className={styles.tab_section}>
        {/* nav */}
          <ul className={`nav ${styles.nav_tabs} ${styles.md_tabs}`} id="myTabMD" role="tablist">
            <li className={styles.nav_item}>
              <a
                className={`${styles.nav_link} ${styles.active}`}
                id="montly_tab_md"
                data_toggle="tab"
                href="#montly_md"
                role="tab"
                aria_controls="home_md"
                aria_selected="true"
              >
                MONTHLY
              </a>
            </li>
            <li className={styles.nav_item}>
              <a
                className={styles.nav_link}
                id="yearly_tab_md"
                data_toggle="tab"
                href="#yearly_md"
                role="tab"
                aria_controls="profile_md"
                aria_selected="false"
              >
                YEARLY
              </a>
            </li>
          </ul>
          {/* card */}
          <div className={`card ${styles.tab_content}`} id="myTabContentMD">
          {/* fade show */}
            <div
              className={` fade show ${styles.tab_pane} ${styles.active}` }
              id="montly_md"
              role="tabpanel"
              aria_labelledby="montly_tab_md"
            >
            {/* d_flex */}
              <div className={` d-flex ${styles.price_container}`}>
                <div className={styles.price_section}>
                  <div className={styles.amount}>
                    <h1>$20</h1>
                    <span>/month</span>
                  </div>
                  <div className={styles.details}>
                    <h3>Intro</h3>
                    <p>For most businesses that want to otpimize web queries</p>
                  </div>
                  <div className={styles.list_section}>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>All limited links</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Own analytics platfo</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Chat support</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Optimize hashtags</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Unlimited users</span>
                    </div>
                  </div>
                  <div className={styles.choose_btn}>
                    <button className={styles.btn_plan}>Choose plan</button>
                  </div>
                </div>
                <div className={styles.price_section}>
                  <div className={styles.amount}>
                    <h1>$50</h1>
                    <span>/month</span>
                  </div>
                  <div className={styles.details}>
                    <h3>Base</h3>
                    <p>For most businesses that want to otpimize web queries</p>
                  </div>
                  <div className={styles.list_section}>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>All limited links</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Own analytics platfo</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Chat support</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Optimize hashtags</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Unlimited users</span>
                    </div>
                  </div>
                  <div className={styles.choose_btn}>
                    <button className={styles.btn_plan}>Choose plan</button>
                  </div>
                </div>
                <div className={`${styles.price_section} ${styles.active_card}`}>
                  <div className={styles.popular_text}>MOST POPULAR</div>
                  <div className={styles.amount}>
                    <h1>$100</h1>
                    <span>/month</span>
                  </div>
                  <div className={styles.details}>
                    <h3>Pro</h3>
                    <p>For most businesses that want to otpimize web queries</p>
                  </div>
                  <div className={styles.list_section}>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={whiteCheckmark} />
                      </div>
                      <span>All limited links</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={whiteCheckmark} />
                      </div>
                      <span>Own analytics platfo</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={whiteCheckmark} />
                      </div>
                      <span>Chat support</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={whiteCheckmark} />
                      </div>
                      <span>Optimize hashtags</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Unlimited users</span>
                    </div>
                  </div>
                  <div className={styles.choose_btn}>
                    <button className={styles.btn_plan}>Choose plan</button>
                  </div>
                </div>
                <div className={styles.price_section}>
                  <div className={styles.amount}>
                    <h1>$200</h1>
                    <span>/month</span>
                  </div>
                  <div className={styles.details}>
                    <h3>Enterprise</h3>
                    <p>For most businesses that want to otpimize web queries</p>
                  </div>
                  <div className={styles.list_section}>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>All limited links</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Own analytics platfo</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Chat support</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Optimize hashtags</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Unlimited users</span>
                    </div>
                  </div>
                  <div className={styles.choose_btn}>
                    <button className={styles.btn_plan}>Choose plan</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.tab_pane} fade`}
              id="yearly_md"
              role="tabpanel"
              aria_labelledby="yearly_tab_md"
            >
            {/* d_flex */}
              <div className={`d-flex ${styles.price_container}`}>
                <div className={styles.price_section}>
                  <div className={styles.amount}>
                    <h1>$20</h1>
                    <span>/yearly</span>
                  </div>
                  <div className={styles.details}>
                    <h3>Intro</h3>
                    <p>For most businesses that want to otpimize web queries</p>
                  </div>
                  <div className={styles.list_section}>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>All limited links</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Own analytics platfo</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Chat support</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Optimize hashtags</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Unlimited users</span>
                    </div>
                  </div>
                  <div className={styles.choose_btn}>
                    <button className={styles.btn_plan}>Choose plan</button>
                  </div>
                </div>
                <div className={styles.price_section}>
                  <div className={styles.amount}>
                    <h1>$50</h1>
                    <span>/yearly</span>
                  </div>
                  <div className={styles.details}>
                    <h3>Base</h3>
                    <p>For most businesses that want to otpimize web queries</p>
                  </div>
                  <div className={styles.list_section}>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>All limited links</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Own analytics platfo</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Chat support</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Optimize hashtags</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Unlimited users</span>
                    </div>
                  </div>
                  <div className={styles.choose_btn}>
                    <button className={styles.btn_plan}>Choose plan</button>
                  </div>
                </div>
                <div className={`${styles.price_section} ${styles.active_card}`}>
                  <div className={styles.popular_text}>MOST POPULAR</div>
                  <div className={styles.amount}>
                    <h1>$100</h1>
                    <span>/yearly</span>
                  </div>
                  <div className={styles.details}>
                    <h3>Pro</h3>
                    <p>For most businesses that want to otpimize web queries</p>
                  </div>
                  <div className={styles.list_section}>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={whiteCheckmark} />
                      </div>
                      <span>All limited links</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={whiteCheckmark} />
                      </div>
                      <span>Own analytics platfo</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={whiteCheckmark} />
                      </div>
                      <span>Chat support</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={whiteCheckmark} />
                      </div>
                      <span>Optimize hashtags</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={whiteCheckmark} />
                      </div>
                      <span>Unlimited users</span>
                    </div>
                  </div>
                  <div className={styles.choose_btn}>
                    <button className={styles.btn_plan}>Choose plan</button>
                  </div>
                </div>
                <div className={styles.price_section}>
                  <div className={styles.amount}>
                    <h1>$200</h1>
                    <span>/yearly</span>
                  </div>
                  <div className={styles.details}>
                    <h3>Enterprise</h3>
                    <p>For most businesses that want to otpimize web queries</p>
                  </div>
                  <div className={styles.list_section}>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>All limited links</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Own analytics platfo</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Chat support</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Optimize hashtags</span>
                    </div>
                    <div className={styles.item_list}>
                      <div className={styles.check_mark}>
                        <Image src={checkmark} />
                      </div>
                      <span>Unlimited users</span>
                    </div>
                  </div>
                  <div className={styles.choose_btn}>
                    <button className={styles.btn_plan}>Choose plan</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Price;
