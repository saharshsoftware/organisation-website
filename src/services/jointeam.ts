import { getRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  params?: any;
  id?: number;
}

export const getJoinTeamRequest = ({ params }: IGetSessions) => {
  const URL = API.JOIN_TEAM ;
  return getRequest(URL, params);
};
