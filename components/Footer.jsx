import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/image/side.jpg" objectFit="cover" layout="fill" alt="" />
        <h2 className={styles.text}>
          HelpingHands cares for needy people by empowering their caregivers to
          do their best work, with compassion, grace, integrity and excellence.
          Our end goal is to support people worldwide and see every child reach
          the potential that God has for them.
        </h2>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            <footer>
              <div className={styles.pages}>
                {/* <a href="index.html"><img className="aimg" src="images/logo.png" width="150"></a>  */}
                {/* <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a> */}
                {/* <a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a> */}
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
              <div className={styles.doc}>
                <p>Home</p> <br />
                <p>About</p>
                <br />
                <p>Donate</p>
                <br />
                <p>Contact</p>
              </div>

              <div className={styles.social}>
                <br />
              </div>
              <hr />
              <p>Copyright &copy; 2022 HelpingHands. All rights reserved.</p>
            </footer>
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>CONTACT</h1>
          <h4 className={styles.text}>
            <div className={styles.contact}>
              <h2>
                VESIT, Chembur Mumbai <br />
                200-000-0000
                <br />
                <a href="mailto: khushimahamunkar8@gmail.com">
                  HelpingHands@gmail.com
                </a>
              </h2>
              <br />
              <div>
                <div className="btn1">
                  <Button variant="outline-success" size="lg">
                    JOIN US
                  </Button>
                </div>
              </div>
            </div>{" "}
            <br />
            <br />
            <br />
            <br />
            <br />
            <Image src="/image/logo.png" alt="" width="200" height="200" />
          </h4>

          <p className={styles.text}></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
