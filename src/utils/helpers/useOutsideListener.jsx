import { useEffect } from "react";

export function useOutsideListener(ref, callbackFunc) {
  function handleOutsideClick(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callbackFunc();
    }
  }

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  });
}
