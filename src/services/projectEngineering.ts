import { getRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  params?: any;
  id?: any;
}

export const getProjectEngineeringData = ({ params }: IGetSessions) => {
  const URL = API.RPOJECT_ENGINEERING ;
  return getRequest(URL, params);
};


