import { MutableRefObject, ReactElement, useEffect, useState } from "react";
interface Props {
  id: string;
  threshHold: number;
}
export const useScroll = ({ id, threshHold }: Props) => {
  const [state, setState] = useState(false);
  const onScroll = () => {
    const el = document.getElementById(id);
    if (el) {
      if (
        el.scrollHeight +
          document.documentElement.clientHeight +
          el.clientHeight / threshHold <
        document.documentElement.scrollTop
      ) {
        setState(true);
      } else {
        setState(false);
      }
    } else {
      setState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};
