import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Documentation = () => {
    return (
        <Box boxSizing="border-box" >
            <Box position={'sticky'} top={0} >
                <Navbar /> 
            </Box>
            <Box display={"flex"}>
                <Box>
                    <Sidebar/>
                </Box>
                <Box padding={'20px'}  >
                    <Outlet/>
                </Box>
            </Box>
        </Box>
    );
};

export default Documentation;
