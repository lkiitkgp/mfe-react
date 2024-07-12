import React from "react";
import "./index.css";
import "tailwindcss/tailwind.css";

const RemoteApp = React.lazy(() => import("remoteApp/App"));

const App: React.FC = () => {
  return (
    <div>
      <React.Suspense fallback={null}>
        <RemoteApp basepath="/remoteApp" />
      </React.Suspense>
    </div>
  );
};

export default App;
