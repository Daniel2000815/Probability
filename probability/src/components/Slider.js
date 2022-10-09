import Slider from "@mui/material/Slider";
import { useState } from "react";

const RangeSlider = (props) => {
  const marks = [
    {
      value: props.min,
      label: props.min
    },
    {
      value: props.max,
      label: props.max
    }
  ];

  return (
    <div>
      <span style={{ width: props.width }}>
        <Slider
          aria-label="Always visible"
          marks={marks}
          defaultValue={props.defaultValue}
          value={props.value}
          step={props.step}
          onChange={props.handleChange}
          onChangeCommitted={props.handleChangeCommited}
          min={props.min}
          max={props.max}
          disabled={props.disabled}
          valueLabelDisplay={props.labelDisplay}
        />
      </span>
    </div>
  );
};

export default RangeSlider;
