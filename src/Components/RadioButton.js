import * as React from "react";
import Radio from "@mui/material/Radio";

export default function RadioButton(props) {
  const [selectedValue, setSelectedValue] = React.useState("1");

  const handleChange = (event) => {
    props.setrate(event.target.value);
  };

  return (
    <div className={props.className}>
      <Radio
        checked={props.rate === "1"}
        value="1"
        onChange={handleChange}
        name="radio-buttons"
        inputProps={{ "aria-label": "1" }}
        sx={{
          "&.Mui-checked": {
            color: "#a58cff",
          },
        }}
      />
      <Radio
        value="2"
        checked={props.rate === "2"}
        onChange={handleChange}
        name="radio-buttons"
        inputProps={{ "aria-label": "2" }}
        sx={{
          "&.Mui-checked": {
            color: "#a58cff",
          },
        }}
      />
      <Radio
        checked={props.rate === "3"}
        onChange={handleChange}
        value="3"
        name="radio-buttons"
        inputProps={{ "aria-label": "3" }}
        sx={{
          "&.Mui-checked": {
            color: "#a58cff",
          },
        }}
      />
      <Radio
        label="Female"
        checked={props.rate === "4"}
        onChange={handleChange}
        value="4"
        name="radio-buttons"
        inputProps={{ "aria-label": "4" }}
        sx={{
          "&.Mui-checked": {
            color: "#a58cff",
          },
        }}
      />
      <Radio
        label="5"
        checked={props.rate === "5"}
        onChange={handleChange}
        value="5"
        name="radio-buttons"
        inputProps={{ "aria-label": "5" }}
        sx={{
          "&.Mui-checked": {
            color: "#a58cff",
          },
        }}
      />
    </div>
  );
}
