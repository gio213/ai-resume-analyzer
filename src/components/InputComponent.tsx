"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { extractTextFromPDF } from "@/lib/pdf/parsePdf";
import AiResponse from "./AiResponse";
import { Loader2 } from "lucide-react";

const InputComponent = () => {
  const [file, setFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [parsedText, setParsedText] = useState<string | null>(null);
  const [isParsing, setIsParsing] = useState(false);

  const handleUpload = async () => {
    if (file) {
      try {
        setIsParsing(true);
        const text = await extractTextFromPDF(file);
        setParsedText(text);
      } catch (error) {
        console.error("Error parsing PDF:", error);
        setErrorMessage(
          "Failed to extract text from PDF. Please try another file."
        );
      } finally {
        setIsParsing(false);
        setFile(null);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Input
        onChange={(event) => {
          setErrorMessage(null);
          setParsedText(null);
          const selectedFile = event.target.files?.[0];
          if (selectedFile) {
            setFile(selectedFile);
          }
          if (selectedFile && selectedFile.type !== "application/pdf") {
            setErrorMessage("Please upload a valid PDF file.");
          }
        }}
        type="file"
        className="w-full"
        placeholder="Upload resume, PDF"
        id="resume"
        accept=".pdf"
      />
      <Button
        onClick={handleUpload}
        className="w-full hover:cursor-pointer"
        disabled={!file || isParsing || !!errorMessage}
      >
        {isParsing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Parsing PDF
          </>
        ) : (
          "Upload & Parse PDF"
        )}
      </Button>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

      {parsedText && <AiResponse pdfText={parsedText} />}
    </div>
  );
};

export default InputComponent;
