import React, { useState } from "react";
import Distribution from "../components/Distribution";
import NumberInput from "../components/Numbernput";
import RangeSlider from "../components/Slider";
import { factorial, gamma } from "../Libraries/MyMath";
import Grid from "@mui/material/Grid";
import { BlockMath } from "react-katex";
import Typography from "@mui/material/Typography";

function Beta() {
  const [alfa, setAlfa] = useState(2);
  const [beta, setBeta] = useState(2);
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
              text={"α"}
              value={alfa}
              handleChange={(e) => setAlfa(e)}
              min={0}
              max={100}
            />
            <NumberInput
              text={"β"}
              value={beta}
              min={0}
              max={100}
              handleChange={(e) => setBeta(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <NumberInput
              text={"x"}
              value={x1}
              handleChange={(e) => setX1(e)}
              min={0}
              max={1}
            />
            <NumberInput
              text={"y"}
              min={0}
              max={1}
              value={x2}
              handleChange={(e) => setX2(e)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <BlockMath math={`X\\leadsto B(\\alpha,\\beta)`} />
        <BlockMath math={` P(${x1}<X<${x2})=${integral.toString()}`} />
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h6" component="div" gutterBottom>
          Distribution Range
        </Typography>
        <RangeSlider
          value={range}
          step={0.05}
          handleChange={handleChange}
          min={0}
          max={1}
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
            (Math.pow(x, alfa - 1) * Math.pow(1 - x, beta - 1)) /
            ((gamma(alfa) * gamma(beta)) / gamma(alfa + beta))
          }
          media={alfa / (alfa + beta)}
          varianza={(alfa * beta) / ((alfa + beta + 1) * (alfa + beta) ** 2)}
          step={0.1}
          stringMedia={"E[X]=\\frac{\\alpha}{\\alpha+\\beta}"}
          stringVarianza={
            "Var[X]=\\frac{\\alpha\\beta}{(\\alpha+\\beta+1)(\\alpha+\\beta)^2}"
          }
          stringDesviacion={
            "\\sigma(X)=\\sqrt{\\frac{\\alpha\\beta}{(\\alpha+\\beta+1)(\\alpha+\\beta)^2}}"
          }
          stringFuncionDensidad={
            "f(x)=\\frac{x^{\\alpha-1}(1-x)^{\\beta-1}}{\\frac{\\Gamma(\\alpha)\\Gamma(\\beta)}{\\Gamma(\\alpha+\\beta)}}"
          }
          stringFuncionMasa={
            "F(x)=1-\\sum_{n=0}^{k-1}\\frac{e^{-\\lambda x}(\\lambda x)^n}{n!}"
          }
          stringFuncionMomentos={
            "M(t)=1+\\sum_{n=1}^{\\infty}\\left( \\prod_{r=0}^{n-1}{\\frac{\\alpha+r}{\\alpha+\\beta+r}} \\right) \\frac{t^n}{n!}"
          }
        />
      </Grid>
    </Grid>
  );
}

export default Beta;
