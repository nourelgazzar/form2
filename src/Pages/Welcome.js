import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  all: {
    background: "linear-gradient(-90deg, #a97efb,#8fcbf4)",
    position: "fixed",
    top: "0",
    left: "0",
    margin: "0",
    padding: "0",

    height: "100% ",
    width: "100% ",

    overflow: "auto",
  },
  display: { display: "flex", marginTop: "15vw", marginLeft: "41vw" },
  text: {
    fontSize: "2vw!important",
    color: "#f5f5f5",
  },
  flex: {
    display: "flex",
  },
}));

export default function FormSuccess() {
  const classes = useStyles();
  return (
    <div className={classes.all}>
      <div className={classes.display}>
        <div>
          <Typography className={classes.text}>Welcome to Dayra</Typography>
        </div>
      </div>
    </div>
  );
}
