import React from 'react'
import { Drawer, DrawerBody, DrawerHeader, DrawerContent, DrawerOverlay,DrawerCloseButton, Button, useDisclosure, VStack, HStack } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'
const Header = () => {

const {isOpen , onOpen , onClose} = useDisclosure()
    return (
    <>
    <Button zIndex={'overlay'} pos={'fixed'} top={'5'} left={'10'} colorScheme={'purple'} p={'0'} w={'10'} h={'10'} onClick={onOpen}>
        <BiMenuAltLeft size={'30'}/>
    </Button>
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
        <DrawerCloseButton marginTop={'3'}/>
        <DrawerHeader color={'tomato'} fontSize="2xl" fontFamily={'cursive'}>VIDEO HUB <DrawerBody>
        <VStack pos={'absolute'} top={'165'} spacing={'10'} alignItems={'flex-start'}>
        <Button onClick={onClose} variant={'ghost'} colorScheme={'facebook'} 
        fontSize="xl" >
        <Link to={'/'} >Home</Link>
        </Button>
        <Button onClick={onClose} variant={'ghost'} colorScheme={'facebook'} fontSize="xl">
        <Link to={'/videos'}>Videos</Link>
        </Button>
        <Button onClick={onClose} variant={'ghost'} colorScheme={'facebook'} fontSize="xl">
        <Link to={'/videos?category=free'}>Free Videos</Link>
        </Button>
        <Button onClick={onClose} variant={'ghost'} colorScheme={'facebook'} fontSize="xl" >
        <Link to={'/upload'}>Upload Videos</Link>
        </Button>
        </VStack>
        <HStack pos={'absolute'} left={'0'} bottom={'10'} w={'full'} justifyContent={'space-evenly'}>
        <Button onClick={onClose} variant={'outline'} colorScheme={'gray'}>
        <Link to={'/login'}>Log In</Link>
        </Button>
        <Button onClick={onClose} variant={'outline'} colorScheme={'gray'}>
        <Link to={'/signup'}>Sign Up</Link>
        </Button>
        </HStack>
        </DrawerBody>
        </DrawerHeader>
        </DrawerContent>
    </Drawer>
    </>
    )
}

export default Header
