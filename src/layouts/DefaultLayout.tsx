import { Outlet } from "react-router-dom";

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = () => {
  return (
    <div className={"flex flex-col"}>
      <header></header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
