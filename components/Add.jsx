import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../styles/Add.module.css";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [amtreq, setAmtreq] = useState(null);
  const [type, setType] = useState(null);
  const [recamt, setRecamt] = useState(null);

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dyi6mrnhb/image/upload",
        data
      );
      console.log(uploadRes.data);
      const { url } = uploadRes.data;
      const newCharity = {
        title,
        desc,
        amtreq,
        recamt: 0,
        img: url,
        type,
      };

      await axios.post(
        `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/charitys`,
        newCharity
      );
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1> Start your Fundraiser </h1>
        <div className={styles.item}>
          <label className={styles.label}> Choose an Image </label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Amount Req</label>
          <input
            className={styles.input}
            type="number"
            onChange={(e) => setAmtreq(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Type</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Add;
