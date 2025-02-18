import { Heading, Img } from "./..";
import React from "react";
import { Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  return (
    <Sidebar
      {...props}
      width="216px !important"
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 6 } }}
      className={`${props.className} flex flex-col h-screen gap-1.5 top-0 !sticky overflow-auto md:hidden`}
    >
      <Img
        src="images/img_uuid_8da7836a_2_red_700.png"
        alt="Uuid8da7836atwo"
        className="mr-3 h-[28px] w-[30%] object-contain"
      />
      <div className="flex justify-end self-stretch px-2.5">
        <Heading size="heading9xl" as="h4" className="!font-montserrat text-[25.98px] font-extrabold !text-red-a700_01">
          <span className="text-secondary-primary_white">lbl_lbl_b</span>
          <span className="text-red-a700_03">lbl_lbl_m</span>
          <span className="text-secondary-primary_white">lbl_lbl_c</span>
        </Heading>
      </div>
    </Sidebar>
  );
}
