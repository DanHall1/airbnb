import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo((props) => {
  const [list, setList] = useState([]);
  const activeClick = (item) => {
    const newList = [...list];
    if (newList.includes(item)) {
      const index = newList.findIndex((data) => item === data);
      newList.splice(index, 1);
    } else {
      newList.push(item);
    }
    setList(newList);
  };

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <span
              className={classNames("item", { active: list.includes(item) })}
              key={item}
              onClick={(e) => activeClick(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
