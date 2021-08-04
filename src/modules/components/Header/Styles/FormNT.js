import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  IconButton,
  Typography,
  TextField,
  Box,
  Button,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { border } from "@material-ui/system";
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker,
//     KeyboardTimePicker
// } from '@material-ui/pickers';

const FormNT = makeStyles({
  root: {
    margin: "20% auto",
    width: "63%",
  },
  FW: {
    display: "flex",
  },
  FormBox: {
    width: "34%",
  },
});

export default function BasicTextFields() {
  const classes = FormNT();

  // const classesFW = ;
  return (
    <Box borderLeft={1} borderColor="grey.500" width="45%" margin="auto">
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container direction="row">
          <Grid item md={8}>
            <Typography variant="h3">New task</Typography>
          </Grid>
          <Grid container md={4} direction="row" alignContent="center">
            <IconButton
              className={classes.BtnIChk}
              variant="outlined"
              border={2}
              borderColor="black"
            >
              <CheckIcon />
            </IconButton>
            <IconButton>
              <ClearIcon />
            </IconButton>
            {/* <Box border={3} borderColor='black' borderRadius='50%' padding={3}>
                        <Typography>A</Typography>
                    </Box> */}
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item md={12}>
            <TextField
              className={classes.FW}
              id="standard-full-width"
              label="Task name"
              //   value={}
              //   placeholder="Name"
              //   onChange={}
            />
          </Grid>

          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker 
                        label="Date start"
                        type={'date'}
                    />
                </MuiPickersUtilsProvider>                 */}

          <Grid item md={6}>
            <TextField
              id="standard-basic"
              // label="Start"
              type="date"
              margin="normal"
            />
          </Grid>
          <Grid container direction="row" md={6} justifyContent="flex-end">
            <TextField
              id="standard-basic"
              // label="End"

              type="date"
              margin="normal"
              //   value={}

              //   onChange={}
            />
          </Grid>

          <Grid item md={12}>
            <TextField
              className={classes.FW}
              id="standard-full-width"
              label="Subject"
              //   value={}
              //   placeholder="Name"
              //   onChange={}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              className={classes.FW}
              id="standard-full-width"
              label="Description"
              margin="normal"
              multiline
              //   value={}
              //   placeholder="Name"
              //   onChange={}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
