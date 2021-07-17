import React from "react";
import { InfoMessage } from "../../style/common";

const Loading = ({ message = "Loading ..." }) => {
  return <InfoMessage>{message} </InfoMessage>;
};

export default Loading;
