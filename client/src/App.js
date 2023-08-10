import { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";

import "ace-builds/src-noconflict/theme-monokai";

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";

function App() {
  const [code, setCode] = useState(`function hello() {
  console.log("Hello World!");
}`);

  return (
    <AceEditor
      style={{
        height: "100vh",
        width: "100%",
      }}
      placeholder="Start Coding"
      mode="javascript"
      theme="monokai"
      name="basic-code-editor"
      onChange={(currentCode) => setCode(currentCode)}
      fontSize={18}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={code}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 4,
      }}
    />
  );
}

export default App;
