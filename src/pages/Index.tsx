
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ServiceCard from "@/components/ServiceCard";
import StepCard from "@/components/StepCard";
import FAQSection from "@/components/FAQSection";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactButtons from "@/components/ContactButtons";

const Index = () => {
  useEffect(() => {
    // Set title for SEO
    document.title = "Аренда линейного персонала и аутстаффинг в Екатеринбурге | ПрофПерсонал";
  }, []);

  const scrollToRequest = () => {
    const element = document.getElementById("request");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-brand-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Аренда линейного персонала и аутстаффинг в Екатеринбурге
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Предоставляем квалифицированный персонал для вашего бизнеса — разнорабочие, грузчики, упаковщики, сортировщики, клининг и строители. Закрываем кадровые потребности в любых масштабах.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={scrollToRequest}>
                  Заказать персонал
                </Button>
                <Button variant="outline" size="lg" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ContactForm 
                  title="Получить расчет стоимости"
                  description="Заполните форму, и мы рассчитаем стоимость услуг в течение 30 минут"
                  ctaText="Рассчитать стоимость"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Наши услуги</h2>
          <p className="section-description">
            Предоставляем квалифицированный персонал для решения задач любой сложности
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Разнорабочие"
              description="Универсальный персонал для выполнения широкого спектра задач"
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4Z" />
                  <path d="M18 15.1V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V15.1C6 13.1 9.33 12 12 12C14.67 12 18 13.1 18 15.1Z" />
                </svg>
              }
              features={[
                "Погрузочно-разгрузочные работы",
                "Уборка территорий",
                "Подсобные работы на стройке",
                "Складские работы"
              ]}
              onClick={scrollToRequest}
            />
            
            <ServiceCard
              title="Грузчики"
              description="Профессиональные грузчики для любого объема работ"
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4V16H23L19 21L15 16H18V4H20M12 18V15H8V18H12M8 4V8H12V4H8M2 9H5V18H8V9H2M2 4V8H5V4H2Z" />
                </svg>
              }
              features={[
                "Погрузка/разгрузка транспорта",
                "Перемещение грузов внутри склада",
                "Такелажные работы",
                "Командная работа для крупных объектов"
              ]}
              onClick={scrollToRequest}
            />
            
            <ServiceCard
              title="Упаковщики"
              description="Персонал для быстрой и качественной упаковки товаров"
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15Z" />
                </svg>
              }
              features={[
                "Сборка и упаковка товаров",
                "Маркировка продукции",
                "Комплектация заказов",
                "Контроль качества"
              ]}
              onClick={scrollToRequest}
            />
            
            <ServiceCard
              title="Сортировщики"
              description="Персонал для организации складской логистики"
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,13V15H7V13H5M3,13H9V19H3V13Z" />
                </svg>
              }
              features={[
                "Сортировка товаров по категориям",
                "Распределение по складским зонам",
                "Инвентаризация",
                "Учет и контроль товарооборота"
              ]}
              onClick={scrollToRequest}
            />
            
            <ServiceCard
              title="Клининговый персонал"
              description="Профессиональная уборка помещений и территорий"
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />
                </svg>
              }
              features={[
                "Уборка офисных помещений",
                "Уборка производственных площадей",
                "Клининг после строительства",
                "Мойка окон и фасадов"
              ]}
              onClick={scrollToRequest}
            />
            
            <ServiceCard
              title="Строители"
              description="Квалифицированные строители различных специальностей"
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,18.54L19.37,12.8L21,14.07L12,21.07L3,14.07L4.62,12.81L12,18.54M12,16L3,9L12,2L21,9L12,16M12,4.53L6.26,9L12,13.47L17.74,9L12,4.53Z" />
                </svg>
              }
              features={[
                "Общестроительные работы",
                "Отделочные работы",
                "Демонтаж",
                "Погрузка и вывоз строительного мусора"
              ]}
              onClick={scrollToRequest}
            />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title">Преимущества работы с нами</h2>
          <p className="section-description">
            Почему клиенты выбирают нашу компанию для аутстаффинга персонала
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Оперативность</h3>
              <p className="text-gray-600">
                Предоставляем персонал в кратчайшие сроки – от 24 часов после оформления заявки.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Юридическая чистота</h3>
              <p className="text-gray-600">
                Полное соответствие трудовому законодательству, отсутствие рисков штрафов и проверок.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Экономия бюджета</h3>
              <p className="text-gray-600">
                Снижение затрат на кадровое делопроизводство, налоги и социальные отчисления до 30%.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Проверенный персонал</h3>
              <p className="text-gray-600">
                Тщательный отбор и проверка каждого сотрудника перед направлением на объект.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Гибкость</h3>
              <p className="text-gray-600">
                Возможность быстро масштабировать штат под сезонные потребности бизнеса.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Минимум документации</h3>
              <p className="text-gray-600">
                Упрощенный документооборот — один договор вместо десятков трудовых контрактов.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section id="process" className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Как мы работаем</h2>
          <p className="section-description">
            Простая и прозрачная процедура сотрудничества
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StepCard
              number={1}
              title="Оформление заявки"
              description="Вы оставляете заявку или звоните нам. Наш менеджер связывается с вами для уточнения деталей."
            />
            <StepCard
              number={2}
              title="Согласование условий"
              description="Обсуждаем требования к кандидатам, объем работ, сроки и стоимость услуг."
            />
            <StepCard
              number={3}
              title="Подписание договора"
              description="Готовим и подписываем договор на аутстаффинг или аренду персонала."
            />
            <StepCard
              number={4}
              title="Предоставление персонала"
              description="Направляем подобранных сотрудников на ваш объект в согласованные сроки."
            />
          </div>
        </div>
      </section>
      
      {/* Request Form Section */}
      <section id="request" className="section gradient-bg text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Получите персонал уже сегодня
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Заполните форму или позвоните нам, и мы оперативно подберем персонал для ваших задач
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Быстрый старт</h3>
                    <p className="opacity-80">Оформление документов в течение 1 рабочего дня</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Простая замена</h3>
                    <p className="opacity-80">Бесплатная замена сотрудников, не устроивших по качеству работы</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Бесплатная консультация</h3>
                    <p className="opacity-80">Поможем правильно определить необходимое количество персонала</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl p-6 text-gray-900">
              <ContactForm 
                title="Заказать персонал"
                description="Заполните форму, и мы свяжемся с вами в ближайшее время"
                ctaText="Отправить заявку"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Privacy Policy Section */}
      <PrivacyPolicy />
      
      {/* Contacts Section */}
      <section id="contacts" className="section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title">Контакты</h2>
          <p className="section-description">
            Свяжитесь с нами удобным для вас способом
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 gradient-bg rounded-full mx-auto flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-brand-700 font-medium text-lg mb-2">
                {(window as any).contactData?.phoneDisplay}
              </p>
              <p className="text-gray-500 text-sm">
                Пн-Пт: 9:00-18:00
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 gradient-bg rounded-full mx-auto flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-brand-700 font-medium text-lg mb-2">
                {(window as any).contactData?.email}
              </p>
              <p className="text-gray-500 text-sm">
                Отвечаем в течение 2 часов
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 gradient-bg rounded-full mx-auto flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Адрес</h3>
              <p className="text-gray-700 mb-2">
                {(window as any).contactData?.address}
              </p>
              <p className="text-gray-500 text-sm">
                Пн-Пт: 9:00-18:00
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Свяжитесь с нами в мессенджерах</h3>
            <div className="flex justify-center">
              <ContactButtons size="lg" />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
