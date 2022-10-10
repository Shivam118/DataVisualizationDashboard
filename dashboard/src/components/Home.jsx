import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import PieChart from "./PieChart";

const Home = () => {
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
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <PieChart />
      <Paper elevation={4} p={4}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Topic</TableCell>
              <TableCell>StartYr</TableCell>
              <TableCell>EndYr</TableCell>
              <TableCell>Intensity</TableCell>
              <TableCell>Sector</TableCell>
              <TableCell>Insight</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Impact</TableCell>
              <TableCell>Added</TableCell>
              <TableCell>Published</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Relevance</TableCell>
              <TableCell>Pestle</TableCell>
              <TableCell>Source</TableCell>
              <TableCell>Likelihood</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.map((value) => {
              return (
                <TableRow>
                  <TableCell>{value.topic}</TableCell>
                  <TableCell>{value.start_year}</TableCell>
                  <TableCell>{value.end_year}</TableCell>
                  <TableCell>{value.intensity}</TableCell>
                  <TableCell>{value.sector}</TableCell>
                  <TableCell>{value.insight}</TableCell>
                  <TableCell>{value.region}</TableCell>
                  <TableCell>{value.impact}</TableCell>
                  <TableCell>{value.added}</TableCell>
                  <TableCell>{value.published}</TableCell>
                  <TableCell>{value.country}</TableCell>
                  <TableCell>{value.relevance}</TableCell>
                  <TableCell>{value.pestle}</TableCell>
                  <TableCell>{value.source}</TableCell>
                  <TableCell>{value.likelihood}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default Home;
