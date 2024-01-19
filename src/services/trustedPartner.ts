import { getRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  params?: any;
  id?: number;
}

export const getTrustedPartnerRequest = ({ params }: IGetSessions) => {
  const URL = API.TRUSTED_PARTNER ;
  return getRequest(URL, params);
};
