import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import SectionItem from "@/components/section-item";
import { RoomWrapper } from "./style";
import { changeDetailInfoAction } from "@/store/modules/detail";

const EntireRooms = memo((props) => {
  const { totalCount, entireList, isLoading } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      entireList: state.entire.entireList,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //NODE: 待做
  const itemClick = useCallback(
    (item) => {
      dispatch(changeDetailInfoAction(item));
      navigate("/detail");
    },
    [dispatch, navigate]
  );

  return (
    <RoomWrapper>
      <h2 className="title">共{totalCount}多处房源</h2>
      <div className="list">
        {entireList.map((item) => {
          return (
            <SectionItem
              itemClick={itemClick}
              key={item._id}
              itemWidth="20%"
              item={item}
            />
          );
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomWrapper>
  );
});

export default EntireRooms;
