import React, { useEffect, useState } from "react";
import Graph from "./Graph";
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

function evaluateFunction(f, min, max, step) {
  let data = [];
  let labels = [];
  let labelsSimple = [];
  let factor = 1 / step;

  for (var i = min * factor; i <= max * factor; i++) {
    let labelRedondeada = Math.round((i / factor) * 100) / 100;
    labels.push(labelRedondeada);
    data.push(f(labelRedondeada));

    if (labelRedondeada % 1 === 0) {
      labelsSimple.push(labelRedondeada.toString());
    } else labelsSimple.push("");
  }

  return [labels, data, labelsSimple];
}

function integrateFunction(f, min, max, onCalculateIntegral) {
  var Calculess = require("calculess");
  var Calc = Calculess.prototype;

  let r = Calc.integral(min, max, f, 1000).toFixed(4);
  onCalculateIntegral(r);
  return r;
}

function Distribution(props) {
  const [graphData, setGraphData] = useState(
    evaluateFunction(props.funcion, props.min, props.max, props.step)
  );

  useEffect(() => {
    setGraphData(
      evaluateFunction(props.funcion, props.min, props.max, props.step)
    );

    integrateFunction(
      props.funcion,
      props.limitInf,
      props.limitSup,
      props.onCalculateIntegral
    );
  }, [props.funcion, props.limitInf, props.limitSup, props.min, props.max]);

  let mediaString = props.media.toFixed(4).toString();
  let varianzaString = props.varianza.toFixed(4).toString();
  let desviacionString = (props.varianza ** 0.5).toFixed(4).toString();

  return (
    <Box style={{ marginTop: 10 }} sx={{ flexGrow: 1 }}>
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
          <Graph
            min={props.min}
            max={props.max}
            labels={graphData[0]}
            data={graphData[1]}
            labelsSimple={graphData[2]}
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

export default Distribution;
