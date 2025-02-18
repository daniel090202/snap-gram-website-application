import { ReactNode } from "react";

interface NotFoundPageProps {
  children?: ReactNode;
}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return <div>Not Found Page</div>;
};

export default NotFoundPage;
