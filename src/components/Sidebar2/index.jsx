import { Img, Heading, Text } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar2({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar
      {...props}
      width="202px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`${props.className} flex flex-col h-screen pt-7 top-0 sm:pt-4 bg-secondary-primary_white shadow-xs !sticky overflow-auto md:hidden`}
    >
      <div className="flex flex-col gap-6 self-stretch">
        <div className="flex flex-col gap-1">
          <div className="relative h-[58px] content-center">
            <div className="flex flex-1 justify-center p-4">
              <Heading size="heading5xl" as="h6" className="text-[18px] font-bold">
                ההצעות מחיר שלי
              </Heading>
            </div>
            <div className="absolute bottom-[19px] left-0 right-0 mx-auto h-[6px] w-[88%] border-b border-solid border-gray-200" />
          </div>
          <div className="relative ml-10 mr-12 h-[70px] rounded border border-solid border-gray-200 bg-secondary-primary_white px-3.5">
            <div className="absolute left-0 right-0 top-[0.39px] mx-auto flex flex-1 items-start justify-center gap-1">
              <Img src="images/img_sort.svg" alt="Sortoneone" className="mt-3.5 h-[26px]" />
              <Text size="text12xl" as="p" className="self-center text-[45.49px] font-light !text-red-a700_03">
                20
              </Text>
            </div>
            <Heading
              size="textxs"
              as="p"
              className="absolute bottom-[5.78px] left-0 right-0 mx-auto w-max !font-heebo text-[12.74px] font-medium"
            >
              הצעות חדשות
            </Heading>
          </div>
        </div>
        <Menu
          menuItemStyles={{
            button: {
              padding: "18px",
              borderColor: "transparent",
              borderStyle: "solid",
              flexDirection: "column",
              color: "#000000",
              fontWeight: 500,
              fontSize: "12.74px",
              [`&:hover, &.ps-active`]: { borderColor: "#e9e9e9", backgroundColor: "#ffffff !important" },
            },
          }}
          rootStyles={{ ["&>ul"]: { gap: "24px" } }}
          className="flex flex-col pl-10 pr-12 md:pr-5 sm:px-5"
        >
          <MenuItem
            icon={<Img src="images/img_sort_light_green_800_1.svg" alt="Sortthreeone" className="h-[26px] w-[24px]" />}
          >
            הצעות שאושרו
          </MenuItem>
          <MenuItem
            icon={<Img src="images/img_refresh_gray_600.svg" alt="Refreshoneone" className="h-[26px] w-[24px]" />}
          >
            הצעות שנדחו
          </MenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
}
