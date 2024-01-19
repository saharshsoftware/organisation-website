import { postRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  params?: any;
  id?: number;
}

export const createContactUserRequest = ({ params }: IGetSessions) => {
  const URL = API.CONTACT_USER ;
  return postRequest(URL, params);
};
