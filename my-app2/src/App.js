import React, { Suspense } from 'react';

// import A from './components/A';
// import B from './components/B';
import { getValue } from './utils';

import './App.css';

// 使用 React.lazy 动态导入组件
const A = React.lazy(() => import('./components/A'));
const B = React.lazy(() => import('./components/B'));

function App() {
  return (
    <div className="App">
      {/* <A /> */}
      {/* Suspense 用来包裹异步加载的组件，并可以提供加载时的回退界面 */}
      <Suspense fallback={<div>Loading...</div>}>
        <A />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <B />
      </Suspense>
      {/* <B /> */}
      <div>value is: {getValue()}</div>
    </div>
  );
}

export default App;
