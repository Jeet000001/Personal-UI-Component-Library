import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const CustomAlart = () => {
  const [show, setShow] = useState("component"); // preview ya code
  const [copied, setCopied] = useState(false);

  // 👇 ye hamara alert demo component hai
  const MyComponent = () => {
    const [showAlert, setShowAlert] = useState(false);

    return (
      <div className="p-6 max-w-md mx-auto space-y-4">
        {/* Alert button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowAlert(true)}
            className="px-4 py-2 mt-10 bg-gray-100 hover:bg-gray-200 rounded"
          >
            Alert
          </button>
        </div>

        {/* Alert box */}
        {showAlert && (
          <div className="flex justify-between items-center p-3 rounded bg-gray-200">
            <span>⚠ Custom Alert Triggered!</span>
            <button
              onClick={() => setShowAlert(false)}
              className="ml-4 font-bold text-lg"
            >
              ×
            </button>
          </div>
        )}
      </div>
    );
  };

  // 👇 ye wahi code snippet h jo copy hone wala hai
  const componentCode = `
import React, { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <div className="flex justify-center">
        <button
          onClick={() => setShowAlert(true)}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded"
        >
          Alert
        </button>
      </div>

      {showAlert && (
        <div className="flex justify-between items-center p-3 rounded bg-gray-200">
          <span>⚠ Custom Alert Triggered!</span>
          <button
            onClick={() => setShowAlert(false)}
            className="ml-4 font-bold text-lg"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
  `;

  // 👇 copy button ka logic
  const handleCopy = () => {
    navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      {/* Top buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setShow("component")}
          className="px-4 py-2 hover:bg-gray-100 rounded-lg shadow"
        >
          Preview
        </button>

        <button
          onClick={() => setShow("code")}
          className="px-4 py-2 hover:bg-gray-100 rounded-lg shadow"
        >
          Code
        </button>
      </div>

      {/* Preview ya Code */}
      <div className="w-full mt-4">
        {show === "component" ? (
          <MyComponent />
        ) : (
          <div className="overflow-y-auto pl-6 max-h-78 w-full">
            <div className="rounded-xl relative">
              <pre className="px-5 py-3 text-xs overflow-x-auto">
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                  customStyle={{ background: "transparent" }}
                >
                  {componentCode}
                </SyntaxHighlighter>
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 px-3 py-2 hover:bg-gray-200 rounded-md"
              >
                {copied ? <TiTick /> : <FaRegCopy />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomAlart;
