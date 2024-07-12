import React from "react";
import routes from '../routes/routes';
import { Link } from "react-router-dom";

interface Route {
  path: string;
}

interface SidebarProps {
  basepath: string;
}

const Sidebar: React.FC<SidebarProps> = ({ basepath }) => {
  return (
    <div>
      <h2>Remote SideBar</h2>
      <nav>
        <ul>
          {routes.map((route: Route, index: number) => (
            <li key={index}>
              <Link to={basepath + route.path}>{basepath + route.path}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
