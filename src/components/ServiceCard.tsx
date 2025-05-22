
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
  ctaText?: string;
  onClick?: () => void;
};

const ServiceCard = ({
  title,
  description,
  icon,
  features = [],
  ctaText = "Заказать",
  onClick,
}: ServiceCardProps) => {
  return (
    <Card className="h-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="w-16 h-16 bg-brand-50 rounded-lg flex items-center justify-center mb-4 text-brand-700">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={onClick} className="w-full">
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
