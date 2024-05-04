import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";
import { GiAutoRepair } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { IoTrendingUp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";


const navmenu = [
  {
    name: "Customer",
    path: "/",
    icon: <FaUserGroup size={20} />,
  },
  {
    name: "Request",
    path: "/",
    icon: <IoTicket size={20} />,
  },
  {
    name: "Repair Job",
    path: "/",
    message: 5,

    icon: <GiAutoRepair size={20} />,
  },
  {
    name: "Spare Part",
    path: "/",
    icon: <FaComputer size={20} />,
  },
  {
    name: "Job Management",
    path: "/",
    icon: <MdWork size={20} />,
  },
  {
    name: "Analytics",
    path: "/",
    icon: <IoTrendingUp size={20} />,
  },

];

export { navmenu };