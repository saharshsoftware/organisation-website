import { getRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  params?: any;
  id?: number;
}

export const getFooterRequest = ({ params }: IGetSessions) => {
  const URL = API.FOOTER ;
  return getRequest(URL, params);
};
