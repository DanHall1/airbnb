import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { index, children } = props;
  const dotsRef = useRef();
  useEffect(() => {
    const item = dotsRef.current.children[index];
    const itemLeft = item.offsetLeft;
    const itemWidth = item.clientWidth;

    const listWidth = dotsRef.current.clientWidth;
    const listScroll = dotsRef.current.scrollWidth;
    const acceptableWidth = listScroll - listWidth;

    let centerPoint = itemLeft + itemWidth * 0.5 - listWidth * 0.5;
    if (centerPoint < 0) centerPoint = 0;
    if (centerPoint > acceptableWidth) centerPoint = acceptableWidth;

    dotsRef.current.style.transform = `translate(${-centerPoint}px)`;
  });
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={dotsRef}>
        {children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  index: PropTypes.number,
};

export default Indicator;
