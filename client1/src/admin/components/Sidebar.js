import DescriptionIcon from "@mui/icons-material/Description";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";

import {
  BodyLeft,
  BodyLeftIn,
  MyAccordion,
  MyLink,
  MyListItemButton,
} from "../styles";
export const Sidebar = ({ openSidebar }) => {
  return (
    <BodyLeft open={openSidebar}>
      <BodyLeftIn open={openSidebar}>
        <Typography variant="button" sx={{ paddingLeft: "16px" }}>
          Quản lý
        </Typography>
        {/* <List> */}
        <MyAccordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff40" }} />}
          >
            <DescriptionIcon />
            Khách hàng
          </AccordionSummary>
          <AccordionDetails>
            <MyLink to="/admin/client">
              <MyListItemButton>Danh sách khách hàng</MyListItemButton>
            </MyLink>
          </AccordionDetails>
        </MyAccordion>
        <MyAccordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff40" }} />}
          >
            <DescriptionIcon />
            Sản phẩm
          </AccordionSummary>
          <AccordionDetails>
            <MyLink to="/admin/addProduct">
              <MyListItemButton>Thêm sản phẩm</MyListItemButton>
            </MyLink>
            <MyLink to="/admin/product">
              <MyListItemButton>Danh sách sản phẩm</MyListItemButton>
            </MyLink>
          </AccordionDetails>
        </MyAccordion>
        <MyAccordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff40" }} />}
          >
            <DescriptionIcon />
            Danh mục
          </AccordionSummary>
          <AccordionDetails>
            <MyLink to="/admin/addCategory">
              <MyListItemButton>Thêm danh mục</MyListItemButton>
            </MyLink>
            <MyLink to="/admin/category">
              <MyListItemButton>Danh sách danh mục</MyListItemButton>
            </MyLink>
          </AccordionDetails>
        </MyAccordion>
      </BodyLeftIn>
    </BodyLeft>
  );
};
