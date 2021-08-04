import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  // Paper,
  Typography,
} from "@material-ui/core";
import React, { Component, Fragment } from "react";
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import Divider from "@material-ui/core/Divider";
// import InfoTaskRefill from "../InfoTask/InfoTaskRefill";
// import InfoSideBar from "../InfoTask/InfoSideBar";
import ResTasks from "./components/Header/Styles/ResTasks";
import ResStatus from "./components/Header/Styles/ResStatus";

const TASK_LIST_QRY = gql`
  query tasksList{
    tasksList {
      items {
        id
        taskTitle
        taskUser
        taskDscr
      }
    }
  }
`;


class ResumenTasks extends Component {
  state = {  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() { 



    return (
      <Query query={TASK_LIST_QRY}>
        {({  loading, error, data }) => {
          if (loading) return "Cargando";
          if (error) return `Error: ${error.message}`;
          console.log(data);
          return (  
            <Fragment>
              <h1>Alo</h1>
              <Box
                // width="65%"
                // borderLeft={1}
                // borderColor="grey.500"
                margin="9% auto"
              >
                <Grid container direction="row" justifyItems="center">
                  <Box
                    item
                    md={8}
                    borderRight={1}
                    borderColor="grey.500"
                    margin="0px auto"
                  >
                    <ResTasks />
                  </Box>
                  <Grid item md={4}>
                    <Typography variant="h4" align="center">
                      Status
                    </Typography>
                    <ResStatus />
                  </Grid>
                </Grid>
              </Box>
              
              {data.tasksList.items.map((item) => {
                // const {id} = item;

                return (
                  <List key={item.id}>
                    <ListItem>
                      <Checkbox></Checkbox>
                      <ListItemText
                        primary={item.taskTitle}
                        secondary={item.taskUser}
                        // className={classes.root}
                      />
                      <Typography
                        variant="secondary"
                        // className={classes.root}
                      >
                        {item.taskDscr}
                      </Typography>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <ClearIcon />
                      </IconButton>
                    </ListItem>
                  </List>
                );
              })}
            </Fragment>
          );
          /* { data.tasksList.map((item) => {
              const { id } = item;
              return (
                <Box
                  width="65%"
                  borderLeft={1}
                  borderColor="grey.500"
                  margin="9% auto"
                >
                  <Grid container direction="row" justifyItems="center">
                    <Box
                      item
                      md={8}
                      borderRight={1}
                      borderColor="grey.500"
                      margin="0px auto"
                    >
                      <ResTasks />
                    </Box>
                    <Grid item md={4}>
                      <Typography variant="h4" align="center">
                        Status
                      </Typography>
                      <ResStatus />
                    </Grid>
                  </Grid>
                </Box>
              );
            });
          } */
        }}
      </Query>
    );
  }
}
 
export default ResumenTasks;



// const ResumenTasks = () => {
//   return (
    

//   );
// };

// export default ResumenTasks;

// export default ResumenTasks;
