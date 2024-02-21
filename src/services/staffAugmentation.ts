import { getRequest } from "../shared/api";
import { API } from "./endpoints";

interface IGetSessions {
  params?: any;
  id?: any;
}

export const getStaffSegmentationData = ({ params }: IGetSessions) => {
  const URL = API.STAFF_SEGMENTATION ;
  return getRequest(URL, params);
};


