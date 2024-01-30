import { getRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  params?: any;
  id?: any;
}

export const getProjectImagesRequest = ({ params }: IGetSessions) => {
  const URL = API.PROJECT_IMAGE ;
  return getRequest(URL, params);
};

export const getProjectDetail = ({ params, id }: IGetSessions) => {
  const URL = API.PROJECT_IMAGE+"/"+id ;
  return getRequest(URL, params);
};

