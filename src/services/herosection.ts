import { getRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  params?: any;
  id?: number;
}

export const getHeroSectionRequest = ({ params }: IGetSessions) => {
  const URL = API.HERO_SECTION ;
  return getRequest(URL, params);
};
