import React, { useState } from "react";
import DiscreteDistribution from "../components/DiscreteDistribution";
import NumberInput from "../components/Numbernput";
import RangeSlider from "../components/Slider";
import { choose, factorial, gamma } from "../Libraries/MyMath";
import Grid from "@mui/material/Grid";
import { InlineMath, BlockMath } from "react-katex";
import Typography from "@mui/material/Typography";

function Exponencial(props) {
  const [n, setN] = useState(1);
  const [p, setP] = useState(1);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(1);
  const [range, setRange] = useState([0, 1]);
  const [prob, setProb] = useState(0);

  const handleChange = (e, newValue) => {
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
            <NumberInput
              text={"p"}
              value={p}
              handleChange={(e) => setP(e)}
              min={0}
              max={1}
            />
          </Grid>
          <Grid item xs={12}>
            <NumberInput
              text={"x"}
              value={x1}
              handleChange={(e) => setX1(e)}
              min={props.min}
              max={n}
            />
            <NumberInput
              text={"y"}
              min={props.min}
              max={n}
              value={x2}
              handleChange={(e) => setX2(e)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <BlockMath math={`X\\leadsto B(n,p)`} />
        <BlockMath math={` P(${x1}\\le X\\le ${x2})=${prob.toString()}`} />
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
          max={n}
          disabled={false}
          width="200px"
          labelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12}>
        <DiscreteDistribution
          onCalculateProbability={(e) => setProb(e)}
          min={range[0]}
          max={n}
          limitInf={x1}
          limitSup={x2}
          funcion={(x) =>
            choose(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x)
          }
          media={n * p}
          varianza={n * p * (1 - p)}
          step={0.01}
          stringMedia={"E[X]=np"}
          stringVarianza={"Var[X]=np(1-p)"}
          stringDesviacion={"\\sigma(X)="}
          stringFuncionDensidad={"f(x)={n} \\binom {x} p^x (1-p)^{n-x}"}
          stringFuncionMasa={"F(x)="}
          stringFuncionMomentos={"M(t)=(1-p+pe^t)^n"}
        />
      </Grid>
    </Grid>
  );
}

export default Exponencial;
