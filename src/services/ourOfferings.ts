import { getRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  params?: any;
  id?: any;
}

export const getOurOfferings = ({ params }: IGetSessions) => {
  const URL = API.OUR_OFFERINGS ;
  return getRequest(URL, params);
};


