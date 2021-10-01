import React, { useState } from "react";
import Distribution from "../components/Distribution";
import NumberInput from "../components/Numbernput";
import RangeSlider from "../components/Slider";
import { factorial, gamma } from "../Libraries/MyMath";
import Grid from "@mui/material/Grid";
import { InlineMath, BlockMath } from "react-katex";
import Typography from "@mui/material/Typography";

function Student() {
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
        <BlockMath math={`T\\leadsto T(n)`} />
        <BlockMath math={`P(${x1}<T<${x2})=${integral.toString()}`} />
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
            (gamma((n + 1) / 2) / (gamma(n / 2) * Math.sqrt(n * Math.PI))) *
            Math.pow(1 + Math.pow(x, 2) / n, -(n + 1) / 2)
          }
          media={0}
          varianza={n / (n - 2)}
          step={0.1}
          stringMedia={"E[X]=0"}
          stringVarianza={"Var[X]=\\frac{n}{n-2}"}
          stringDesviacion={"\\sigma(X)="}
          stringFuncionDensidad={
            "f(x)=\\frac{\\Gamma(\\frac{n+1}{2})}{\\Gamma(\\frac{n}{2})\\sqrt{n\\pi}}\\left(1+\\frac{t^2}{n} \\right)^{-\\frac{n+1}{2}}"
          }
          stringFuncionMasa={"F(x)="}
          stringFuncionMomentos={"M(t)="}
        />
      </Grid>
    </Grid>
  );
}

export default Student;
