"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const InputComponent = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (file) {
      console.log("File uploaded:", file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Input
        onChange={(event) => setFile(event.target.files?.[0] || null)}
        type="file"
        className="w-full"
        placeholder="Upload resume, PDF"
        id="resume"
      />
      <Button onClick={handleUpload} className="text-muted w-full">
        Upload
      </Button>
    </div>
  );
};

export default InputComponent;
