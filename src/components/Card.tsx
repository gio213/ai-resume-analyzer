import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  title: string;
  description: string;
  content: React.ReactNode;
  footer: React.ReactNode;
  cardClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
}

const CardComponent = ({
  content,
  description,
  footer,
  title,
  cardClassName,
  contentClassName,
  descriptionClassName,
  footerClassName,
  titleClassName,
}: CardProps) => {
  return (
    <Card className={cardClassName}>
      <CardHeader>
        <CardTitle className={titleClassName}>{title}</CardTitle>
        <CardDescription className={descriptionClassName}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className={contentClassName}>{content}</CardContent>
      <CardFooter className={footerClassName}>{footer}</CardFooter>
    </Card>
  );
};

export default CardComponent;
