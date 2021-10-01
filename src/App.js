import "./styles.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import * as React from "react";
import Normal from "./Distributions/Normal";
import Beta from "./Distributions/Beta";
import Pearson from "./Distributions/Pearson2";
import Student from "./Distributions/Student";
import Erlang from "./Distributions/Erlang";
import Exponencial from "./Distributions/Exponencial";
import Binomial from "./Distributions/Binomial";

import { InlineMath, BlockMath } from "react-katex";

export default function App() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Binomial" value="a" />
              <Tab label="Normal" value="0" />
              <Tab label="Beta" value="1" />
              <Tab label={"Pearson"} value="2" />
              <Tab label="Student" value="3" />
              <Tab label="Erlang" value="4" />
              <Tab label="Exponential" value="5" />
            </TabList>
          </Box>
          <TabPanel value="a">
            <Binomial min={0} max={1} />
          </TabPanel>
          <TabPanel value="0">
            <Normal min={0} max={1} />
          </TabPanel>
          <TabPanel value="1">
            <Beta min={0} max={1} />
          </TabPanel>
          <TabPanel value="2">
            <Pearson min={0} max={100} />
          </TabPanel>
          <TabPanel value="3">
            <Student min={0} max={100} />
          </TabPanel>
          <TabPanel value="4">
            <Erlang min={0} max={100} />
          </TabPanel>

          <TabPanel value="5">
            <Exponencial min={0} max={10} />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
