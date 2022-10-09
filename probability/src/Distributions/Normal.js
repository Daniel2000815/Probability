import React, { useState } from "react";
import Distribution from "../components/Distribution";
import NumberInput from "../components/Numbernput";
import RangeSlider from "../components/Slider";
import { factorial, gamma } from "../Libraries/MyMath";
import Grid from "@mui/material/Grid";
import { InlineMath, BlockMath } from "react-katex";
import Typography from "@mui/material/Typography";

function Normal() {
  const [mu, setMu] = useState(1);
  const [sigma, setSigma] = useState(1);
  const [x1, setX1] = useState(-1);
  const [x2, setX2] = useState(1);
  const [range, setRange] = useState([-1, 1]);
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
              text={"μ"}
              value={mu}
              handleChange={(e) => setMu(e)}
              min={0}
              max={100}
            />
            <NumberInput
              text={"σ²"}
              value={sigma}
              min={-100}
              max={100}
              handleChange={(e) => setSigma(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <NumberInput
              text={"x"}
              value={x1}
              handleChange={(e) => setX1(e)}
              min={-100}
              max={100}
            />
            <NumberInput
              text={"y"}
              min={-100}
              max={100}
              value={x2}
              handleChange={(e) => setX2(e)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <BlockMath math={`X\\leadsto \\mathcal{N}(\\mu,\\sigma^2)`} />
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
          min={-20}
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
            (1 / (Math.sqrt(sigma) * (2 * Math.PI) ** 0.5)) *
            Math.E ** (-((x - mu) ** 2) / (2 * Math.sqrt(sigma) ** 2))
          }
          media={mu}
          varianza={sigma}
          step={0.01}
          stringMedia={"E[X]=\\mu"}
          stringVarianza={"Var[X]=\\sigma^2"}
          stringDesviacion={"\\sigma(X)="}
          stringFuncionDensidad={
            "f(x)=\\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}"
          }
          stringFuncionMasa={"F(x)="}
          stringFuncionMomentos={"M(t)="}
        />
      </Grid>
    </Grid>
  );
}

export default Normal;
