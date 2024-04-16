import React from "react";
import BBSCard from "./BBSCard";
import { BBSData } from "../types/types";

interface BBSAllDataProps {
  bbsAllData: BBSData[];
}

const BBSCardList = ({ bbsAllData }: BBSAllDataProps) => {
  return (
    <div className="grid lg:grid-cols-3 p-4 gap-4">
      {bbsAllData.map((bbsData) => (
        <BBSCard key={bbsData.id} bbsData={bbsData} />
      ))}
    </div>
  );
};

export default BBSCardList;
