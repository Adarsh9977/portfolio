import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="text-4xl p-4 rounded-2xl relative text-white font-semibold capitalize mb-8 text-center">{children}</h2>;
}