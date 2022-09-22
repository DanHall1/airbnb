import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionWrapped } from "./style";

import SectionHeader from "@/components/section-header";
import ScrollView from "@/base-ui/scroll-view";
import SectionItem from "@/components/section-item";
import SectionFooter from "@/components/section-footer";

const HomeSectionV3 = memo((props) => {
  const { itemData, itemWidth } = props;
  return (
    <SectionWrapped>
      <SectionHeader title={itemData?.title} subTitle={itemData?.subtitle} />
      <ScrollView>
        {itemData.list.map((item) => {
         return <SectionItem key={item.id} item={item} itemWidth={itemWidth} />;
        })}
      </ScrollView>
      <SectionFooter name="plus" />
    </SectionWrapped>
  );
});

HomeSectionV3.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
};

export default HomeSectionV3;
