"use server";

import { aiClient } from "@/lib/ai/ai";

export const aiAnalyzePdf = async (pdfText: string) => {
  try {
    const response = await aiClient.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an AI resume analyzer. Analyze the given resume text, provide constructive feedback, and evaluate its ATS compatibility.",
        },
        { role: "user", content: pdfText },
      ],
    });
    if (!response.choices || response.choices.length === 0) {
      return {
        succes: false,
        message: "No response from AI",
      };
    }

    // Return the response data
    return {
      success: true,
      message: response.choices[0].message.content,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to analyze resume");
  }
};
