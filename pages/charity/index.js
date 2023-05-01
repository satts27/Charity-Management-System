import axios from "axios";
import React from "react";
import AddButton from "../../components/AddButton";
import CharityList from "../../components/CharityList";
import Add from "../../components/Add";
import { useState } from "react";

export default function Charity({ charityList }) {
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
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/charitys");
  return {
    props: {
      charityList: res.data,
    },
  };
};
