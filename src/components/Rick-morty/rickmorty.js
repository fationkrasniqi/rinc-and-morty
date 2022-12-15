import {
    Container,
    Image,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
  } from "@chakra-ui/react";
  import './rick-morty.css'
  
  const TabsSection = () => {
    return (
      <Container maxW="container.lg" my={20}>
        <Tabs  variant="enclosed" colorScheme="teal" align="center">
          <TabList className="test" mb="1em">
            <Tab>
              <Text className="test3" color={""} fontSize={["16px", "26px"]} fontWeight="medium">
                Rick
              </Text>
            </Tab>
            <Tab>
              <Text className="test3" color={""} fontSize={["16px", "26px"]} fontWeight="medium">
                Morty
              </Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Container>
                <Image
                  maxH="374px"
                  src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-non-toxic-rick-sanchez-18.png"
                />
              </Container>
            </TabPanel>
            <TabPanel>
              <Container>
                <Image
                  maxH="374px"
                  src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-morty-projectacademy-medium-17.png"
                />
              </Container>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    );
  };
  
  export default TabsSection;