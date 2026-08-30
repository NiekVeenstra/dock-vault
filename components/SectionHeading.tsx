import { HarborDivider } from "@/components/HarborDivider";

type SectionHeadingProps = {
  title: string;
  className?: string;
};

export function SectionHeading({ title, className = "" }: SectionHeadingProps) {
  const classes = ["section-heading", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <p>{title}</p>
      <HarborDivider compact />
    </div>
  );
}
