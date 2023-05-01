import React from "react";
import styles from "../../styles/Charity.module.css";
import Image from "next/image";
import axios from "axios";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import DonateButton from "../../components/DonateButton";
import ContactCharity from "../../components/ContactCharity";

const Charity = ({ charitys }) => {
  const onToken = (token) => {
    console.log(token);
  };

  const [close, setClose] = useState(true);
  const [recamt, setRecamt] = useState(charitys.recamt);
  const [amountReq, setAmtreq] = useState(charitys.amtreq);
  const [satts, setSatts] = useState();

  let value = 0;
  const handleDonation = () => {
    // console.log(satts);
    value = parseInt(satts) + parseInt(recamt);
    setRecamt(parseInt(value));
    console.log(amountReq);

    // console.log(cirval);
    // console.log(typeof charitys.recamt);
    // console.log(recamt + satts);
  };

  // const handleClick = async () => {
  //   await axios.post(`http://localhost:3000/api/charitys/${params.id}`,{charity : charitys}).then(function(response){
  //     console.log(response);
  //   }).catch(function (err){
  //     console.log(err);
  //   })
  // }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={charitys.img} layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className="mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {charitys.title}
        </h1>
        <p className={styles.desc}>{charitys.desc}</p>
        <br />
        <h5 className={styles.amountReq}>{charitys.amtreq}</h5>
        <p className="mt-4 mb-4 text-s inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full">
          {charitys.type}
        </p>
        <div className={styles.add}>
          <input
            type="number"
            defaultValue={0}
            className={styles.quantity}
            onChange={(e) => setSatts(e.target.value)}
          />
          <div onClick={handleDonation}>
            <StripeCheckout
              className="mt-8"
              // onClick={handleClick}
              token={onToken}
              currency="INR"
              stripeKey="pk_test_51LzZYDSFbY9zBksfsDd0tMEBTKQmIbJewYXfKoIbnJIxhXF3Z4X4WtYbiBR5csq1sEemmqkrxkRS3FM1pFOFYNub00hiTKAEo8"
            />
          </div>
          <div>
            <DonateButton
              className={styles.mainAddButton}
              setClose={setClose}
            />
            {!close && <ContactCharity setClose={setClose} />}
          </div>

          {/* <button className={styles.button}> Amount to donate </button> */}
        </div>
        <div className="mt-6 w-80">
          <CircularProgressbar
            value={recamt}
            maxValue={amountReq}
            text={(amountReq - recamt).toString()}
            strokeWidth={9}
          />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  // console.log(params);

  const res = await axios.get(
    `http://localhost:3000/api/charitys/${params.id}`
  );
  // console.log(res.data);
  return {
    props: {
      charitys: res.data,
    },
  };
};

export default Charity;
