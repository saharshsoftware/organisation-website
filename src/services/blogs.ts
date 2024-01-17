import { getRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  params?: any;
  id?: any;
}

export const getBlogs = ({ params }: IGetSessions) => {
  const URL = API.BLOGS ;
  return getRequest(URL, params);
};

export const getBlogDetail = ({ params, id }: IGetSessions) => {
  const URL = API.BLOGS+"/"+id ;
  return getRequest(URL, params);
};
