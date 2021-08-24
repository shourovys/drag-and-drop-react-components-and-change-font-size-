import React, { lazy } from "react";
const WidgetsDropdown = lazy(() => import("../../widgets/WidgetsDropdown.js"));

const First = () => {
  return <WidgetsDropdown />;
};

export default First;
