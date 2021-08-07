import {
  Box,
  Checkbox,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Fragment, useEffect, useState } from "react";
// Components
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
import { TASKS_LIST_QRY } from "./queries";
import { useQuery } from "@apollo/client";
import { TaskType, TaskTypeData } from "./components/types";
import { getTaskAction, statusTaskAction } from "./components/actions";
// import { Jumper } from "./components/JumperQR";
// import { client } from "../shared/api";

const ResumenTasks = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  // const [check, setCheck] = useState<Boolean>(taskCheck);
  // const estado = (status: boolean): void => {
  //   setCheck(status);
  // };

  const callback = (data: TaskType[]): void => {
    setTasks(data);
  };
  // const [] = use
  const obtenerTareas = () => {
    getTaskAction(callback);
  };

  useEffect(() => {
    obtenerTareas();
  }, []);

  const taskFilters = tasks.filter((task) => task.taskCheck === true);
  const taskFiltersFalse = tasks.filter((task) => task.taskCheck === false);
  console.log(taskFilters);
  return (
    // console.log(data.taskList);
    <>
      <Box margin="9% auto">
        <Grid container direction="column">
          <Typography variant="h4" align="center">
            Current tasks
          </Typography>
          <Box
            // md={8}
            borderRight={1}
            borderColor="grey.500"
            margin="0px auto"
            paddingRight="15%"
          >
            <List>
              {taskFiltersFalse.map(
                ({ taskTitle, taskDscr, taskUser, id, taskCheck }) => (
                  <ListItem key={id} button>
                    <Checkbox
                      checked={taskCheck}
                      onChange={() => {
                        if (id) statusTaskAction(id, !taskCheck, obtenerTareas);
                        // console.log(check);
                      }}
                    />
                    <ListItemText primary={taskTitle} secondary={taskUser} />
                    <Typography noWrap>{taskDscr}</Typography>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <ClearIcon />
                    </IconButton>
                  </ListItem>
                )
              )}
            </List>
          </Box>
          <Grid item md={4}>
            <Typography variant="h4" align="center">
              Status
            </Typography>
            <List>
              {taskFilters.map(
                ({ taskTitle, taskDscr, taskUser, id, taskCheck }) => (
                  <ListItem key={id} button>
                    <Checkbox
                      checked={taskCheck}
                      onChange={() => {
                        if (id) statusTaskAction(id, !taskCheck, obtenerTareas);
                        // console.log(check);
                      }}
                    />
                    <ListItemText primary={taskTitle} secondary={taskUser} />
                    <Typography noWrap>{taskDscr}</Typography>
                    {/* <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <ClearIcon />
                  </IconButton> */}
                  </ListItem>
                )
              )}
            </List>
          </Grid>
        </Grid>
      </Box>
    </>
  );

  // ))
};

export default ResumenTasks;

// const ResumenTasks = () => {
//   return (

//   );
// };

// export default ResumenTasks;

// export default ResumenTasks;
