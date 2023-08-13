import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Documentation = () => {
    return (
        <Box boxSizing="border-box" >
            <Navbar />
            <Box display={"flex"}>
                <Sidebar/>
                <Box padding={'20px'}  >
                    <Outlet/>
                </Box>
            </Box>
        </Box>
    );
};

export default Documentation;
