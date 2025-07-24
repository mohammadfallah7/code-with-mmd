import { ReactNode } from "react";
import DashboardMenu from "./_components/dashboard-menu";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-8">
      <DashboardMenu />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
