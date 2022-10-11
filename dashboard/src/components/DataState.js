import React, { useState, useEffect } from "react";
import DataContext from "./dataContext";

const DataState = (props) => {
  const [values, setValues] = useState([]);
  const handleGraphData = async () => {
    try {
      const res = await fetch("http://localhost:5000/data", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // credentials: "include",
      });
      const data = res.json();
      data.then((response) => {
        setValues(response);
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleGraphData();
  }, []);

  return (
    <DataContext.Provider value={values}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
