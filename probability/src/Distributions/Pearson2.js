import React, { useState } from "react";
import Distribution from "../components/Distribution";
import NumberInput from "../components/Numbernput";
import RangeSlider from "../components/Slider";
import { factorial, gamma } from "../Libraries/MyMath";
import Grid from "@mui/material/Grid";
import { InlineMath, BlockMath } from "react-katex";
import Typography from "@mui/material/Typography";

function Beta() {
  const [n, setN] = useState(2);

  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(5);
  const [range, setRange] = useState([0, 1]);
  const [integral, setIntegral] = useState(0);

  const handleChange = (e, newValue) => {
    console.log(newValue);
    setRange(newValue);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      columnSpacing={0}
    >
      <Grid item xs={6}>
        <Typography variant="h6" component="div" gutterBottom>
          Parameters
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <NumberInput
              text={"n"}
              value={n}
              handleChange={(e) => setN(parseInt(e, 10))}
              min={0}
              max={100}
            />
          </Grid>
          <Grid item xs={12}>
            <NumberInput
              text={"x"}
              value={x1}
              handleChange={(e) => setX1(e)}
              min={0}
              max={100}
            />
            <NumberInput
              text={"y"}
              min={0}
              max={100}
              value={x2}
              handleChange={(e) => setX2(e)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <BlockMath
          math={`X\\leadsto \\chi^2(n)\\iff X\\leadsto \\Gamma\\left(\\frac{n}{2}, \\frac{1}{2} \\right)`}
        />
        <BlockMath math={`P(${x1}<X<${x2})=${integral.toString()}`} />
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h6" component="div" gutterBottom>
          Distribution Range
        </Typography>
        <RangeSlider
          value={range}
          step={0.5}
          handleChange={handleChange}
          min={0}
          max={30}
          disabled={false}
          width="200px"
          labelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12}>
        <Distribution
          onCalculateIntegral={(e) => setIntegral(e)}
          min={range[0]}
          max={range[1]}
          limitInf={x1}
          limitSup={x2}
          funcion={(x) =>
            (1 / (gamma(n / 2) * Math.pow(2, n / 2))) *
            Math.pow(x, n / 2 - 1) *
            Math.pow(Math.E, -x / 2)
          }
          media={n}
          varianza={2 * n}
          step={0.1}
          stringMedia={"E[X]=n"}
          stringVarianza={"Var[X]=2n"}
          stringDesviacion={"\\sigma(X)="}
          stringFuncionDensidad={
            "f(x)=\\frac{1}{\\Gamma(n/2)\\cdot 2^{n/2}}x^{n/2-1}e^{-x/2}"
          }
          stringFuncionMasa={"F(x)="}
          stringFuncionMomentos={
            "M(t)=\\frac{1}{(1-2t)^{n/2}},\\ t<\\frac{1}{2}"
          }
        />
      </Grid>
    </Grid>
  );
}

export default Beta;
