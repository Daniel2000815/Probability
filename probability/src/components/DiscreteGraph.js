import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const Graph = (props) => {
  let minPos = props.labels.indexOf(props.min);
  let maxPos = props.labels.indexOf(props.max);
  let dataCopy = [...props.data];

  for (var i = 0; i < dataCopy.length; i++) {
    if (i < minPos || i > maxPos) {
      dataCopy[i] = 0;
    }
  }

  const mydata = () => {
    props.labels.map(function (val, i) {
      return { name: props.labels[i], val: props.data[i] };
    });
  };

  function computeData() {
    let res = [];
    for (let i = 0; i < props.data.length; i++) {
      res.push({ name: props.labels[i], val: props.data[i] });
    }

    return res;
  }

  const graphData = {
    labels: props.labels,
    datasets: [
      {
        label: "1",
        backgroundColor: "rgba(30, 139, 195, 0.6)",
        highlightStroke: "rgba(220,220,220,1)",
        borderWidth: 0,
        data: props.data,
        pointBackgroundColor: "rgba(0,0,0,0)",
        pointBorderColor: "rgba(0,0,0,0)"
      }
    ]
  };

  return (
    <ResponsiveContainer width="90%" aspect={2}>
      <BarChart
        data={computeData()}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="val" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Graph;
