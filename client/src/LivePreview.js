import React from "react";

function LivePreview({ compiledCode }) {
  return (
    <div className="live-preview">
      <iframe
        title="Live Preview"
        srcDoc={`
          <html>
            <head>
              <style>
                body {
                  margin: 0;
                  border: 1px solid black;
                }
              </style>
            </head>
            <body>
              ${compiledCode}
            </body>
          </html>
        `}
        style={{
          backgroundColor: "white",
          width: "34%",
          height: "50%",
          border: "3px solid black",
          overflowWrap: "break-word",
          inlinesize: "150px",
        }}
      />
    </div>
  );
}

export default LivePreview;
