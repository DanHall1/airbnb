import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconClose from "@/assets/svg/icon-close";
import IconTriangleArrowBottom from "@/assets/svg/icon-triangle-arrow-bottom";
import IconTriangleArrowTop from "@/assets/svg/icon-triangle-arrow-top";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Indicator from "../indicator";
import { BrowsersWrapper } from "./style";

const PicturesBrowsers = memo((props) => {
  const { iconClose, itemData } = props;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeClick = () => {
    iconClose(false);
  };

  const [index, setIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true);

  const arrowClick = (isNext) => {
    let newIndex = isNext ? index + 1 : index - 1;
    let length = itemData.length;
    if (newIndex > length - 1) newIndex = 0;
    if (newIndex < 0) newIndex = length - 1;
    setIndex(newIndex);
    setIsNext(isNext);
  };

  const listPicClick = (currentIndex) => {
    setIndex(currentIndex);
    setIsNext(currentIndex > index);
  };

  return (
    <BrowsersWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeClick}>
          <IconClose />
        </div>
      </div>

      <div className="slider">
        <div className="control">
          <div className="btn" onClick={(e) => arrowClick(false)}>
            <IconArrowLeft />
          </div>
          <div className="btn" onClick={(e) => arrowClick(true)}>
            <IconArrowRight />
          </div>
        </div>

        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition key={itemData[index]} classNames="pic" timeout={200}>
              <img src={itemData[index]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>

      <div className="preview">
        <div className="info">
          <div className="desc">
            {index + 1}/{itemData.length}：房间图片{index + 1}
            <div className="toggle" onClick={(e) => setShowList(!showList)}>
              {showList ? "隐藏" : "显示"}照片列表
              {showList ? (
                <IconTriangleArrowBottom />
              ) : (
                <IconTriangleArrowTop />
              )}
            </div>
          </div>
          <div className="list">
            <Indicator index={index}>
              {itemData.map((item, currentIndex) => {
                return (
                  <div
                    className={classNames("item", {
                      active: index === currentIndex,
                    })}
                    key={item}
                    onClick={(e) => listPicClick(currentIndex)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowsersWrapper>
  );
});

PicturesBrowsers.propTypes = {
  itemData: PropTypes.array,
  iconClose: PropTypes.func,
};

export default PicturesBrowsers;
