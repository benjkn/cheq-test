import http from "../http-common";
import ITaskData from "../types/Task";

const getAll = () => {
  return http.get<Array<ITaskData>>("/tasks");
};

const get = (id: any) => {
  return http.get<ITaskData>(`/tasks/${id}`);
};

const create = (data: ITaskData) => {
  return http.post<ITaskData>("/tasks", data);
};

const update = (id: any, data: ITaskData) => {
  return http.put<any>(`/tasks/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/tasks/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/tasks`);
};

const findByTitle = (title: string) => {
  return http.get<Array<ITaskData>>(`/tasks?title=${title}`);
};

const TaskService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TaskService;
