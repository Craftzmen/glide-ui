import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <Box {...props} display={'flex'} width={'100%'} px={10} py={3.5} borderBottom={'1px'} borderColor={'gray.200'} backgroundColor={'white'} position={'sticky'} top={'0'} >
            <Link to='/' >
                <Text fontFamily={'sans-serif'} fontWeight={'bold'} fontSize={'lg'}  ><Box fontSize={'xl'} display={'inline'} >#</Box> glide/ui</Text>
            </Link>
        </Box>
    )
}

export default Navbar
