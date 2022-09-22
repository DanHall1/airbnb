import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionWrapped } from "./style";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const HomeSectionV1 = memo((props) => {
  const { itemData } = props;
  return (
    <SectionWrapped>
      <SectionHeader 
      title={itemData?.title} 
      subTitle={itemData?.subtitle} />
      <SectionRooms list={itemData?.list} />
    </SectionWrapped>
  );
});

HomeSectionV1.propTypes = {
  itemData: PropTypes.object,
};

export default HomeSectionV1;
