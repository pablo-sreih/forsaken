import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Pending Posts",
    path: "/posts",
    icon: <BsIcons.BsFilePost />,
    cName: "nav-text",
  },
  {
    title: "Locations",
    path: "/locations",
    icon: <MdIcons.MdEditLocation />,
    cName: "nav-text",
  },
  {
    title: "Users",
    path: "/users",
    icon: <FaIcons.FaUsers />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <MdIcons.MdLogout />,
    cName: "nav-text",
  },
];
