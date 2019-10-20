import { useEffect, useState } from "react";

const useTransitionDelay = history => {
  const [prevPath, setPrevPath] = useState("");
  const [isRouting, setIsRouting] = useState(false);
  const [isTransitionDone, setIsTransitionDone] = useState(false);

  useEffect(() => {
    const unlisten = history.listen(location => {
      if (location.pathname !== prevPath) {
        setIsTransitionDone(false);
        setPrevPath(location.pathname);
        setIsRouting(!isRouting);
      }
    });
    return unlisten;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitionDone(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isRouting]);

  return isTransitionDone;
};

export default useTransitionDelay;
