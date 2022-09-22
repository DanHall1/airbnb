import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import { Carousel } from "antd";
import classNames from "classnames";

import { ItemWrapped } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";

const SectionItem = memo((props) => {
  const { item, itemWidth, itemClick } = props;
  const [index, setIndex] = useState(0);
  const carouselRef = useRef();

  const btnClick = (isRight = true, e) => {
    e.stopPropagation();
    const nextOrPre = carouselRef.current;
    isRight ? nextOrPre.next() : nextOrPre.prev();
    const length = item.picture_urls.length;
    let newIndex = isRight ? index + 1 : index - 1;
    if (newIndex > length - 1) newIndex = 0;
    if (newIndex < 0) newIndex = length - 1;
    setIndex(newIndex);
  };
  const wrappedClick = () => {
    if (itemClick) itemClick(item);
  };

  const image = (
    <div className="cover">
      <img src={item.picture_url} alt="" />
    </div>
  );

  const images = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={(e) => btnClick(false, e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={(e) => btnClick(true, e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      <Carousel dots={false} ref={carouselRef}>
        {item?.picture_urls?.map((iten) => {
          return (
            <div className="cover" key={iten}>
              <img src={iten} alt="" />
            </div>
          );
        })}
      </Carousel>
      <div className="indicator">
        <Indicator index={index}>
          {item?.picture_urls?.map((item, indez) => {
            return (
              <div className="item" key={item}>
                <span
                  className={classNames("dot", { active: index === indez })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
    </div>
  );

  return (
    <ItemWrapped
      contentBgColor={item?.bottom_info?.content_color}
      verifyColor={item?.verify_color?.text_color}
      itemWidth={itemWidth ?? "25%"}
      onClick={wrappedClick}
    >
      <div className="inner">
        {item.picture_urls ? images : image}
        <div className="desc">{item?.verify_info?.messages?.join(" . ")}</div>
        <div className="name">{item.name}</div>
        <div className="price">￥{item.price} / 晚</div>
        <div className="bottom">
          <Rating
            name="read-only"
            className="MuiRating-decimal"
            sx={{
              fontSize: "12px",
              color: "#00848A",
            }}
            value={item.star_rating ?? 5}
            precision={0.1}
            readOnly
          />
          <span className="count">{item.reviews_count}</span>
          {item.bottom_info?.content && (
            <span className="content">{item.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapped>
  );
});

SectionItem.propTypes = {
  item: PropTypes.object,
  itemWidth: PropTypes.string,
  itemClick: PropTypes.func,
};

export default SectionItem;
