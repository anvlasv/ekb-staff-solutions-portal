import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ServiceCard from "@/components/ServiceCard";
import StepCard from "@/components/StepCard";
import FAQSection from "@/components/FAQSection";
import PrivacyModal from "@/components/PrivacyModal";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OrderModal from "@/components/OrderModal";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Users, Clock, Shield, Award } from "lucide-react";
import ContactButtons from "@/components/ContactButtons";

const Index = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [privacyPolicyModalOpen, setPrivacyPolicyModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Аренда линейного персонала и аутстаффинг в Екатеринбурге | ПрофКадры - Разнорабочие, грузчики, упаковщики";
    
    // Обновляем мета-описание
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Профессиональные услуги аренды линейного персонала в Екатеринбурге и области. Аутстаффинг разнорабочих, грузчиков, упаковщиков, сортировщиков, клининга и строителей. Быстрое предоставление квалифицированного персонала.');
    }
  }, []);

  const scrollToRequest = () => {
    const element = document.getElementById("request-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openOrderModal = () => {
    setOrderModalOpen(true);
  };

  return (
    <>
      <Header />

      {/* Hero Section - Главный экран */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Аренда линейного персонала в Екатеринбурге
              </h1>
              <p className="text-xl md:text-2xl font-medium text-blue-100">
                Строители • Разнорабочие • Грузчики • Упаковщики
              </p>
              <p className="text-lg text-blue-50 leading-relaxed">
                Предоставляем квалифицированный персонал для вашего бизнеса от 1 дня до постоянного сотрудничества. 
                Работаем по всему Екатеринбургу и Свердловской области.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
                  onClick={openOrderModal}
                >
                  Заказать персонал
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white text-blue-900 bg-white hover:bg-gray-100 hover:text-blue-800 px-8 py-4 text-lg font-medium"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Узнать подробнее
                </Button>
              </div>

              {/* Быстрые контакты */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-blue-400/30">
                <a 
                  href={`tel:${(window as any).contactData?.phone}`}
                  className="flex items-center gap-2 text-white hover:text-orange-300 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">{(window as any).contactData?.phoneDisplay}</span>
                </a>
                <ContactButtons size="sm" />
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
                <ContactForm 
                  title="Получить расчет стоимости"
                  description="Заполните форму — перезвоним в течение 15 минут"
                  ctaText="Рассчитать стоимость"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Наши услуги аренды персонала
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предоставляем квалифицированный линейный персонал для решения любых производственных задач в Екатеринбурге и области
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Разнорабочие"
              description="Универсальный персонал для выполнения широкого спектра производственных и складских задач"
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V6.5L21 9ZM15 15.5V14.5L21 17V15L15 15.5ZM7.91 17C7.66 17.25 7.66 17.75 7.91 18S8.41 18.25 8.66 18L10.5 16.16L11.5 17.16C11.78 17.44 12.22 17.44 12.5 17.16C12.78 16.88 12.78 16.44 12.5 16.16L10.66 14.34L12.5 12.5C12.78 12.22 12.78 11.78 12.5 11.5C12.22 11.22 11.78 11.22 11.5 11.5L9.66 13.34L8.66 12.34C8.41 12.09 7.91 12.09 7.66 12.34C7.41 12.59 7.41 13.09 7.66 13.34L8.66 14.34L7.91 17Z" />
                </svg>
              }
              features={[
                "Благоустройство",
                "Погрузочно-разгрузочные работы",
                "Уборка производственных помещений", 
                "Подсобные работы на строительстве",
                "Складские и логистические операции"
              ]}
              onClick={openOrderModal}
            />
            
            <ServiceCard
              title="Грузчики"
              description="Профессиональные грузчики для погрузки, разгрузки и перемещения товаров любого объема"
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,7H16V6A2,2 0 0,0 14,4H10A2,2 0 0,0 8,6V7H5A1,1 0 0,0 4,8V19A3,3 0 0,0 7,22H17A3,3 0 0,0 20,19V8A1,1 0 0,0 19,7M10,6H14V7H10V6M18,19A1,1 0 0,1 17,20H7A1,1 0 0,1 6,19V9H8V11H10V9H14V11H16V9H18V19Z" />
                </svg>
              }
              features={[
                "Погрузка/разгрузка транспорта",
                "Перемещение грузов по складу",
                "Такелажные работы",
                "Работа с крупногабаритными грузами"
              ]}
              onClick={openOrderModal}
            />
            
            <ServiceCard
              title="Упаковщики"
              description="Квалифицированные упаковщики для быстрой и качественной упаковки продукции"
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2L1,7L12,12L23,7L12,2M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                </svg>
              }
              features={[
                "Упаковка и комплектация товаров",
                "Маркировка продукции",
                "Сборка заказов для отправки",
                "Контроль качества упаковки"
              ]}
              onClick={openOrderModal}
            />
            
            <ServiceCard
              title="Сортировщики"
              description="Персонал для организации складской логистики и сортировки товаров"
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,3H9V7H3V3M3,9H9V13H3V9M3,15H9V19H3V15M11,3H21V7H11V3M11,9H21V13H11V9M11,15H21V19H11V15Z" />
                </svg>
              }
              features={[
                "Сортировка товаров по категориям",
                "Распределение по складским зонам",
                "Проведение инвентаризации",
                "Учет и контроль движения товаров"
              ]}
              onClick={openOrderModal}
            />
            
            <ServiceCard
              title="Клининг"
              description="Профессиональная уборка производственных и офисных помещений"
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />
                </svg>
              }
              features={[
                "Уборка офисных помещений",
                "Клининг производственных цехов",
                "Уборка после строительных работ",
                "Мойка окон и витрин"
              ]}
              onClick={openOrderModal}
            />
            
            <ServiceCard
              title="Строители"
              description="Квалифицированные строители различных специальностей для ваших проектов"
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,18H6V14H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V14H18V18H12M16,10H20V12H16V10M16,6H20V8H16V6M16,2H20V4H16V2M4,14H8V12H4V14M4,18H8V16H4V18M4,22H8V20H4V22M12,8H10V10H8V8H6V6H8V4H10V6H12V8Z" />
                </svg>
              }
              features={[
                "Общестроительные работы",
                "Отделочные работы",
                "Демонтажные работы",
                "Вывоз строительного мусора"
              ]}
              onClick={openOrderModal}
            />
          </div>
        </div>
      </section>

      {/* Преимущества - краткий блок */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Быстро</h3>
              <p className="text-gray-600">Персонал за 24 часа</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Надежно</h3>
              <p className="text-gray-600">Юридическая чистота</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Качественно</h3>
              <p className="text-gray-600">Проверенный персонал</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Выгодно</h3>
              <p className="text-gray-600">Экономия до 30%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Цены */}
      <PricingSection onOrderClick={openOrderModal} />

      {/* Отзывы */}
      <TestimonialsSection />

      {/* Как мы работаем */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Простая и прозрачная процедура сотрудничества — от заявки до предоставления персонала
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard
              number={1}
              title="Заявка"
              description="Оставляете заявку на сайте, по телефону или в мессенджере. Наш менеджер свяжется с вами в течение 15 минут."
            />
            <StepCard
              number={2}
              title="Расчет"
              description="Обсуждаем ваши требования, объем работ, сроки и рассчитываем стоимость услуг аренды персонала."
            />
            <StepCard
              number={3}
              title="Договор"
              description="Готовим и подписываем договор на аутстаффинг или аренду персонала с учетом всех ваших требований."
            />
            <StepCard
              number={4}
              title="Персонал"
              description="Направляем подобранных и проверенных сотрудников на ваш объект в согласованные сроки."
            />
          </div>
        </div>
      </section>

      {/* Форма заказа персонала */}
      <section id="request-form" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Закажите персонал прямо сейчас
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Заполните форму или позвоните нам — подберем персонал под ваши задачи в кратчайшие сроки
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Быстрое оформление</h3>
                    <p className="text-blue-100">Подписание договора и предоставление персонала в течение 1-2 дней</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
                    <p className="text-blue-100">Бесплатная замена сотрудников, не соответствующих требованиям</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Любое количество</h3>
                    <p className="text-blue-100">От 1 человека до крупных команд — обеспечим персоналом любой проект</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <ContactForm 
                title="Заказать персонал"
                description="Оставьте заявку — перезвоним в течение 15 минут и рассчитаем стоимость"
                ctaText="Отправить заявку"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Контакты */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Контакты
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Свяжитесь с нами удобным способом — работаем по всему Екатеринбургу и Свердловской области
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Телефон</h3>
              <a 
                href={`tel:${(window as any).contactData?.phone}`}
                className="text-blue-600 font-bold text-xl mb-2 block hover:text-blue-800 transition-colors"
              >
                {(window as any).contactData?.phoneDisplay}
              </a>
              <p className="text-gray-500">
                Пн-Пт: 8:00-20:00<br />
                Сб-Вс: 9:00-18:00
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Email</h3>
              <a 
                href={`mailto:${(window as any).contactData?.email}`}
                className="text-orange-600 font-bold text-xl mb-2 block hover:text-orange-800 transition-colors"
              >
                {(window as any).contactData?.email}
              </a>
              <p className="text-gray-500">
                Отвечаем в течение 2 часов<br />
                в рабочее время
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Адрес</h3>
              <p className="text-gray-700 font-medium text-lg mb-2">
                {(window as any).contactData?.address}
              </p>
              <p className="text-gray-500">
                Пн-Пт: 9:00-18:00<br />
                Прием по предварительной записи
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Быстрая связь в мессенджерах</h3>
            <div className="flex justify-center">
              <ContactButtons size="lg" />
            </div>
          </div>
        </div>
      </section>

      <Footer 
        onPrivacyClick={() => setPrivacyModalOpen(true)} 
        onPrivacyPolicyClick={() => setPrivacyPolicyModalOpen(true)}
      />
      
      <PrivacyModal 
        open={privacyModalOpen} 
        onOpenChange={setPrivacyModalOpen} 
      />

      <PrivacyPolicyModal 
        open={privacyPolicyModalOpen} 
        onOpenChange={setPrivacyPolicyModalOpen} 
      />

      <OrderModal 
        open={orderModalOpen} 
        onOpenChange={setOrderModalOpen} 
      />
    </>
  );
};

export default Index;
