import styles from "../styles/Info.module.css";
import PizzaCard from "./PizzaCard";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
const Info = () => {
  return (
    <center>
      <div className={styles.container}>
        <h1 className={styles.title}></h1>
        <p className={styles.desc}>
          <div className="main">
            <div className="main_content">
              <h2>
                “Giving is not just about making a donation. It is about making
                a difference.”
                <span>Give a helping hand to people who NEED it!</span>
              </h2>
              <br />
              <div className="btn1">
                <Button variant="outline-dark" size="lg">
                  DONATE NOW
                </Button>
              </div>
              <br />
              <br />
              <br />
              <h1>OUR GOALS</h1>
            </div>
          </div>
        </p>
        <div className={styles.wrapper}>
          <PizzaCard />
        </div>
      </div>
    </center>
  );
};

export default Info;
