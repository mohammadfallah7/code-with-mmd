import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto px-3">{children}</div>;
};

export default Container;
