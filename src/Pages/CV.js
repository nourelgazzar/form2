import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RadioButton from "../Components/RadioButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PersonIcon from "@mui/icons-material/Person";
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
  formdiv: {
    height: "20vw",
    width: "30vw",
    background: "#f5f5f5",
    marginLeft: "35vw",
    marginTop: "1vw",
    borderRadius: "1.5vw",
    boxShadow:
      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  text: { fontSize: "2vw", marginLeft: "0.5vw", fontWeight: 500 },
  text1: {
    fontSize: "2vw",
    marginLeft: "0.5vw",
  },
  icon: { marginLeft: "13vw", paddingBottom: "0.5vw", paddingTop: "1vw" },
  flex: {
    display: "flex",

    marginLeft: "2vw",
  },
  flex2: {
    display: "flex",
  },
  title: {
    fontSize: "2vw!important",
    color: "#f5f5f5",
    marginTop: "3vw",
    marginLeft: "42vw",
  },
}));

export default function FormPage() {
  const classes = useStyles();
  const [firstName, setFirstName] = React.useState("");
  const [age, setage] = React.useState("");
  const [university, setuniversity] = React.useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/task2").then((resp) => {
      console.log(resp.data, "WHAT EVEN");
      setFirstName(resp.data[0]);
      setage(resp.data[1]);
      setuniversity(resp.data[2]);
    });
  }, []);
  

  return (
    <div className={classes.all}>
      <Typography className={classes.title}> Nour's Informtaion</Typography>
      <div className={classes.formdiv}>
        <div>
          <AccountCircleIcon
            sx={{
              color: "#a58cff",
              height: "4vw",
              width: "4vw",
            }}
            className={classes.icon}
          />
        </div>
        <div className={classes.flex}>
          <div>
            <PersonIcon sx={{ color: "black", height: "3vw", width: "3vw" }} />
          </div>
          <div className={classes.flex2}>
            <div>
              <Typography className={classes.text}>First Name:</Typography>
            </div>
            <div className={classes.text1}>{firstName}</div>
          </div>
        </div>
        <div className={classes.flex}>
          <div>
            <InsertChartIcon
              sx={{
                color: "black",
                height: "3vw",
                width: "3vw",
              }}
            />
          </div>
          <div className={classes.flex2}>
            <div>
              <Typography className={classes.text}>Age:</Typography>
            </div>
            <div className={classes.text1}> {age}</div>
          </div>
        </div>
        <div className={classes.flex}>
          <div>
            <SchoolIcon
              sx={{
                // color: "#a58cff",
                color: "black",
                height: "3vw",
                width: "3vw",
              }}
            />
          </div>

          <div className={classes.flex2}>
            <div>
              <Typography className={classes.text}>University:</Typography>
            </div>
            <div className={classes.text1}>{university}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
