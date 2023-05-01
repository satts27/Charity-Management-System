import React from "react";
import Cards from "../components/Card";

const CharityList = ({ charityList }) => {
  return (
    <div className="flex flex-wrap justify-around">
      {charityList.map((charity) => (
        <Cards key={charity._id} charity={charity} />
      ))}
    </div>
  );
};

export default CharityList;
