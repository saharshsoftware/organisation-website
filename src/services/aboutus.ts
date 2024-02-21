import { getRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  params?: any;
  id?: number;
}

export const getAboutUsRequest = ({ params }: IGetSessions) => {
  const URL = API.ABOUT_US ;
  return getRequest(URL, params);
};
