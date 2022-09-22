import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchEntireListAction } from "@/store/modules/entire/createActions";

const EntirePagination = memo((props) => {
  const { totalCount, currentPage, entireList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,

      entireList: state.entire.entireList,
    }),
    shallowEqual
  );

  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  const countNum = Math.ceil(totalCount / 20);

  const dispatch = useDispatch();
  const paginationClick = (e, pageCount) => {
    dispatch(fetchEntireListAction(pageCount - 1));
  };

  return (
    <PaginationWrapper>
      {!!entireList.length && (
        <div className="info">
          <Pagination onChange={paginationClick} count={countNum} />
          <div className="desc">
            第{startCount} - {endCount} 个房源，共 {totalCount} 个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default EntirePagination;
