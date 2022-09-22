import PropTypes from "prop-types";
import React, { memo } from "react";
import SectionItem from "../section-item";
import { RoomsWrapped } from "./style";

const SectionRooms = memo((props) => {
  const { list, itemWidth } = props;
  const arr = list?.slice(0, 8);
  return (
    <RoomsWrapped>
      {arr?.map((item) => (
        <SectionItem key={item.id} item={item} itemWidth={itemWidth} />
      ))}
    </RoomsWrapped>
  );
});

SectionRooms.propTypes = {
  list: PropTypes.array,
  itemWidth: PropTypes.string,
};

export default SectionRooms;
