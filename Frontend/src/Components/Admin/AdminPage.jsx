import {
  SimpleGrid,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import Login from "./Login";

function AdminPage() {
  return (
    <Box padding={"2% 5% 5% 5%"}>
      <Tabs>
        <TabList>
          <Tab>Signup</Tab>
          <Tab>Users Details</Tab>
          <Tab>Product Details</Tab>
        </TabList>

        <TabPanels textAlign="left" fontSize="18px">
          <TabPanel>
            <Login/>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 1, 3]} spacing="40px">
                user Details
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 1, 3]} spacing="40px">
                prouduct
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default AdminPage;
