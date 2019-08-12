import React from 'react';
import { Spin } from 'antd';

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default ({loading}) => (
  
  <div style={{ textAlign: 'center' }}>
    <Spin spinning={loading} delay={500} size="large" />
  </div>
);
