import { getRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  params?: any;
  id?: number;
}

export const getNavbarRequest = ({ params }: IGetSessions) => {
  const URL = API.NAVBAR ;
  return getRequest(URL, params);
};
