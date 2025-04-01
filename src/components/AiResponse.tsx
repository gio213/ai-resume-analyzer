"use client";
import { aiAnalyzePdf } from "@/actions/ai.action";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2, FileText, CheckCircle, AlertCircle } from "lucide-react";

interface AiResponseProps {
  pdfText: string;
}

const AiResponse = ({ pdfText }: AiResponseProps) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleResponse = async () => {
    try {
      setLoading(true);
      const response = await aiAnalyzePdf(pdfText);
      if (response.success) {
        setResponse(response.message);
      } else {
        setResponse("Error: " + response.message);
      }
    } catch (error) {
      setResponse("An unexpected error occurred while analyzing the resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="gap-2 hover:cursor-pointer"
          onClick={() => {
            setOpen(true);
            if (!response) handleResponse();
          }}
        >
          <FileText className="w-4 h-4 " />
          Analyze Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
                Analyzing Resume...
              </>
            ) : response?.startsWith("Error") ? (
              <>
                <AlertCircle className="w-5 h-5 text-red-500" />
                Analysis Failed
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5 text-green-500" />
                Resume Analysis
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            AI-powered analysis for ATS compatibility and resume highlights
          </DialogDescription>
        </DialogHeader>

        <div className="max-h-96 overflow-y-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-8">
              <Loader2 className="w-10 h-10 animate-spin text-blue-500 mb-4" />
              <p className="text-muted-foreground">
                Analyzing your resume for ATS compatibility...
              </p>
            </div>
          ) : (
            <div className="whitespace-pre-wrap">
              {response ? (
                <div className="prose max-w-none">
                  {response.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground italic">
                  No analysis available
                </p>
              )}
            </div>
          )}
        </div>

        <DialogFooter>
          {!loading && (
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          )}
          {!loading && response && (
            <Button
              variant="default"
              onClick={handleResponse}
              className="gap-2 cursor-pointer"
            >
              Analyze Again
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AiResponse;
