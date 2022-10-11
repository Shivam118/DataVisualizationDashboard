import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext } from "react";
import DataContext from "./dataContext";
import PieChart from "./PieChart";


const Home = () => {
  const values = useContext(DataContext);
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
            {values.map((value, index) => {
              return (
                <TableRow key={index}>
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
