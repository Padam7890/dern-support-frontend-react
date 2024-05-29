import React from "react";
import CartDatastats from"../../Components/CartDatastats"
import { FaTicketAlt } from "react-icons/fa";
import useDashboard from "../../CustomHooks/dashboard";
import { GiAutoRepair } from "react-icons/gi";

const Index = () => {

  const { dashboardList, setdashboardList, isLoading, error, fetchDashboardLists } =  useDashboard();

  console.log(dashboardList);



  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">

         <CartDatastats
         title={`Quoatitions List`}
         total={dashboardList.quoatitionsList}
         >
          <div>
          <FaTicketAlt color="green" size={20} />
          </div>
         </CartDatastats>

         <CartDatastats
         title={`Repair List`}
         total={dashboardList.repairList}
         >
          <div>
          <GiAutoRepair color="green" size={20} />
          </div>
         </CartDatastats>



      </div>
    </div>
  );
};

export default Index;
