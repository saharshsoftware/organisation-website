import { postRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  body?: any;
  id?: number;
}

export const createContactUserRequest = ({ body }: IGetSessions) => {
  const URL = API.CONTACT_USER ;
  return postRequest(URL, body);
};
