import { getRequest, postRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  params?: any;
  id?: number;
}

interface IPostSessions {
  params?: any;
  payload?: any;
}

export const getTestimonials = ({ params }: IGetSessions) => {
  const URL = API.TESTIMONIAL ;
  return getRequest(URL, params);
};

export const createSession = ({ params, payload }: IPostSessions) => {
  const URL = `/todos`
  return postRequest(URL, payload, params);
};