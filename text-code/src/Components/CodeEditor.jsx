import React from 'react'
import { Box } from '@chakra-ui/react'
import { Editor } from '@monaco-editor/react'
const CodeEditor = () => {
  return (
    <Box>
        <Editor
         height="90vh"
         theme='vs-dark'
         defaultLanguage="javascript" 
         defaultValue="// some comment"
        />
    </Box>
  )
}

export default CodeEditor