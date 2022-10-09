import React, { useState } from "react";
import Distribution from "../components/Distribution";
import NumberInput from "../components/Numbernput";
import RangeSlider from "../components/Slider";
import { factorial, gamma } from "../Libraries/MyMath";
import Grid from "@mui/material/Grid";
import { InlineMath, BlockMath } from "react-katex";
import Typography from "@mui/material/Typography";

function Exponencial(props) {
  const [lambda, setLambda] = useState(1);
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
              text={"λ"}
              value={lambda}
              handleChange={(e) => setLambda(e)}
              min={0}
              max={100}
            />
          </Grid>
          <Grid item xs={12}>
            <NumberInput
              text={"x"}
              value={x1}
              handleChange={(e) => setX1(e)}
              min={props.min}
              max={props.max}
            />
            <NumberInput
              text={"y"}
              min={props.min}
              max={props.max}
              value={x2}
              handleChange={(e) => setX2(e)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <BlockMath math={`X\\leadsto \\text{Exp}(\\lambda)`} />
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
          min={props.min}
          max={props.max}
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
          funcion={(x) => lambda * Math.E ** (-lambda * x)}
          media={1 / lambda}
          varianza={1 / lambda ** 2}
          step={0.01}
          stringMedia={"E[X]=\\frac{1}{\\lambda}"}
          stringVarianza={"Var[X]=\\frac{1}{\\lambda^2}"}
          stringDesviacion={"\\sigma(X)=\\frac{1}{\\lambda}"}
          stringFuncionDensidad={"f(x)=\\lambda e^{-\\lambda x}"}
          stringFuncionMasa={"F(x)=1-e^{-\\lambda x}"}
          stringFuncionMomentos={
            "M(t)=\\left( 1-\\frac{t}{\\lambda} \\right)^{-1}"
          }
        />
      </Grid>
    </Grid>
  );
}

export default Exponencial;
