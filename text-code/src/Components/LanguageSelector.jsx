import {
  Box,
  Text,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  Button,
} from "@chakra-ui/react";
import { LANGUAGES_VERSIONS } from "../constants";
import { color } from "framer-motion";

const ACTIVE_COLOR = "blue.400";
const LanguageSelector = ({ language, onSelect }) => {
  const Languages = Object.entries(LANGUAGES_VERSIONS);
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="large">
        Select Language:
      </Text>
      <Menu isLazy>
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList bg={"#110c1b"}>
          {Languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : ""}
              bg={lang === language ? "gary.900" : ""}
              _hover={{
                color: ACTIVE_COLOR,
                bg: "gray.900",
              }}
              onClick={() => onSelect(lang)}
            >
              {lang}
              &nbsp;
              <Text as="span" fontSize="sm" color="gray.500">
                {version}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
