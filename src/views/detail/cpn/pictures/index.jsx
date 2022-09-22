import PicturesBrowsers from "@/base-ui/pictureBroswer";
import React, { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { PicturesWrapper } from "./style";

const DetailPicture = memo((props) => {
  const [showPictures, setShowPictures] = useState(false);
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );

  const imgClick = () => {
    setShowPictures(true);
  };

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={imgClick}>
            <img src={detailInfo.picture_urls[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo.picture_urls.slice(1, 5).map((item) => {
            return (
              <div className="item" onClick={imgClick} key={item}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="show-btn" onClick={imgClick}>
        显示图片
      </div>
      {showPictures && (
        <PicturesBrowsers
          itemData={detailInfo.picture_urls}
          iconClose={(e) => setShowPictures(false)}
        />
      )}
    </PicturesWrapper>
  );
});

DetailPicture.propTypes = {};

export default DetailPicture;
