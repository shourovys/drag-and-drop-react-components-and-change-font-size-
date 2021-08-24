import React, { lazy } from 'react';
const WidgetsBrand = lazy(() => import('../../widgets/WidgetsBrand.js'))

const Third = () => <WidgetsBrand withCharts/>

export default Third;