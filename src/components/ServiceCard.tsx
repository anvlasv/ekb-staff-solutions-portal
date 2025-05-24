
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  onClick: () => void;
}

const ServiceCard = ({ title, description, icon, features, onClick }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-auto"
        onClick={onClick}
      >
        Заказать
      </Button>
    </div>
  );
};

export default ServiceCard;
