import styles from "../styles/Card.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
const Cards = ({ charity }) => {
  return (
    // <div className={styles.container}>
    //   <Link href={`/charity/${charity._id}`} passHref>
    //     <Image src={charity.img} alt="" width="500" height="500" />
    //   </Link>

    //   <h1 className={styles.title}>{charity.title}</h1>
    //   <p className={styles.price}>{charity.amtreq}</p>
    //   <p className={styles.desc}>{charity.desc}</p>
    //   <progress value={20} max={charity.amtreq} />
    // </div>
    <Card
      className="m-4 shadow-2xl hover:ring ring-green-500 ring-offset-2 ring-offset-slate-50"
      style={{ width: "18rem" }}
    >
      <Link href={`/charity/${charity._id}`} passHref>
        <Image
          className="hover:scale-110 transition duration-300 ease-in-out"
          src={charity.img}
          alt=""
          width="500"
          height="500"
        />
      </Link>
      <Card.Body>
        <Card.Title>{charity.title}</Card.Title>
        <Card.Text>{charity.desc}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{charity.amtreq}</ListGroup.Item>
        <ListGroup.Item>
          <progress value={charity.recamt} max={charity.amtreq} />
        </ListGroup.Item>

        <ListGroup.Item>
          <span class="text-s inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full">
            {charity.type}
          </span>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Cards;
