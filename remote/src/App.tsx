import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import routes from "./routes/routes";
import Sidebar from "./components/Sidebar";

// Define the shape of a route
interface RouteType {
  path: string;
  element: React.ReactElement;
}

// Define the props for the App component
interface AppProps {
  basepath?: string;
}

const App: React.FC<AppProps> = ({ basepath = "" }) => {
  return (
    <div>
    <BrowserRouter>
      <Sidebar basepath={basepath} />
      <Routes>
        {routes.map((route: RouteType, index: number) => (
          <Route key={index} path={basepath + route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>

    </div>
    
  );
};

export default App;
