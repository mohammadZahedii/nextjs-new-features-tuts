"use client";
import * as React from "react";
interface IDashboardTemplateProps {
  children: React.ReactNode;
}

const DashboardTemplate: React.FunctionComponent<IDashboardTemplateProps> = ({
  children,
}) => {
  return (
    <div className="template-container">
      <h4>Template</h4>
      {children}
    </div>
  );
};

export default DashboardTemplate;
