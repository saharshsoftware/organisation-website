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

