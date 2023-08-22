import React, { useState, createContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Box, Text , Button } from '@chakra-ui/react'

const Sidebar = (props) => {
  const sideBar = createContext();
  const [openSidebar , setSidebarOpen] = useState(false);

  const openSidebarHandler = () => {
    setSidebarOpen(!openSidebar)
  }
    return (
        <div>
          <Button bgColor={'blackAlpha.50'} textColor={'blackAlpha.700'}  onClick={openSidebarHandler} margin={5} fontSize={'sm'} fontWeight={'light'} px={10}  >{ !openSidebar ? 'Doc Links' : 'Close Links' }</Button>
            {openSidebar && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: openSidebar ? '0%' : '-100%' }}
                exit={{ x: '-100%' }} // Add this line for smooth exit animation
                transition={{ type: 'tween', duration: 0.3 }} // Add a transition for smoother animation
              >
                <Box {...props}  width={80} height={'100vh'} px={12} py={3} fontSize={'sm'} >
                    <Box>
                        <Text fontWeight={'semibold'} letterSpacing={'wide'} >Introduction</Text>
                        <Box mt={3} display={'flex'} flexDirection={'column'} gap={'3'} textColor={'gray.500'} >
                            <Link to={"accordion"}> Installation </Link>
                            <Link to={"modal"}> Theming </Link>
                            <Link to={"dialog"}> Typography </Link>
                            <Link to={"button"}> About </Link>
                        </Box>
                    </Box>
                    <Box mt={7} >
                        <Text fontWeight={'semibold'} letterSpacing={'wide'} >Components</Text>
                        <Box mt={3} display={'flex'} flexDirection={'column'} gap={'3'} textColor={'gray.500'} >
                            <Link to={"accordion"}> Accordion </Link>
                            <Link to={"modal"}> Modal </Link>
                            <Link to={"dialog"}> Dialog </Link>
                            <Link to={"button"}> Button </Link>
                            <Link to={"aspect-ratio"} >Aspect Ratio</Link>
                            <Link to={"alert"}> Alert </Link>
                            <Link to={"drawer"}> Drawer </Link>
                            <Link to={"popup"}> Popup </Link>
                            <Link to={"badge"}> Badge </Link>
                            <Link to={"checkbox"} >Checkbox</Link>
                            <Link to={"dropdown"} >Dropdown</Link>
                            <Link to={"form"} >Form</Link>
                            <Link to={"radio-group"} >Radio Group</Link>
                            <Link to={"text-area"} >Text Area</Link>
                        </Box>
                    </Box>
                </Box>
              </motion.div>
            )}
        </div>
    )
}

export default Sidebar
