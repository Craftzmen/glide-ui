import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'

const Sidebar = () => {
    return (
        <div>
            <Box width={80} height={"100vh"} px={20} py={10} fontSize={'sm'} >
                <Text fontWeight={'semibold'} >Components</Text>
                <Box mt={3} display={'flex'} flexDirection={'column'} gap={'3'} textColor={'gray.500'} >
                    <Link to={"accordion"}> Accordion </Link>
                    <Link to={"modal"}> Modal </Link>
                    <Link to={"dialog"}> Dialog </Link>
                    <Link to={"button"}> Button </Link>
                    <Link to={"alert"}> Alert </Link>
                    <Link to={"drawer"}> Drawer </Link>
                    <Link to={"popup"}> Popup </Link>
                    <Link to={"badge"}> Badge </Link>
                    <Link to="aspect-ratio" >Aspect Ratio</Link>
                    <Link to="checkbox" >Checkbox</Link>
                    <Link to="dropdown" >Dropdown</Link>
                    <Link to="form" >Form</Link>
                    <Link to="radio-group" >Radio Group</Link>
                    <Link to="text-area" >Text Area</Link>
                </Box>
            </Box>
        </div>
    )
}

export default Sidebar
