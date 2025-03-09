import React from "react";
import AddElement from "./sidebar-tabs/add-element";
import Assets from "./sidebar-tabs/assets";
import EditableElements from "./sidebar-tabs/editable-elements";
import More from "./sidebar-tabs/more";
import SectionOrder from "./sidebar-tabs/section-order";
import Steps from "./sidebar-tabs/steps";
import Debug from "./sidebar-tabs/debug";
import ElementStyle from "./sidebar-tabs/element-style";

const TabContent = () => {
  return (
    <div className={"h-full"}>
      <Steps />
      <AddElement />
      <Assets />
      <EditableElements />
      <ElementStyle />
      <SectionOrder />
      <Debug />
      <More />
    </div>
  );
};
export default TabContent;
