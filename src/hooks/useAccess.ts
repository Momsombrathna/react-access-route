import { useAccessContext } from "../context/AccessProvider";

export const useAccess = () => {
  return useAccessContext();
};
