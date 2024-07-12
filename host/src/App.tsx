import React from "react";

const RemoteApp = React.lazy(() => import("remoteApp/App"));

const App: React.FC = () => {

  return (
    <div>
      <React.Suspense fallback={null}>
        <RemoteApp basepath="/remoteApp"/>
      </React.Suspense>
    </div>
    
  );
};

export default App;
