import { getRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  params?: any;
  id?: any;
}

export const getWhyChooseRequest = ({ params }: IGetSessions) => {
  const URL = API.WHY_CHOOSE_US ;
  return getRequest(URL, params);
};

