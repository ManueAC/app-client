import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
// import { Link as RouterLink } from 'react-router-dom';

import {BtnNewTask} from "./Styles/BtnNewTask";
import { BtnResumen } from './Styles/BtnResumen';

// const history = useHistory();

class HeaderApp extends Component {
  state = {};
  render() {
    // const classes = btnLink();
    return (
      <Fragment>
        <Box bgcolor=" #CCFFF1 ">
          <Grid container>
            <Grid item md={1}></Grid>
            <Grid item md={9} /* bgcolor="red" alignContent="flex-end */>
              <Box bgcolor="#CCFFF1">
                <Typography
                  align="center"
                  style={{
                    color: "#424242",
                    paddingTop: 12,
                    paddingBottom: 8,
                    fontSize: 48,
                  }}
                >

                  Web's Tasks
                </Typography>
                {/* <Divider variant="middle" /> */}
              </Box>
            </Grid>
            <Grid
              item md={1}
              // justifyContent="center"
            >
              <Button size="large">
                <MeetingRoomIcon
                  fontSize="large"
                  style={{ color: "#424242" }}
                />
              </Button>
            </Grid>

            {/* Tab System -------*/}
            <Grid
              container
              direction="row"
              justifyContent="center"
              item
              md={12}
            >
              <Grid container md={2} justifyContent="center">
                <BtnResumen
                // onClick={ () => history.push('/home')}
                />
                <BtnNewTask />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Fragment>
    );
  }
}

export default HeaderApp;
