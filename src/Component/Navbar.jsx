import React from "react";
import Box from "@mui/material/Box";
import { Employee } from "../Pages/Employee";

export const Navbar = () => {
  return (
    <Box
      sx={{
        bgcolor: "#E8F3D6",
        fontSize: "22px",
        boxShadow: 5,
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignItems: "center",
        Width: "100%",
        height: "14vh",
        marginBottom: "20px",
      }}
    >
      <Box>
        <img
          src="https://tericsoft.com/wp-content/uploads/2021/08/Web-Logo-371x90px-200x49.png"
          alt="tericsoft logo"
        ></img>
      </Box>
      <Box>
        <Employee />
      </Box>
    </Box>
  );
};
