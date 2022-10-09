import React, { useEffect, useState } from "react";
import DiscreteGraph from "./DiscreteGraph";
import MyTable from "../components/Table";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const centerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "..",
  height: ".."
};

function evaluateFunction(f, min, max) {
  let data = [];
  let labels = [];
  let labelsSimple = [];

  for (var i = min; i <= max; i++) {
    labels.push(i);
    data.push(f(i));
  }

  return [labels, data, labelsSimple];
}

function calculateProbability(f, min, max, onCalculateProbability) {
  let r = 0;

  for (var i = min; i <= max; i++) {
    r += f(i);
  }

  r = r.toFixed(4);

  onCalculateProbability(r);
  return r;
}

function DiscreteDistribution(props) {
  const [graphData, setGraphData] = useState(
    evaluateFunction(props.funcion, props.min, props.max, props.step)
  );

  useEffect(() => {
    setGraphData(evaluateFunction(props.funcion, props.min, props.max));

    calculateProbability(
      props.funcion,
      props.limitInf,
      props.limitSup,
      props.onCalculateProbability
    );
  }, [props.funcion, props.limitInf, props.limitSup, props.min, props.max]);

  let mediaString = props.media.toFixed(4).toString();
  let varianzaString = props.varianza.toFixed(4).toString();
  let desviacionString = (props.varianza ** 0.5).toFixed(4).toString();

  return (
    <Box style={{ marginTop: 10 }}>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "..",
          height: ".."
        }}
        spacing={0}
      >
        <Grid item xs={6}>
          <DiscreteGraph
            min={props.min}
            max={props.max}
            labels={graphData[0]}
            data={graphData[1]}
          />
        </Grid>
        <Grid item xs={6}>
          <MyTable
            stringMedia={props.stringMedia + "=" + mediaString}
            stringVarianza={props.stringVarianza + "=" + varianzaString}
            stringDesviacion={props.stringDesviacion + desviacionString}
            stringFuncionMasa={props.stringFuncionMasa}
            stringFuncionDensidad={props.stringFuncionDensidad}
            stringFuncionMomentos={props.stringFuncionMomentos}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

/*
class Distribution extends Component {
  render() {
    let d = this.evaluateFunction(
      this.props.funcion,
      this.props.min,
      this.props.max,
      this.props.step
    );
    let r = this.integrateFunction(
      this.props.funcion,
      this.props.limitInf,
      this.props.limitMax
    );

    

    return (
      
    );
  }
}
*/

export default DiscreteDistribution;
