import axios from "axios";
import React from "react";
import AddButton from "../../components/AddButton";
import CharityList from "../../components/CharityList";
import Add from "../../components/Add";
import { useState } from "react";

const Charity = ({ charityList }) => {
  const [close, setClose] = useState(true);
  return (
    <div>
      <AddButton setClose={setClose} />
      {!close && <Add setClose={setClose} />}
      <div>
        <CharityList charityList={charityList} />
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/charitys`
  );
  return {
    props: {
      charityList: res.data,
    },
  };
};

export default Charity;
// this is charity page
