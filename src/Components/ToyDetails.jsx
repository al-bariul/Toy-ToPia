import React from "react";
import { useLoaderData, useParams } from "react-router";

const ToyDetails = () => {
  const data = useLoaderData();
  const { toyId } = useParams();
  console.log(data, toyId);
  return (
    <div>
      <h1>toy details</h1>
    </div>
  );
};

export default ToyDetails;
