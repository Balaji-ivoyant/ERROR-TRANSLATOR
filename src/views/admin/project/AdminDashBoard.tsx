import React from "react";
import "./AdmindashBoard.css";
import SideNavBar from "../../../components/sidebar/SideNavBar";
import Header from "../../../components/header/Header";
import StatisticsCard from "../../../components/statisticsCard/StatisticsCard";

const AdminDashBoard = () => {
  return (
    <div className="error-layout">
      <div className="header-content">
        <Header />

      </div>
      <div className="main-content">
          <SideNavBar />

      <StatisticsCard />

      </div>

    
    </div>
  );
};

export default AdminDashBoard;
