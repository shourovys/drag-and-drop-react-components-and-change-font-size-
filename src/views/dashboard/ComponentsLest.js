import React from "react";
import { SortableElement } from "react-sortable-hoc";

const ComponentCon = ({ Component }) => {
  return (
    <div>
      <Component />
    </div>
  );
};

const SortableItem = SortableElement(ComponentCon);

const ComponentsLest = ({ items }) => {
  return (
    <div>
      {items.map((x, i) => {
        return <SortableItem Component={x} index={i} key={x} />;
      })}
    </div>
  );
};

export default ComponentsLest;
