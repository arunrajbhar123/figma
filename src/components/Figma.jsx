import React, { ReactNode } from "react";
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Stack,
  Switch,
  Avatar,Progress,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";

import { IconType } from "react-icons";
import { ReactText } from "react";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { icon: FiHome },
  { icon: FiTrendingUp },
  { icon: FiCompass },
  { icon: FiStar },
  { icon: FiSettings },
];

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

const {status,handletheme}=useContext(ThemeContext)


  return (
    // bg={useColorModeValue("black", "black")}
    <Box minH="100vh" className={status ? "light-Mode" : "dark-Mode"} >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Box marginLeft="9em" w="40%" maxW="45%" p={4}>
        <Flex>
          <Text fontSize="6xl">My Dashboard</Text>
          <Stack marginLeft="18em" align="center" direction="row" >
            <h1>{status ? "Swtich To Dark" : "Switch To Light"}</h1>
            <Switch size="lg" onChange={handletheme} />

          </Stack>
       
        </Flex>
      </Box>
      <Box bg="tomato"  marginLeft="9.1em" w="40%" p={4} color="white">
        <Box>
          <Box style={{ display: "flex",padding:"8px", justifyContent:"space-between" }}>
            <Text>Active Users</Text>
            <span>
              fro <b>August 2020</b>
            </span>
          </Box>
        </Box>
        <div style={{ display: "flex" }}>
          <Avatar
            size="xl"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            marginBottom="15px"
          />
          <div >
          <h1>Nrupul Dev</h1>
          <span>Banglore, India</span>
          </div>

        </div>  
  <Progress colorScheme='green' size='sm' value={87} />
      </Box>

      <Box bg="tomato"  marginLeft="9.1em" w="40%" p={4} color="white">
        <Box>
          <Box style={{ display: "flex",padding:"8px", justifyContent:"space-between" }}>
            <Text>Active Users</Text>
            <span>
              fro <b>August 2020</b>
            </span>
          </Box>
        </Box>
        <div style={{ display: "flex" }}>
          <Avatar
            size="xl"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            marginBottom="15px"
          />
          <div>
          <h1>Nrupul Dev</h1>
          <span>Banglore, India</span>
          </div>

        </div>   
  <Progress colorScheme='green' size='sm' value={87} />
  <div style={{ display: "flex",padding:"8px", justifyContent:"space-between" }}> 
    <h1>
      Professional Level 15
    </h1>
    <h1>
      4723 Points
    </h1>
  </div>
      </Box>
      <Box bg="tomato"  marginLeft="9.1em" w="40%" p={4} color="white">
        <Box>
          <Box style={{ display: "flex",padding:"8px", justifyContent:"space-between" }}>
            <Text>Active Users</Text>
            <span>
              fro <b>August 2020</b>
            </span>
          </Box>
        </Box>
        <div style={{ display: "flex" }}>
          <Avatar
            size="xl"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            marginBottom="15px"
          />
          <div >
          <h1>Nrupul Dev</h1>
          <span>Banglore, India</span>
          </div>

        </div>   
  <Progress colorScheme='green' size='sm' value={45} />
  <div style={{ display: "flex",padding:"8px", justifyContent:"space-between" }}> 
    <h1>
      Professional Level 15
    </h1>
    <h1>
      4723 Points
    </h1>
  </div>
      </Box>


      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const {status,handletheme}=useContext(ThemeContext)
  return (
    <Box className={status ? "light-Mode" : "dark-Mode"}
 
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", gl: 20 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20"  alignItems="center" mx="8" justifyContent="space-between">
        <Text  fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.icon}
          p="8"
          icon={link.icon}
          display="flex"
          justifyContent="center"
        ></NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="
            32"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
