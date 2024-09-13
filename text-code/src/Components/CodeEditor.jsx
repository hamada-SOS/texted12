import React, { useRef } from "react";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
const CodeEditor = () => {
  const [value, setvalue] = useState("");
  const editorRef = useRef();
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const [language, setlanguage] = useState("javascript");

  const onSelect = (language) => {
    setlanguage(language);
    setvalue(CODE_SNIPPETS[language]);
  };

  return (
    <Box>
      <LanguageSelector language={language} onSelect={onSelect} />
      <Editor
        height="75vh"
        theme="vs-dark"
        language={language}
        defaultValue={CODE_SNIPPETS[language]}
        value={value}
        onMount={onMount}
        onChange={(value) => setvalue(value)}
      />
    </Box>
  );
};

export default CodeEditor;
