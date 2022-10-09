import React, { Component } from "react";
//import { Table, Tag, Space } from 'antd';
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function MyTable(props) {
  /*
    const columns = [
        {
            title: 'Fución Densidad',
            dataIndex: 'fd',
            key: 'm',
            width: "200px"
        },
        {
            title: 'Fución Masa Probabilidad',
            dataIndex: 'fm',
            key: 'm',
            width: "200px"
        },
        {
            title: 'F.G. Momentos',
            dataIndex: 'momen',
            key: 'd',
            width: "200px"
        },
        {
        title: 'Media',
        dataIndex: 'm',
        key: 'm',
        width: "200px"
        },
        {
        title: 'Varianza',
        dataIndex: 'v',
        key: 'v',
        width: "200px"
        },
        {
        title: 'Desviación Típica',
        dataIndex: 'd',
        key: 'd',
        width: '70%'
        }
    
    ];

    const data = [
        {
        
        }
    ]

    return(
        <Table pagination={{hideOnSinglePage:true}} columns={columns} dataSource={data}/>
    );
    */

  function Row(name, tex) {
    return (
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell>{name}</TableCell>
        <TableCell>
          <BlockMath math={tex} />
        </TableCell>
      </TableRow>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
        <TableBody>
          {Row("Media", props.stringMedia)}
          {Row("Varianza", props.stringVarianza)}
          {Row("Desviación", props.stringDesviacion)}
          {Row("F. Masa", props.stringFuncionMasa)}
          {Row("F. Densidad", props.stringFuncionDensidad)}
          {Row("Momentos", props.stringFuncionMomentos)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyTable;
