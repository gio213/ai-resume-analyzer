import CardComponent from "@/components/Card";
import InputComponent from "@/components/InputComponent";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <CardComponent
        cardClassName="w-96"
        contentClassName="flex flex-col items-center justify-center gap-4 "
        descriptionClassName="text-center"
        footerClassName="text-center"
        titleClassName="text-center"
        content={<InputComponent />}
        description="Upload your resume in PDF format"
        footer="Click the button to upload"
        title="Upload your resume"
      />
    </div>
  );
}
