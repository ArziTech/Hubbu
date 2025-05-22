"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

// @ts-expect-error i don't know why
import { HTMLToJSON, JSONToHTML } from "html-to-json-parser"; // ES6

const InputFile = () => {
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [generatedJson, setGeneratedJson] = useState<string | null>(null);
  const [generatedHTML, setGeneratedHTML] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = async (e) => {
      const content = e.target?.result as string;
      setFileContent(content);
      console.log(content);

      const json = await HTMLToJSON(content, true);

      setGeneratedJson(json);
      console.log(json);

      const html = await JSONToHTML(json);

      setGeneratedHTML(html);
    };

    reader.onerror = () => {
      console.error("Error reading file");
    };

    reader.readAsText(file);
  };
  return (
    <div className={"container mx-auto grid h-full place-content-center"}>
      <Input
        type="file"
        onChange={handleFileChange}
        accept=".html,.txt" // optional: filter jenis file
      />

      {fileContent && (
        <div className="mt-4 rounded border p-4">
          <h3 className="mb-2 font-bold">File Content:</h3>
          <pre className="whitespace-pre-wrap">{fileContent}</pre>
        </div>
      )}

      {generatedJson && (
        <div className="mt-4 rounded border p-4">
          <h3 className="mb-2 font-bold">File Content:</h3>
          <pre className="whitespace-pre-wrap">{generatedJson}</pre>
        </div>
      )}
      {generatedHTML && (
        <div className="mt-4 rounded border p-4">
          <h3 className="mb-2 font-bold">HTML from JSON Content:</h3>
          <pre className="whitespace-pre-wrap">{generatedHTML}</pre>
        </div>
      )}
      {generatedHTML && (
        <div className="mt-4 rounded border p-4">
          <div dangerouslySetInnerHTML={{ __html: generatedHTML }}></div>
        </div>
      )}
    </div>
  );
};
export default InputFile;
