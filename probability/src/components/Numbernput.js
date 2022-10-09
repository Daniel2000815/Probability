import React, { useState } from "react";
import TextField from '@mui/material/TextField';

/*
<Input
            addonBefore={props.text}
            type={"number"}
            style={{ width: '20%' }}
            onChange={props.handleChange}
            defaultValue={props.default}
            min={props.min}
            max={props.max}
        />
        */

const NumberInput = (props) => {
  const [value, setValue] = useState(props.min);

  return (
    <TextField
      id="outlined-number"
      label={props.text}
      type="number"
      value={props.value}
      onChange={(e) => {
        var v = parseFloat(e.target.value, 10);

        if (v > props.max) v = props.max;
        if (v < props.min) v = props.min;
        else if (v === null || v === "") v = props.min;

        if (v) {
          setValue(v);
          props.handleChange(v);
        } else {
          setValue(props.min);
          props.handleChange(props.min);
        }
      }}
      InputLabelProps={{
        shrink: true
      }}
    />
  );
};

export default NumberInput;
