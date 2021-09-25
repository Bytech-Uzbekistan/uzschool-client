import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Headers";
import styles from "../styles/prices.module.css";
import checkmark from "../public/checkmark.png";
import whiteCheckmark from "../public/white-checkmark.png";
import subtract from "../public/subtract.png";
import chevron_left from "../public/chevron-left.png";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Price = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Header />
      <div className={styles.price_section}>
        <div className={styles.heading}>
          <h1>Simple, transparent pricing</h1>
          <p>No contracts. No surprise fees.</p>
        </div>
        <div className={styles.tab_section}>
          {/* card */}
          <div className={styles.tab_content} id="myTabContentMD">
            {/* fade show */}
            <div
              className={` fade show ${styles.tab_pane} ${styles.active}`}
              id="montly_md"
              role="tabpanel"
              aria_labelledby="montly_tab_md"
            >
              {/* d_flex */}
              <div
                className={` d-flex justify-content-center ${styles.price_container}`}
              >
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
                <div
                  className={`${styles.price_section} ${styles.active_card}`}
                >
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
                    {/* <button className={styles.btn_plan}>Choose plan</button> */}
                    <Button className={styles.btn_plan} onClick={toggle}>
                      Choose plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              className={`${styles.tab_pane} fade`}
              id="yearly_md"
              role="tabpanel"
              aria_labelledby="yearly_tab_md"
            >
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
            </div> */}
          </div>
        </div>

        {/* Modal Section Start */}

        <Modal isOpen={modal} toggle={toggle} className={styles.register_modal}>
          {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
          <ModalBody className={styles.register_body}>
            <h2>Register to the course</h2>
            <p>
              after completing the for you will be contacted as soon as
              possible!
            </p>
            <label className={styles.read_text}>Read CAREFULLY</label>
            <div className={styles.form_group}>
              <input id="name" type="text" autoComplete="name" />
              <span className={styles.subtract_icon}>
                <Image src={subtract} />
              </span>
            </div>
            <div className={styles.form_group}>
              <input id="name" type="text" autoComplete="name" />
              <span className={styles.subtract_icon}>
                <Image src={subtract} />
              </span>
            </div>
            <div className={styles.form_group}>
              <select>
                <option>Premium</option>
                <option>Premium</option>
              </select>
              <span className={styles.subtract_icon}>
                <Image src={chevron_left} />
              </span>
            </div>
            <div className={styles.form_group}>
              <label className={styles.checkbox}>
                I agre with the <span>terms</span> and <span>conditions</span>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
              </label>
            </div>
            <div className={styles.form_group}>
              <Button className={styles.btn_complete} onClick={toggle}>
                Complete Registration
              </Button>
            </div>
          </ModalBody>
        </Modal>
        {/* Modal Section End */}
      </div>
      <Footer />
    </div>
  );
};

export default Price;
