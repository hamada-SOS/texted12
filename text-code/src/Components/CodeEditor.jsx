import React, { useRef } from "react";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
const CodeEditor = () => {
  const [value, setvalue] = useState("");
  const editorRef = useRef();
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <Box>
      <Editor
        height="75vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        value={value}
        onMount={onMount}
        onChange={(value) => setvalue(value)}
      />
    </Box>
  );
};

export default CodeEditor;
