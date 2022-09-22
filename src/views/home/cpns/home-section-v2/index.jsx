import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import { SectionWrapped } from "./style";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { itemData, itemWidth } = props;
  const firstName = Object.keys(itemData?.dest_list)[0];
  const [name, setName] = useState(firstName);

  // NODE: callback优化
  const tabClick = useCallback((item, index) => {
    setName(item);
  }, []);

  const tabs = itemData.dest_address.map((item) => item.name);
  return (
    <SectionWrapped>
      <SectionHeader title={itemData?.title} subTitle={itemData?.subtitle} />
      <div className="tabs">
        <SectionTabs tabs={tabs} tabClick={tabClick} />
      </div>
      <SectionRooms list={itemData?.dest_list[name]} itemWidth={itemWidth} />
      <SectionFooter name={name} />
    </SectionWrapped>
  );
});

HomeSectionV2.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
};

export default HomeSectionV2;
