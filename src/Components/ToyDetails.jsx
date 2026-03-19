import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ToyDetailsCard from "./ToyDetailsCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ToyDetails = () => {
  const data = useLoaderData();
  const { toyId } = useParams();
  //   console.log(data);

  const [toy, setToy] = useState({});

  useEffect(() => {
    const toyDetails = data.find((singleToy) => singleToy.toyId == toyId);
    setToy(toyDetails);
  }, [data, toyId]);

  //   console.log(toy);

  return (
    <>
      <Navbar></Navbar>
      <div className="w-6/12 mx-auto my-28">
        {toy && <ToyDetailsCard toy={toy}></ToyDetailsCard>}
      </div>
      <Footer></Footer>
    </>
  );
};

export default ToyDetails;
