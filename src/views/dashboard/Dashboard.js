import { arrayMoveImmutable } from "array-move";
import React, { useState } from "react";
import { SortableContainer } from "react-sortable-hoc";
import { DashboardFont } from "./Cashboard.styles.js";
import Fifth from "./components/Fifth.js";
import First from "./components/First.js";
import Fourth from "./components/Fourth.js";
import Second from "./components/Second.js";
import Third from "./components/Third.js";
import ComponentsLest from "./ComponentsLest.js";

const SortableList = SortableContainer(ComponentsLest);

const Dashboard = () => {
  const [fontSize, setFontSize] = useState(16);
  const [components, setComponents] = useState([
    First,
    Second,
    Third,
    Fourth,
    Fifth,
  ]);

  const onSortEnd = (e) => {
    var FirstSort = arrayMoveImmutable(components, e.oldIndex, e.newIndex);
    console.log(
      "🚀 ~ file: Dashboard.js ~ line 1 ~ onSortEnd ~  e.oldIndex",
      e.oldIndex,
      e.newIndex
    );

    if (e.oldIndex !== e.newIndex) {
      let newSort ;
      if (e.oldIndex < e.newIndex) {
        newSort = arrayMoveImmutable(
          FirstSort,
          e.newIndex - 1 > 0 ? e.newIndex - 1 : 0,
          e.oldIndex
        );
      }else{
        newSort = arrayMoveImmutable(
          FirstSort,
          e.newIndex + 1 < components.length ? e.newIndex + 1 : components.length,
          e.oldIndex
        );
      }
      

      setComponents(newSort);
    } else {
      setComponents(FirstSort);
    }
  };
  return (
    <>
      <DashboardFont fontSize={fontSize}>
        <input type="text" onChange={(e) => setFontSize(e.target.value)} />

        <SortableList items={components} onSortEnd={onSortEnd} />
      </DashboardFont>
    </>
  );
};

export default Dashboard;
