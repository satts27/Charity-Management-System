import axios from "axios";
import React, { useState } from "react";
import styles from "../../styles/Admin.module.css";
import Image from "next/image";

const Index = ({ charitys }) => {
  const [charityList, setCharityList] = useState(charitys);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/charitys/" + id
      );
      setCharityList(charityList.filter((charity) => charity._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Charities</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>ID</th>
              <th>Title</th>
              <th>Type</th>
              <th>Amount Req</th>
              <th>Amount Rec</th>
            </tr>
          </tbody>
          {charityList.map((charity) => (
            <tbody key={charity._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={charity.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{charity._id}</td>
                <td>{charity.title}</td>
                <td>{charity.type}</td>
                <td>{charity.amtreq}</td>
                <td>{charity.recamt}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(charity._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const charityRes = await axios.get("http://localhost:3000/api/charitys");
  return {
    props: {
      charitys: charityRes.data,
    },
  };
};

export default Index;
