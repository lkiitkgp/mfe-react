import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes/routes";
import Sidebar from "./components/Sidebar";
import "./index.css";
import "tailwindcss/tailwind.css";

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
    <div className="min-h-screen flex">
      <BrowserRouter>
        <div className="flex flex-row w-full">
          <div className="w-1/5 bg-gray-800 text-white p-4">
            <Sidebar basepath={basepath} />
          </div>
          <div className="w-4/5 p-4">
            <Routes>
              {routes.map((route: RouteType, index: number) => (
                <Route
                  key={index}
                  path={basepath + route.path}
                  element={route.element}
                />
              ))}
            </Routes>
            <div>
              <div className="mt-4 p-4 bg-green-400 shadow-md">
                This is in remote app with in-built tailwindcss utilites.
              </div>
              <div className="mt-4 p-4 bg-header-logo-secondary shadow-md">
                This is in remote app with custom tailwindcss utilites from
                host.
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
