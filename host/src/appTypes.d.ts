/// <reference types="react" />

declare module "remoteApp/RemoteSidebar" {
  import { ComponentType } from "react";
  interface RemoteSidebarProps {
    onSelect: (item: string) => void;
  }

  const RemoteSidebar: ComponentType<RemoteSidebarProps>;
  export default RemoteSidebar;
}

declare module "remoteApp/ReactComponentT" {
  import { ComponentType, ComponentType, ComponentType } from "react";

  interface ReactComponentTProps {
    value: number;
    onIncrement: () => void;
  }

  const ReactComponentT: ComponentType<ReactComponentTProps>;
  export default ReactComponentT;
}

declare module "reactApp/Item1" {
  const Item1: React.ComponentType;
  export default Item1;
}

declare module "remoteApp/App" {
  interface AppProps {
    basepath?: string;
  }
  const App: React.FC<AppProps>;
  export default App
}

declare module "remoteApp/Sidebar" {
  interface SidebarProps {
    basepath?: string;
  }
  const Sidebar: React.FC<SidebarProps>;
  export default Sidebar;
}