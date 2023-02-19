import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'
const headingOptions ={
    pos:"absolute",
    left:'50%',
    top:['70%','75%'],
    transform:'translate(-50%, 50%)',
    textTransform:'uppercase',
    p:'4',
    size:['md','2xl'],
    w:'100%'
    
}
const Home = () => {
    return (
        <Box >
        <MyCarousel />
        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
        Services
        </Heading>
        <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column', 'row']}>
        <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg'}/>
        <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit accusamus commodi nisi necessitatibus doloremque repudiandae odio, non quisquam maiores voluptatibus ullam recusandae ut pariatur, itaque natus ipsam adipisci iste.
        Sint necessitatibus quibusdam quis, placeat dicta nemo minus aliquid pariatur vitae illum velit, non sit repellat harum eveniet voluptatum assumenda quas aut sapiente itaque quidem totam. Assumenda impedit quod cumque?
        Vel illum itaque maxime quos, provident incidunt necessitatibus laboriosam sit assumenda ex, qui inventore. Veritatis alias soluta nemo error eius. Consequatur obcaecati excepturi et laudantium sint, repellat molestias vel odio.
        Earum aut quod necessitatibus nemo fugiat beatae, asperiores ipsam aliquid vero. Neque, sequi dicta. Officia, labore perspiciatis provident nesciunt vel nemo ullam? Aliquam deleniti adipisci facilis laborum magni dolor aperiam.
        Ad, nesciunt. Nihil ipsa sint aliquid illum nobis, esse, officiis repudiandae, modi accusantium perspiciatis repellendus molestiae dolor harum? Ipsa facere perspiciatis dolore optio! Recusandae illum nulla odit quo eius laborum.
        </Text>
        </Stack>
        </Container>
        </Box>
    )
}
const MyCarousel = ()=>{
    return(
    <Carousel autoPlay infiniteLoop interval={3000} showArrows={false} showStatus={false} showThumbs={false} >
    <Box w="full" h={['50vh','100vh']}>
    <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch The Future</Heading>
    </Box>
    <Box w="full" h={['50vh','100vh']} >
    <Image src={img2}  h="full" w={'full'} objectFit={'cover'} />
    <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Gaming is Future</Heading>
    </Box>
    <Box w="full" h={['50vh','100vh']}>
    <Image src={img3} h="full" w={'full'} objectFit={'cover'}  />
    <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Gaming on Console</Heading>
    </Box>
    <Box w="full" h={['50vh','100vh']}> 
    <Image src={img4} h="full" w={'full'} objectFit={'cover'}  />
    <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Get Set Ready</Heading>
    </Box>
    </Carousel>
    )
}

export default Home
