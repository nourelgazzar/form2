import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RadioButton from "../Components/RadioButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
    height: "40vw",
    width: "45vw",
    background: "#f5f5f5",
    marginLeft: "27vw",
    marginTop: "3vw",
    borderRadius: "1.5vw",
    boxShadow:
      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  flex: {},
  flex2: {
    display: "flex",
    marginLeft: "6.44vw",
  },
  name: {
    marginLeft: "8vw",
    paddingBottom: "0.5vw",
  },
  name1: {
    paddingBottom: "0.5vw",
    marginLeft: "8vw",
  },
  icon: {
    marginLeft: "21vw",
    marginTop: "2vw",
    paddingBottom: "1vw",
  },
  text: {
    marginLeft: "2.3vw",
    marginTop: "1vw",
  },
  radio: {
    marginLeft: "8vw!important",

    marginTop: "1vw",
  },
  text1: {
    marginLeft: "8vw",
    marginTop: "2vw",
  },
  button: {
    marginLeft: "28vw !important",
    marginTop: "-6vw !important",
  },
  title: {
    color: "red",
  },
  error: {
    fontSize: "10",
    color: "red",
    marginLeft: "8vw",
  },
  errorwithout: {
    fontSize: "10",
    color: "#f5f5f5",
    marginLeft: "8vw",
  },
  error1: {
    fontSize: "10",
    color: "red",

    marginLeft: "8vw",
  },
  error1without: {
    fontSize: "10",
    color: "#f5f5f5",

    marginLeft: "8vw",
  },
  error2: {
    fontSize: "10",
    color: "red",

    marginLeft: "8vw",
  },
  error2without: {
    fontSize: "10",
    color: "#f5f5f5",

    marginLeft: "8vw",
  },
  alltext: { display: "flex" },
}));

export default function FormPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [university, setuniversity] = React.useState("");
  const [email, setemail] = React.useState("");
  const [rate, setrate] = React.useState("1");

  const [firstNameError, setfirstNameError] = React.useState(false);
  const [firstNameErrorText, setfirstNameErrorText] = React.useState(
    "no error"
  );

  const [lastNameError, setlastNameError] = React.useState(false);
  const [lastNameErrorText, setlastNameErrorText] = React.useState("no error");
  const [universityErrorText, setuniversityErrorText] = React.useState(
    "no error"
  );
  const [universityError, setuniversityError] = React.useState(false);
  const [emailError, setemailError] = React.useState(false);
  const [emailErrorText, setemailErrorText] = React.useState("no error");
  const [rateErrorText, setrateErrorText] = React.useState("no error");

  const [button, setbutton] = React.useState("#a58cff");

  const onChangeFirstName = (e) => {
    console.log(e.target.value, "valueeeeee");
    setFirstName(e.target.value);
  };
  const onChangeLastName = (e) => {
    setlastName(e.target.value);
  };
  const onChangeUniversity = (e) => {
    setuniversity(e.target.value);
  };
  const onChangeEmail = (e) => {
    setemail(e.target.value);
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const onSubmit = (e) => {
    var x = 4;
    if (firstName === "") {
      setfirstNameError(true);
      setfirstNameErrorText("First Name should not be left empty ");
    } else if (/\d/.test(firstName)) {
      setfirstNameError(true);
      setfirstNameErrorText("First Name should not include numbers ");
    } else {
      setfirstNameError(false);
      x--;
    }

    if (lastName === "") {
      setlastNameError(true);
      setlastNameErrorText("Last Name should not be left empty ");
    } else if (/\d/.test(lastName)) {
      setlastNameError(true);
      setlastNameErrorText("Last Name should not include numbers ");
    } else {
      setlastNameError(false);
      x--;
    }
    if (university === "") {
      setuniversityError(true);
      setuniversityErrorText("University Name should not be left empty ");
    } else if (/\d/.test(university)) {
      setuniversityError(true);
      setuniversityErrorText("University Name should not include numbers ");
    } else {
      setuniversityError(false);
      x--;
    }
    if (email === "") {
      console.log(email);
      setemailError(true);
      setemailErrorText("Email should not be left empty ");
    } else if (!validateEmail(email)) {
      setemailError(true);
      setemailErrorText("Email should be in xxxx@y.com format");
    } else {
      setemailError(false);
      x--;
    }
    if (x === 0) {
      var rateNumber = parseInt(rate, 10);
      const body = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        university: university,
        rate: rateNumber,
      };

      console.log(body, "BODY");
      // axios({
      //   method: "POST",
      //   credentials: "include",
      //   url: "http://localhost/Task1/backend.php/",
      //   headers: { "content-type": "application/json" },
      //   data: body,
      // })
      //   .then((result) => {})
      //   .catch((error) => {});

      // let formData = new FormData();
      // formData.append("firstName", firstName);
      // formData.append("lastName", lastName);
      // formData.append("email", email);
      // formData.append("university", university);
      // formData.append("rate", rateNumber);
      // console.log(formData, "data");

      // axios
      //   .post("http://localhost/Task1/backend.php/", formData)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      var rateNumber = parseInt(rate, 10);

      axios({
        method: "post",
        url: "http://localhost/Task1/backend.php/",
        data: body,
        headers: { "content-type": "application/json" },
      })
        .then(function(response) {
          //handle success
          console.log(response, "RESPONSEEEEEEEE");

          //navigate("/success");
        })
        .catch(function(response) {
          //handle error
          console.log(response);
        });
    }
  };

  const axioscall = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        university: university,
        rate: rate,
      }),
    };
    console.log(requestOptions, "check");
    await fetch(`http://localhost/Task1/backend.php`, requestOptions)
      .then((response) => console.log(JSON.stringify(response)))
      .catch((error) => console.log(error));
  };

  const classes = useStyles();
  return (
    <div className={classes.all}>
      <div className={classes.formdiv}>
        <div>
          <AccountCircleIcon
            sx={{
              color: "#a58cff",
              height: "3vw",
              width: "3vw",
            }}
            className={classes.icon}
          />
        </div>
        <div>
          <Typography
            className={firstNameError ? classes.error : classes.errorwithout}
          >
            {firstNameErrorText}
          </Typography>
        </div>

        <div className={classes.name1}>
          <TextField
            id="outlined-basic"
            label="First Name"
            onChange={onChangeFirstName}
            variant="outlined"
            sx={{
              width: "30vw",
            }}
            error={firstNameError}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
        </div>

        <div>
          <Typography
            className={lastNameError ? classes.error2 : classes.error2without}
          >
            {lastNameErrorText}
          </Typography>
        </div>
        <div className={classes.name}>
          <TextField
            id="outlined-basic"
            label="Last Name"
            onChange={onChangeLastName}
            variant="outlined"
            error={lastNameError}
            sx={{
              width: "30vw",
            }}
          />
        </div>

        <div>
          <Typography
            className={universityError ? classes.error : classes.errorwithout}
          >
            {universityErrorText}
          </Typography>
        </div>

        <div className={classes.name}>
          <TextField
            id="outlined-basic"
            label="University"
            variant="outlined"
            error={universityError}
            sx={{
              width: "30vw",
            }}
            onChange={onChangeUniversity}
          />
        </div>

        <div>
          <Typography
            className={emailError ? classes.error1 : classes.error1without}
          >
            {emailErrorText}
          </Typography>
        </div>

        <div className={classes.name}>
          <TextField
            id="outlined-basic"
            label="Email Adress"
            variant="outlined"
            error={emailError}
            sx={{
              width: "30vw",
            }}
            onChange={onChangeEmail}
          />
        </div>

        <div className={classes.flex}>
          <div>
            <Typography className={classes.text1}>
              Rate your Experience:
            </Typography>
          </div>
          <div>
            <RadioButton
              className={classes.radio}
              setrate={setrate}
              rate={rate}
            />
          </div>
        </div>

        <div className={classes.flex2}>
          <div>
            <Typography className={classes.text}>1</Typography>
          </div>
          <div>
            <Typography className={classes.text}>2</Typography>
          </div>
          <div>
            <Typography className={classes.text}>3</Typography>
          </div>
          <div>
            <Typography className={classes.text}>4</Typography>
          </div>
          <div>
            <Typography className={classes.text}>5</Typography>
          </div>
        </div>
        <Button
          className={classes.button}
          onClick={() => {
            onSubmit();
          }}
          onMouseOver={() => {
            setbutton("#bba2ff");
          }}
          onMouseOut={() => {
            setbutton("#a58cff");
          }}
          variant="contained"
          size="large"
          style={{ width: "10vw", height: "3vw", backgroundColor: button }}
        >
          <Typography variant="button" style={{ fontSize: 18, color: "white" }}>
            Submit
          </Typography>
        </Button>
      </div>
    </div>
  );
}
