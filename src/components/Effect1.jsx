import React, { useEffect, useState } from "react";

const Effect1 = () => {
  const [count, setCount] = useState(1);
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${count}`)
      .then((res) => res.json())
      .then((data2) => setGetData(data2));

    return () => {
      console.log("element destroy");
    };
  }, [count]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data2) => setGetData(data2));
  }, []);

  return (
    <div className="bg-purple-500">
      <button className="bg-yellow-300  m-4 p-2 rounded-lg border-cyan-200 border-2" onClick={() => setCount(count + 1)}>increment</button>

    <div className="bg-yellow-300 w-8 m-4 p-2 rounded-ss-full border-cyan-200 border-2"> {count}</div> 


      {getData.length > 1
        ? getData?.map((item, index) => <div className="bg-green-400 w-max  p-2 rounded-lg border-red-600 m-1 border-2" key={index}>{item.title}</div>)
        : <div className="bg-pink-500 w-max m-4 p-2 rounded-lg border-cyan-200 border-2">{getData.title}</div> }
    </div>
  );
};

export default Effect1;
