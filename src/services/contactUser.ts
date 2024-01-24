import { postRequest, getRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  body?: any;
  id?: number;
}

interface IGetContactMessageSessions {
  params?: any;
  id?: number;
}

export const createContactUserRequest = ({ body }: IGetSessions) => {
  const URL = API.CONTACT_USER ;
  return postRequest(URL, body);
};

export const getContactUsMessageRequest = ({ params }: IGetContactMessageSessions) => {
  const URL = API.CONTACT_US ;
  return getRequest(URL, params);
};