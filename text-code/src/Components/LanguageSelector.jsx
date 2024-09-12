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

const LanguageSelector = () => {
  const Languages = Object.entries(LANGUAGES_VERSIONS);
  return (
    <Box>
      <Text mb={2} fontSize="large">
        Select Language:
      </Text>
      <Menu>
        <MenuButton as={Button}>Javascript</MenuButton>
        <MenuList>
          {Languages.map(([Language, version]) => (
            <MenuItem key={Language}>
              {Language}
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
