import { useState, useEffect } from "react";
import { throttle } from "underscore";

export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollFn = throttle(() => {
    setScrollY(window.scrollY);
  }, 200);
  useEffect(() => {
    window.addEventListener("scroll", scrollFn);
    return () => {
      window.removeEventListener("scroll", scrollFn);
    };
  });
  return scrollY;
};
