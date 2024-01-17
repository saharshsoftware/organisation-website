import { getRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  params?: any;
  id?: number;
}

export const getBlogs = ({ params }: IGetSessions) => {
  const URL = API.BLOGS ;
  return getRequest(URL, params);
};
