import ScrollView from "@/base-ui/scroll-view";
import LongForItem from "@/components/longfor-item";
import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongForWrapper } from "./style";

const LongFor = memo((props) => {
  const { itemData } = props;
  return (
    <LongForWrapper>
      <SectionHeader title={itemData?.title} subTitle={itemData?.subtitle} />
      <ScrollView>
        {itemData.list.map((item) => (
          <LongForItem key={item.city} itemData={item} />
        ))}
      </ScrollView>
    </LongForWrapper>
  );
});

LongFor.propTypes = {
  itemData: PropTypes.object,
};

export default LongFor;
