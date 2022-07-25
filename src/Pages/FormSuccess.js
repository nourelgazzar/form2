import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography } from "@mui/material";

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
  display: { display: "flex", marginTop: "18vw", marginLeft: "33vw" },
  text: {
    fontSize: "2vw!important",
    color: "#f5f5f5",
  },
}));

export default function FormSuccess() {
  const classes = useStyles();
  return (
    <div className={classes.all}>
      <div className={classes.display}>
        <div>
          <CheckCircleIcon
            sx={{
              color: "#f5f5f5",
              height: "3vw",
              width: "3vw",
            }}
          />
        </div>
        <div>
          <Typography className={classes.text}>
            Thank you, your form is submitted
          </Typography>
        </div>
      </div>
    </div>
  );
}
