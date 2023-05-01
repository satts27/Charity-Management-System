import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
const PizzaCard = () => {
  return (
    <>
      {/* <div className={styles.container}>
      <Image src="/images/food.jpg" alt="" width="500" height="500" style=" border-radius: 50%;" />
      <h1 className={styles.title}>Pure Food & Water</h1>
      <span className={styles.price}></span>
      <h3 className={styles.desc}>
       We supply needy childen with basic necessities like pure food and water.
      </h3>
    </div>
 
    <div className={styles.container}>
      <Image src="/images/health.png" alt="" width="500" height="500" style=" border-radius: 50%;" />
      <h1 className={styles.title}>Health and Medicine</h1>
      <span className={styles.price}></span>
      <h3 className={styles.desc}>
       Health being the foremost priority, we aim at giving people every medical support.
      </h3>
      </div>
     
      <div className={styles.container}>
      <Image src="/images/education.jpg" alt="" width="500" height="500" style=" border-radius: 50%;" />
      <h1 className={styles.title}>Education</h1>
      <span className={styles.price}></span>
        <h3 className={styles.desc}>
          We provide education facilities to people all over the world.
      </h3>
      </div> */}
      <div>
        <Tada>
          <Card style={{ width: "38rem" }}>
            <Card.Img variant="top" height="500" src="/image/food.jpg" />
            <Card.Body>
              <Card.Title className={styles.title}>
                Pure Food & Water
              </Card.Title>
              <Card.Text className={styles.desc}>
                We supply needy childen with basic necessities like pure food
                and water.
              </Card.Text>
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
          </Card>
        </Tada>
        <br />
        <br />
        <Tada>
          <Card style={{ width: "38rem" }}>
            <Card.Img variant="top" height="500" src="/image/health.png" />
            <Card.Body>
              <Card.Title className={styles.title}>
                Health and Medicine
              </Card.Title>
              <Card.Text className={styles.desc}>
                Health being the foremost priority, we aim at giving people
                every medical support.
              </Card.Text>
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
          </Card>
        </Tada>
        <br />
        <br />
        <Tada>
          <Card style={{ width: "38rem" }}>
            <Card.Img variant="top" height="500" src="/image/education.jpg" />
            <Card.Body>
              <Card.Title className={styles.title}>Education</Card.Title>
              <Card.Text className={styles.desc}>
                We provide education facilities to people all over the world.
              </Card.Text>
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
          </Card>
        </Tada>
        <br />
        <br />
      </div>
    </>
  );
};

export default PizzaCard;
