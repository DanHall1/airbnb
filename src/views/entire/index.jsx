import { fetchEntireListAction } from "@/store/modules/entire/createActions";
import { changeHeaderConfigAction } from "@/store/modules/main";
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import EntireFilter from "./cpns/filter";
import EntirePagination from "./cpns/pagination";
import EntireRooms from "./cpns/rooms";
import { EntireWrapped } from "./style";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntireListAction());
    dispatch(
      changeHeaderConfigAction({
        isFixed: true,
        topAlpha: false,
      })
    );
  }, [dispatch]);

  return (
    <EntireWrapped>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapped>
  );
});

export default Entire;
