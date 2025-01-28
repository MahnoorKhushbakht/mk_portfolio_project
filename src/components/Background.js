import { Card, CardBody, Box, Image, Stack, Heading, Text, Link, ChakraProvider } from '@chakra-ui/react';
import gd from './images/gd.jpeg';
import amz from './images/amz.jpeg';
import wb from './images/project5.JPG';
import 'aos/dist/aos.css';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import HeadinStyleMD from './Styles/HeadingStyleMD';
import HeadinStyleSM from './Styles/HeadingStyleSM';
import LayoutStyle from './Styles/LayoutStyle';
import DividerStyle from './Styles/DividerStyle';

export default function Background() {
    const data = [
        { src: gd, alt: 'Graphic Design', heading: 'Graphic Design', url: 'https://github.com/MahnoorKhushbakht/GraphicDesign/tree/master', text: 'Researched and designed innovative brand development ideas, coordinated with clients to create targeted advertising content, designed social media graphics, logos, brochures, and labels using Adobe Illustrator/Photoshop, and created animations/videos with Adobe After Effects.' },
        { src: wb, alt: 'Website Development', heading: 'Website Development', url: 'https://github.com/MahnoorKhushbakht/pe_portfolio_website', text: 'Collaborated on web projects using Next.js and React.js, building responsive interfaces and robust backends with Next.js APIs and Express.js. Designed efficient database solutions with MongoDB, Prisma ORM, and Strapi CMS, streamlining data management while ensuring intuitive UI/UX designs and seamless functionality across devices.' },
        { src: amz, alt: 'Virtual Assistant', heading: 'Virtual Assistant', url: 'https://github.com/MahnoorKhushbakht/Virtual-Assistant-Portfolio', text: 'Researched 20+ products based on client KPIs, calculated profit margins, created SEO-optimized listings using Helium10 Scribbles, analyzed competitors, generated keyword reports with Helium10 Magnet/Jungle Scout, and crafted feasibility reports.' }
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
                <Box display="flex" justifyContent="center" alignItems='center' marginBottom='50px' flexDirection={{ base: 'column', sm: 'column', md: 'row' }} gap={4}>
                    {data.map((item, index) => (
                        <Box key={index} mx="auto" mb={{ base: '4', md: '0' }} ml={{ base: '2', md: '4' }} mr={{ base: '2', md: '4' }} width={{ base: '90%', md: '30%' }}>
                            <Card
                                width='100%'
                                height='100%'
                                backgroundColor="white"
                                boxShadow="xl"
                                borderRadius="lg"
                                _hover={{
                                    boxShadow: '2xl',
                                    transform: 'scale(1.05)',
                                    transition: 'all 0.3s ease-in-out',
                                    cursor: 'pointer'
                                }}
                                data-aos="fade-up"
                                data-aos-delay='50'
                                overflow="hidden"
                            >
                                <CardBody>
                                <Heading size="md" textTransform={'uppercase'} textAlign="center" sx={{ 
                                        fontSize:'14px', color: "#593ea3", fontFamily: 'Helvetica, Arial' }}>
                                        {item.heading}{' '}
                                        {/* <Link href={item.url} isExternal>
                                            <ExternalLinkIcon w={4} h={4} color="#593ea3" />
                                        </Link> */}
                                    </Heading>
                                    <Box mb={4} display="flex" justifyContent="center">
 
                                        {/* <Image
                                            src={item.src}
                                            alt={item.alt}
                                            borderRadius="10px"
                                            boxShadow= '0 4px 8px rgba(0, 0, 0,0.5)'
                                            width={'100%'}
                                            height={'200px'}

                                            objectFit="cover"
                                            // border="1px solid #593ea3"
                                        /> */}
                                    </Box>

                                    <Stack mt='4' spacing='2' textAlign="center" >
                                        <Text color="gray.600" fontSize="lg" fontFamily="Helvetica, Arial">
                                            {item.text}
                                        </Text>
                                        
                                    </Stack>
                                    <a
                                            href={item.url}
                                            textAlign="center" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: "#593ea3",
                                                fontFamily:"Helvetica, Arial",
                                                textDecoration: "none",
                                                textAlign: "center",
                                                display: "inline-flex",
                                                alignItems: "center",
                                            
                                                fontSize: "14px"
                                            }}
                                        >
                                            Learn More
                                            <svg
                                                style={{ width: "16px", height: "16px", marginLeft: "8px" }}
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                </CardBody>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </ChakraProvider>
        </LayoutStyle>
    );
}


// export default function Background() {
//   return (
//     <section style={{ padding: "24px"}}>
//       <div style={{ maxWidth: "1200px", margin: "auto", display: "flex", flexWrap: "wrap" }}>
//         {data.map((item, index) => (
//           <div key={index} style={{ flex: "1 1 33%", padding: "16px" }}>
//             <div style={{
//               backgroundColor: "#e0e0e0",
//               padding: "16px",
//               borderRadius: "8px",
//               textAlign: "center",
//               position: "relative"
//             }}>
//               <h2 style={{ fontSize: "14px", color: "#8a8a8a" }}>
//                 CATEGORY
//               </h2>
//               <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
//                 {item.heading}
//               </h1>
//               <p style={{ fontSize: "16px", color: "#666" }}>
//                 {item.text}
//               </p>
            //   <a 
            //     href={item.url} 
            //     target="_blank" 
            //     rel="noopener noreferrer" 
            //     style={{
            //       color: "#3b82f6",
            //       textDecoration: "none",
            //       display: "inline-flex",
            //       alignItems: "center"
            //     }}>
            //     Learn More
            //     <svg 
            //       style={{ width: "16px", height: "16px", marginLeft: "8px" }} 
            //       viewBox="0 0 24 24" 
            //       stroke="currentColor" 
            //       strokeWidth="2" 
            //       fill="none" 
            //       strokeLinecap="round" 
            //       strokeLinejoin="round">
            //       <path d="M5 12h14"></path>
            //       <path d="M12 5l7 7-7 7"></path>
            //     </svg>
            //   </a>
//               <div style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 position: "absolute",
//                 bottom: "0",
//                 left: "0",
//                 width: "100%",
//                 padding: "12px",
//                 backgroundColor: "#fff",
//                 borderRadius: "0 0 8px 8px"
//               }}>
//                 <span style={{
//                   color: "#8a8a8a",
//                   marginRight: "12px",
//                   fontSize: "14px",
//                   display: "flex",
//                   alignItems: "center"
//                 }}>
//                   <svg 
//                     style={{ width: "16px", height: "16px", marginRight: "4px" }} 
//                     stroke="currentColor" 
//                     strokeWidth="2" 
//                     fill="none" 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round" 
//                     viewBox="0 0 24 24">
//                     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                     <circle cx="12" cy="12" r="3"></circle>
//                   </svg>
//                   1.2K
//                 </span>
//                 <span style={{
//                   color: "#8a8a8a",
//                   fontSize: "14px",
//                   display: "flex",
//                   alignItems: "center"
//                 }}>
//                   <svg 
//                     style={{ width: "16px", height: "16px", marginRight: "4px" }} 
//                     stroke="currentColor" 
//                     strokeWidth="2" 
//                     fill="none" 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round" 
//                     viewBox="0 0 24 24">
//                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                   </svg>
//                   6
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
