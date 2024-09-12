import { Box } from "@chakra-ui/react";
import CodeEditor from "./Components/CodeEditor";
import LanguageSelector from "./Components/LanguageSelector";

function App() {
  return (
    <Box minH="100vh" bg={"#0f0a19"} color={"gray.500"} px={6} py={8}>
      <LanguageSelector />
      <CodeEditor />
    </Box>
  );
}

export default App;
