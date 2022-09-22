import React, { memo, useEffect } from "react";

import { DetailWrapper } from "./style";
import DetailInfo from "./cpn/info";
import DetailPicture from "./cpn/pictures";
import { useDispatch } from "react-redux";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Detail = memo((props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      changeHeaderConfigAction({
        isFixed: false,
        topAlpha: false,
      })
    );
  }, [dispatch]);
  return (
    <DetailWrapper>
      <DetailPicture />
      <DetailInfo />
    </DetailWrapper>
  );
});

export default Detail;
