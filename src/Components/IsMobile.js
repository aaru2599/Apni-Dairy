import { useMediaQuery } from "react-responsive";

const useIsMobile = () => {
  const isMobAndTab = useMediaQuery({ query: "(max-width:768px)" });
  return isMobAndTab;
};

export default useIsMobile;
