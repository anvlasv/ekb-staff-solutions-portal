
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Алексей Михайлов",
      company: "ООО «УралСтрой»",
      rating: 5,
      text: "Отличная компания! Быстро предоставили команду разнорабочих для нашего строительного объекта. Ребята работящие, исполнительные. Рекомендую!",
      service: "Разнорабочие"
    },
    {
      name: "Елена Васильева",
      company: "ТД «Уральский»",
      rating: 5,
      text: "Пользуемся услугами уже полгода. Грузчики всегда приходят вовремя, работают аккуратно. Очень довольны сотрудничеством!",
      service: "Грузчики"
    },
    {
      name: "Дмитрий Козлов",
      company: "Логистический центр «Восток»",
      rating: 5,
      text: "Нужны были упаковщики на пиковый сезон. Персонал предоставили за сутки, все оформлено по закону. Экономия на налогах ощутимая.",
      service: "Упаковщики"
    },
    {
      name: "Ирина Сидорова",
      company: "Производство «Металлург»",
      rating: 5,
      text: "Клининговая команда работает у нас на постоянной основе. Всегда чистота и порядок. Спасибо за профессионализм!",
      service: "Клининг"
    },
    {
      name: "Сергей Петров",
      company: "Склад «Мега»",
      rating: 5,
      text: "Сортировщики помогли навести порядок на складе за рекордное время. Четкая работа, никаких нареканий. Будем обращаться еще!",
      service: "Сортировщики"
    },
    {
      name: "Анна Федорова",
      company: "Завод «Прогресс»",
      rating: 5,
      text: "Аутстаффинг - отличное решение для нашего предприятия. Избавились от кадровой головной боли, сосредоточились на основном бизнесе.",
      service: "Аутстаффинг"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 200 довольных клиентов доверяют нам свои кадровые потребности
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {testimonial.service}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t pt-4 mt-auto">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
              Присоединяйтесь к довольным клиентам!
            </h3>
            <p className="text-blue-700 mb-6">
              Средняя оценка наших услуг: <span className="font-bold text-2xl">4.9/5</span>
            </p>
            <div className="flex justify-center items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-blue-700 font-semibold">из 200+ отзывов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
