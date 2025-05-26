
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import ContactButtons from "./ContactButtons";
import OrderModal from "./OrderModal";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onToggle, onClose }: MobileMenuProps) => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  
  const contacts = (window as any).contactData || { 
    phoneDisplay: "+7 (922) 471-48-99",
    phone: "+79224714899",
    email: "info@profkadry-ekb.ru",
    address: "г. Екатеринбург, ул. Ленина, 38, офис 405"
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  const handleOrderCall = () => {
    onClose();
    setIsOrderModalOpen(true);
  };

  const menuItems = [
    { label: "Услуги", id: "services" },
    { label: "Цены", id: "pricing" },
    { label: "Отзывы", id: "testimonials" },
    { label: "Как мы работаем", id: "process" },
    { label: "Вопросы", id: "faq" },
    { label: "Контакты", id: "contacts" },
  ];

  return (
    <>
      {/* Кнопка меню */}
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onToggle}
        className="md:hidden relative z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Меню */}
      <div className={cn(
        "fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Заголовок меню */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-brand-700">ПрофПерсонал</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Навигация */}
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="space-y-2 px-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left py-3 px-4 text-gray-700 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Контактная информация */}
            <div className="mt-8 px-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Связаться с нами
              </h3>
              
              <div className="space-y-4">
                {/* Телефон */}
                <a 
                  href={`tel:${contacts.phone}`}
                  className="flex items-center gap-3 p-3 bg-brand-50 rounded-lg hover:bg-brand-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-brand-700">{contacts.phoneDisplay}</div>
                    <div className="text-sm text-gray-500">Позвонить</div>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${contacts.email}`}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">{contacts.email}</div>
                    <div className="text-sm text-gray-500">Написать</div>
                  </div>
                </a>

                {/* Адрес */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mt-1">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">Офис</div>
                    <div className="text-sm text-gray-500">{contacts.address}</div>
                  </div>
                </div>
              </div>

              {/* Мессенджеры */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Мессенджеры
                </h4>
                <ContactButtons variant="outline" showText={true} />
              </div>
            </div>
          </div>

          {/* Кнопка действия */}
          <div className="border-t border-gray-200 p-6">
            <Button 
              className="w-full h-12 text-base font-semibold"
              onClick={handleOrderCall}
            >
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>

      {/* Модальное окно заказа */}
      <OrderModal 
        open={isOrderModalOpen} 
        onOpenChange={setIsOrderModalOpen} 
      />
    </>
  );
};

export default MobileMenu;
