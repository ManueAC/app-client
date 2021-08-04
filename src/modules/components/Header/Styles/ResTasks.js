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
  makeStyles,
  // Paper,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
import Divider from "@material-ui/core/Divider";

const LsStyle = makeStyles({
  root: {
    paddingRight: "1.5rem",
  },
});

const generate = (element) => {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const ResTasks = () => {
  const classes = LsStyle();
  return (
    <List>
      {generate(
        <ListItem>
          <Checkbox></Checkbox>
          <ListItemText
            primary="Single-line item"
            secondary="Worker Asignated"
            className={classes.root}
          />
          <Typography variant="secondary" className={classes.root}>
            Task Description Asigned
          </Typography>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <ClearIcon />
          </IconButton>
        </ListItem>
      )}
    </List>
  );
};

export default ResTasks;
