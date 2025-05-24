
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const scrollToRequest = () => {
    const element = document.getElementById("request-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pricingPlans = [
    {
      title: "Разнорабочие",
      price: "от 200",
      period: "час",
      description: "Универсальный персонал для различных задач",
      features: [
        "Погрузочно-разгрузочные работы",
        "Уборка территории",
        "Подсобные работы",
        "Складские операции"
      ],
      popular: false
    },
    {
      title: "Грузчики",
      price: "от 250",
      period: "час",
      description: "Профессиональные грузчики",
      features: [
        "Погрузка/разгрузка транспорта",
        "Перемещение грузов",
        "Такелажные работы",
        "Работа с крупногабаритными грузами"
      ],
      popular: true
    },
    {
      title: "Упаковщики",
      price: "от 180",
      period: "час",
      description: "Квалифицированные упаковщики",
      features: [
        "Упаковка товаров",
        "Маркировка продукции",
        "Сборка заказов",
        "Контроль качества"
      ],
      popular: false
    },
    {
      title: "Клининг",
      price: "от 220",
      period: "час",
      description: "Профессиональная уборка",
      features: [
        "Уборка офисов",
        "Клининг производства",
        "Послестроительная уборка",
        "Мойка окон"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Прозрачные цены на аренду персонала
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Честные цены без скрытых платежей. Экономьте до 30% на затратах на персонал
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                  Популярно
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-12' : ''} flex flex-col h-full`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-500 ml-2">₽/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-800 hover:bg-gray-900'
                  }`}
                  onClick={scrollToRequest}
                >
                  Заказать
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            * Окончательная стоимость зависит от объема работ, сроков и количества персонала
          </p>
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600"
            onClick={scrollToRequest}
          >
            Получить точный расчет
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
