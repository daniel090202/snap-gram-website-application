import { ReactNode } from "react";

interface HomePageProps {
  children?: ReactNode;
}

const HomePage: React.FC<HomePageProps> = () => {
  return <div>Home Page</div>;
};

export default HomePage;
