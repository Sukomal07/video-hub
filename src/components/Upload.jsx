import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
    return (
        <Container maxWidth={'container.xl'} h={'100vh'} p={'16'}>
        <VStack color={'gray.600'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'}/>
        <form >
            <HStack>
                <Input required type={'file'} css={{
                    '&::file-selector-button':{
                        border:'none',
                        cursor:"pointer",
                        backgroundColor:"white",
                        color:"gray",
                        width:"calc(100% + 36px)",
                        height:"100%",
                        marginLeft:"-18px"
                    }
                }}/>
                <Button type='submit' colorScheme={'purple'}>Upload</Button>
            </HStack>
        </form>
        </VStack>
        </Container>
    )
}

export default Upload
