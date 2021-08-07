import { ApolloClient } from "apollo-client";
import { TaskType, TaskTypeData } from "./types";
import { TASKS_LIST_QRY } from "../queries/index";
import { useQuery } from "@apollo/client";
import { client } from "../../shared/api/index";
import { TASK_CREATE_MUT, TASK_STATUS_MUT } from "../mutations";

type SetTasks = (tasks: TaskType[]) => void;

export const getTaskAction = async (
  callback: (data: TaskType[]) => void
): Promise<void> => {
  try {
    const { data } = await client.query({
      query: TASKS_LIST_QRY,
    });
    console.log(data);
    callback(data.tasksList.items);
  } catch (err) {
    console.log(err);
  }
};

export const createTaskAction = async (
  input: TaskType,
  callback: () => void
): Promise<void> => {
  try {
    const { data } = await client.mutate({
      mutation: TASK_CREATE_MUT,
      variables: {
        input,
      },
    });
    console.log(data);
    callback();
  } catch (err) {
    console.log(err);
  }
};

export const deleteTaskAction = async (id: string): Promise<void> => {
  try {
    const { data } = await client.mutate({
      mutation: TASK_CREATE_MUT,
      variables: {
        id,
      },
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const statusTaskAction = async (
  id: string,
  status: boolean,
  obtenerTareas: () => void
): Promise<void> => {
  try {
    const { data } = await client.mutate({
      mutation: TASK_STATUS_MUT,
      variables: {
        filter: {
          id: {
            equals: id,
          },
        },
        status: {
          taskCheck: {
            set: status,
          },
        },

      },

    });
    console.log(data);
    obtenerTareas();
  } catch (err) {
    console.log(err);
  }
};
