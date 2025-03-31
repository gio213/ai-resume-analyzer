import { z } from "zod";

export const PdfSchema = z.object({
  pdf: z.instanceof(File).refine((file) => file.type === "application/pdf", {
    message: "File must be a PDF",
  }),
});

export type PdfType = z.infer<typeof PdfSchema>;
