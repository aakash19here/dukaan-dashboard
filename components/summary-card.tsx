import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface SummaryCardProps {
  title: string;
  content: string;
}

export function SummaryCard({ title, content }: SummaryCardProps) {
  return (
    <Card className="w-1/2 border-none shadow-sm">
      <CardHeader>
        <CardTitle className="font-normal text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold">₹{content}</p>
      </CardContent>
    </Card>
  );
}
