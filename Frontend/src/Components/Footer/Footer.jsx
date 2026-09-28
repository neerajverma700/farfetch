import { SimpleGrid, Box, Text, Flex, Spacer, Button } from "@chakra-ui/react";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { SiPinterest } from "react-icons/si";
import { TbBrandSnapchat } from "react-icons/tb";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
import { color } from "framer-motion";

const Footer = () => {
  return (
    <Box bg="black" color="white" p="10px">
      <SimpleGrid columns={[1, null, 4]} spacing="20px" w="95%" m="auto">
        <Box>
          <Text style={{ fontWeight: 'bold' }}>Customer Service</Text>
          <Text mt="5px">Contact us</Text>
          <Text mt="5px">FAQs</Text>
          <Text mt="5px">Orders and delivery</Text>
          <Text mt="5px">Returns and refunds</Text>
          <Text mt="5px">Payment and pricing</Text>
          <Text mt="5px">Cryptocurrency payments</Text>
          <Text mt="5px">Promotion terms and conditions</Text>
          <Text mt="5px">FARFETCH Customer Promise</Text>
        </Box>
        <Box>
          <Text style={{ fontWeight: 'bold' }}>About FARFETCH</Text>
          <Text mt="5px">About US</Text>
          <Text mt="5px">Investors</Text>
          <Text mt="5px">FARFETCH partner boutiques</Text>
          <Text mt="5px">Careers</Text>
          <Text mt="5px">FARFETCH App</Text>
          <Text mt="5px">Modern slavery statement</Text>
        </Box>
        <Box>
          <Text style={{ fontWeight: 'bold' }}>Discounts and membership</Text>
          <Text mt="5px">Affiliate program</Text>
          <Text mt="5px">FARFETCH membership</Text>
          <Text mt="5px">Student discount UNiDAYS</Text>
          <Text mt="5px">Youth discount</Text>
        </Box>
        <Box>
          <Text style={{ fontWeight: 'bold' }}>FOLLOW US</Text>
          <Flex mt="30px">
            <Box mr="20px">
              <AiFillInstagram size={"1.5em"} />
            </Box>
            <Box mr="20px">
              <AiFillFacebook size={"1.5em"} />
            </Box>
            <Box mr="20px">
              <SiPinterest size={"1.5em"} />
            </Box>
            <Box mr="20px">
              <AiOutlineTwitter size={"1.5em"} />
            </Box>
            <Box mr="20px">
              <TbBrandSnapchat size={"1.5em"} />
            </Box>
            <Box mr="20px">
              <IoLogoYoutube size={"1.5em"} />
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>
      <Text mt="40px" ml="40px">
      'FARFETCH' and the 'FARFETCH' logo are trade marks of FARFETCH UK Limited and are registered in numerous jurisdictions around the world.
      </Text>
      <Text ml="40px" mb="20px">
      © Copyright 2024 FARFETCH UK Limited. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
