import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import React, { memo, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ScrollViewWrapper } from "./style";

const ScrollView = memo((props) => {
  const childrenRef = useRef();
  const showScrollRef = useRef();

  const [index, setIndex] = useState(0);
  const [scrollRight, setScrollRight] = useState(true);
  const [scrollLeft, setScrollLeft] = useState(false);

  useEffect(() => {
    const clientWidth = childrenRef.current.clientWidth;
    const scrollWidth = childrenRef.current.scrollWidth;
    const width = scrollWidth - clientWidth;
    showScrollRef.current = width;
  }, [props.children]);

  const controlBtnClick = (is) => {
    const nextIndex = is ? index + 1 : index - 1;
    const el = childrenRef.current.children[nextIndex];
    const offsetLeft = el.offsetLeft;
    childrenRef.current.style.transform = `translate(-${offsetLeft}px)`;
    setIndex(nextIndex);
    setScrollRight(offsetLeft < showScrollRef.current);
    setScrollLeft(offsetLeft > 0);
  };

  return (
    <ScrollViewWrapper>
      {scrollLeft && (
        <div className="control left" onClick={(e) => controlBtnClick(false)}>
          <IconArrowLeft />
        </div>
      )}
      {scrollRight && (
        <div className="control right" onClick={(e) => controlBtnClick(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="items" ref={childrenRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
