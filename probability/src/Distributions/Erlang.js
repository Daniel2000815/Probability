import React, { useState } from "react";
import Distribution from "../components/Distribution";
import NumberInput from "../components/Numbernput";
import RangeSlider from "../components/Slider";
import { factorial, gamma } from "../Libraries/MyMath";
import Grid from "@mui/material/Grid";
import { InlineMath, BlockMath } from "react-katex";
import Typography from "@mui/material/Typography";

function Erlang() {
  const [lambda, setLambda] = useState(1);
  const [n, setN] = useState(1);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(1);
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
              handleChange={(e) => setN(e)}
              min={0}
              max={100}
            />
            <NumberInput
              text={"λ"}
              value={lambda}
              min={1}
              max={100}
              handleChange={(e) => setLambda(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <NumberInput
              text={"x"}
              value={x1}
              handleChange={(e) => setX1(e)}
              min={0}
              max={20}
            />
            <NumberInput
              text={"y"}
              min={0}
              max={20}
              value={x2}
              handleChange={(e) => setX2(e)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <BlockMath math={`X\\leadsto E(n,\\lambda)`} />
        <BlockMath math={` P(${x1}<X<${x2})=${integral.toString()}`} />
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
          max={20}
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
            (lambda * Math.E ** (-lambda * x) * (lambda * x) ** (n - 1)) /
            factorial(n - 1)
          }
          media={n / lambda}
          varianza={n / lambda ** 2}
          stringMedia={"E[X]=\\frac{n}{\\lambda}"}
          stringVarianza={"Var[X]=\\frac{n}{\\lambda^2}"}
          stringDesviacion={"\\sigma(X)=\\frac{n}{\\lambda}"}
          stringFuncionDensidad={
            "f(x)=\\lambda e^{-\\lambda x} \\frac{(\\lambda x)^{n-1}}{(n-1)!}"
          }
          stringFuncionMasa={
            "F(x)=1-\\sum_{n=0}^{n-1}\\frac{e^{-\\lambda x}(\\lambda x)^n}{n!}"
          }
          stringFuncionMomentos={"M(t)="}
          step={0.1}
        />
      </Grid>
    </Grid>
  );
}

export default Erlang;

/*
onCalculateIntegral={(e) => setIntegral(e)}
          min={range[0]}
          max={range[1]}
          limitInf={x1}
          limitSup={x2}
          funcion={(x) =>
            (lambda * Math.E ** (-lambda * x) * (lambda * x) ** (n - 1)) /
            factorial(n - 1)
          }
          media={n / lambda}
          varianza={n / lambda ** 2}
          stringMedia={"E[X]=\\frac{n}{\\lambda}"}
          stringVarianza={"Var[X]=\\frac{n}{\\lambda^2}"}
          stringDesviacion={"\\sigma(X)=\\frac{n}{\\lambda}"}
          stringFuncionDensidad={
            "f(x)=\\lambda e^{-\\lambda x} \\frac{(\\lambda x)^{n-1}}{(n-1)!}"
          }
          stringFuncionMasa={
            "F(x)=1-\\sum_{n=0}^{n-1}\\frac{e^{-\\lambda x}(\\lambda x)^n}{n!}"
          }
          stringFuncionMomentos={"M(t)="}
          */
