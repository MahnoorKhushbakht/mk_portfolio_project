import { Card, CardBody, Box, Image, Stack, Heading, Text, Link, ChakraProvider } from '@chakra-ui/react';
import gd from './images/gd.jpeg';
import amz from './images/amz.jpeg';
import wb from './images/luckyShrub.JPG';
import 'aos/dist/aos.css';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import HeadinStyleMD from './Styles/HeadingStyleMD';
import HeadinStyleSM from './Styles/HeadingStyleSM';
import LayoutStyle from './Styles/LayoutStyle';
import DividerStyle from './Styles/DividerStyle';

export default function Background() {
    const data = [
        { src: gd, alt: 'Graphic Design', heading: 'Graphic Design', url: 'https://github.com/MahnoorKhushbakht/GraphicDesign/tree/master', text: 'Researched, Assisted and designed innovative ideas for brand development.' },
        { src: wb, alt: 'Website Development', heading: 'Website Development', url: 'https://github.com/MahnoorKhushbakht/pe_portfolio_website', text: 'I have accumulated valuable experience in crafting responsive and user-friendly web applications.' },
        { src: amz, alt: 'Virtual Assistant', heading: 'Virtual Assistant', url: 'https://github.com/MahnoorKhushbakht/Virtual-Assistant-Portfolio', text: 'Researched 20+ promising products as per KPIs set by the client.' }
    ];

    return (
        <LayoutStyle id='background'>
            <DividerStyle>
                <HeadinStyleMD>
                    Professional Experience
                </HeadinStyleMD>
                <HeadinStyleSM>
                    Proven track record in diverse professional roles.
                </HeadinStyleSM>
            </DividerStyle>
            <ChakraProvider>
                <Box display="flex" justifyContent="center" alignItems='center' marginBottom='50px' flexDirection={{ base: 'column', sm: 'column', md: 'row' }}>
                    {data.map((item, index) => (
                        <Box key={index} mx={{ base: 'auto', md: '4' }} mb={{ base: '4', md: '0' }} ml={{ base: '2', md: '4' }} mr={{ base: '2', md: '4' }}>
                            <Card width='100%' height='100%' border='1px solid white' backgroundColor="transparent" data-aos="fade-up" data-aos-delay='50'>
                                <CardBody>
                                    <Heading size="md" sx={{ color: 'white', fontFamily: 'Helvetica, Arial' }}>
                                        {item.heading}{' '}
                                        <Link href={item.url} isExternal>
                                            <ExternalLinkIcon w={4} h={4} color="white" />
                                        </Link>
                                    </Heading>
                                    <Stack mt='4' spacing='2'>
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            borderRadius='md'
                                            maxH='200px'
                                            width={index === 0 ? '300px' : 'auto'}
                                            marginLeft='auto'
                                            marginRight='auto'
                                            display='block'
                                        />
                                        <Text style={{ color: 'white', fontFamily: 'Helvetica, Arial' }}>
                                            {item.text}
                                        </Text>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </ChakraProvider>
        </LayoutStyle>
    );
}
