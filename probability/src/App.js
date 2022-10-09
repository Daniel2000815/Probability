import "./styles.css";
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as React from "react";
import Normal from "./Distributions/Normal";
import Beta from "./Distributions/Beta";
import Pearson from "./Distributions/Pearson2";
import Student from "./Distributions/Student";
import Erlang from "./Distributions/Erlang";
import Exponencial from "./Distributions/Exponencial";
import Binomial from "./Distributions/Binomial";

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <Tabs value={value} onChange={handleChange} >

          <Tab label="Binomial" value={0} />
          <Tab label="Normal" value={1} />
          <Tab label="Beta" value={2} />
          <Tab label={"Pearson"} value={3} />
          <Tab label="Student" value={4} />
          <Tab label="Erlang" value={5} />
          <Tab label="Exponential" value={6} />



        </Tabs>

        {value === 0 && <Binomial min={0} max={1} />}
        {value === 1 && <Normal min={0} max={1} />}
        {value === 2 && <Beta min={0} max={1} />}
        {value === 3 && <Pearson min={0} max={100} />}
        {value === 4 && <Student min={0} max={100} />}
        {value === 5 && <Erlang min={0} max={100} />}
        {value === 6 && <Exponencial min={0} max={10} />}
      </Box>
    </div>
  );
}
