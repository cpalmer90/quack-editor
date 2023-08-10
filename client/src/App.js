import React, { useState, useRef } from "react";
import AceEditor from "react-ace";
import LivePreview from "./LivePreview";
import * as Babel from "@babel/standalone";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";
import "ace-builds/src-noconflict/mode-html";

function App() {
  const [value, setValue] = useState("");
  const [compiledCode, setCompiledCode] = useState("");
  const aceEditorRef = useRef(null);

  const onEditorChange = (newValue) => {
    setValue(newValue);

    try {
      const compiled = Babel.transform(newValue, {
        presets: ["env", "react"],
      }).code;
      setCompiledCode(compiled);
    } catch (error) {
      setCompiledCode(`/* Compilation error: ${error.message} */`);
    }
  };

  const onPaste = (event) => {
    setValue(event.text);
  };

  return (
    <div className="App">
      <div className="flex-split">
        <div className="flex-split-left">
          <AceEditor
            mode="javascript"
            theme="monokai"
            ref={aceEditorRef}
            onChange={onEditorChange}
            onPaste={onPaste}
            fontSize={14}
            showPrintMargin={true}
            focus={true}
            editorProps={{ $blockScrolling: true }}
            wrapEnabled={true}
            highlightActiveLine={true}
            autoScrollEditorIntoView={true}
            value={value}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
              showGutter: true,
            }}
          />
        </div>

        <div className="flex-split-right">
          <LivePreview compiledCode={compiledCode} />{" "}
          {/* Render the LivePreview component */}
        </div>
      </div>
    </div>
  );
}

export default App;
