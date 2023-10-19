import React, { useEffect, useState } from "react";
import data from "./data.json";
const Doc = () => {
  // const url = "/api/v1/basic-syntax.json";
  // const [data, setData] = useState([]);

  // const fetchInfo = () => {
  //   return fetch(url)
  //     .then((res) => res.json())
  //     .then((d) => {
  //       setData(d);
  //       console.log(d);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  return (
    <div className="doc">
      {data.basic_syntax?.map((block, i) => (
        <div className="block" key={i}>
          <div className="blockHeader">
            <h1>{block.name}</h1>
            <p>{block.description}</p>
          </div>
          <div className="blockExample">
            {block.examples.map((example, index) => (
              <div className="example" key={index}>
                <h2>Example {index + 1}:</h2>
                <h3>- markdown</h3>
                <p>{example.markdown}</p>
                <h3>- html</h3>
                <p>{example.html}</p>
              </div>
            ))}
          </div>
          <div className="blockExample">
            {" "}
            {block.additional_examples.map((addexample, index) => (
              <div className="example" key={index}>
                <h2>{addexample.name}</h2>
                <p>{addexample.description}</p>
                <h3>- markdown</h3>
                <p>{addexample.markdown}</p>
                <h3>- html</h3>
                <p>{addexample.html}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Doc;
