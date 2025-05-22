
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

type StepCardProps = {
  number: number;
  title: string;
  description: string;
};

const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold mb-3">
          {number}
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default StepCard;
