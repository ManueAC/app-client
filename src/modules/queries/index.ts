import gql from "graphql-tag";

export const TASKS_LIST_QRY = gql`
  query tasksList {
    tasksList {
      items {
        id
        taskTitle
        taskUser
        taskDscr
        taskCheck
        taskEnd
        taskStart
      }
    }
  }
`;

export const TASK_INFO_QRY = gql`
  query taskInfo($id: ID) {
    taskInfo(id: $id) {
      item {
        id
        taskTitle
        taskUser
        taskDscr
        taskCheck
        taskEnd
        taskStart
      }
    }
  }
`;

export const TASKLIST_QR = gql`
  query ($id: ID!) {
    alliance(id: $id) {
      ...AllianceFragment
    }
  }
`;

//8base Queries


