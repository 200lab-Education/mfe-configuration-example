import React, { Suspense } from 'react';
const RemoteApp = React.lazy(() => import('components/app'));
console.log('🚀 ~ file: app.tsx:3 ~ RemoteApp', Promise.resolve(RemoteApp));

const App = () => {
  return (
    <div>
      <h1>React MF2</h1>
      <Suspense fallback={<div> Loading</div>}>
        <RemoteApp name={'hhihi'}/>
      </Suspense>
    </div>
  );
};

export default App;
