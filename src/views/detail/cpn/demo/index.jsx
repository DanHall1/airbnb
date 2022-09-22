import React, { memo, useEffect, useRef, useState } from "react";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  const arr = [111, 222, 333, 444, 555, 666, 777, 888, 999];
  const [index, setIndex] = useState(0);
  const dotsRef = useRef();

  const btnClick = (isRight) => {
    const length = arr.length;
    let newIndex = isRight ? index + 1 : index - 1;
    if (newIndex > length - 1) newIndex = 0;
    if (newIndex < 0) newIndex = length - 1;
    setIndex(newIndex);
  };

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
    <DetailWrapper>
      <div>
        <button onClick={(e) => btnClick(false)}>上一个</button>
        <button onClick={(e) => btnClick(true)}>下一个</button>
      </div>
      <div className="dots">
        <div className="list" ref={dotsRef}>
          {arr.map((item) => (
            <button key={item}>{item}</button>
          ))}
        </div>
      </div>
    </DetailWrapper>
  );
});

export default Detail;
