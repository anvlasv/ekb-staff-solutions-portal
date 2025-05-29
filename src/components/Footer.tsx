
import { Mail, MapPin, Phone } from "lucide-react";
import ContactButtons from "./ContactButtons";
import { useRegionConfig } from "@/hooks/useRegionConfig";

interface FooterProps {
  onPrivacyClick: () => void;
  onPrivacyPolicyClick: () => void;
}

const Footer = ({ onPrivacyClick, onPrivacyPolicyClick }: FooterProps) => {
  const regionConfig = useRegionConfig();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">ПрофПерсонал</h3>
            <p className="text-gray-400 mb-4">
              Профессиональные услуги по аренде персонала и аутстаффингу в {regionConfig.city} и {regionConfig.region}.
            </p>
            <ContactButtons variant="ghost" />
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Услуги
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("pricing")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Цены
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("testimonials")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Отзывы
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("process")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Как мы работаем
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("faq")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Вопросы
                </button>
              </li>
              <li>
                <button 
                  onClick={onPrivacyPolicyClick}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Политика конфиденциальности
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{regionConfig.phoneDisplay}</p>
                  <p className="text-gray-400 text-sm">Пн-Пт: 9:00-18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">{regionConfig.email}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">{regionConfig.address}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Информация об ИП */}
        <div className="text-center py-4 border-b border-gray-700 mb-8">
          <p className="text-gray-400">{regionConfig.entrepreneur}</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-500 text-sm mb-2">
              © {currentYear} ПрофПерсонал. Все права защищены.
            </p>
            <a 
              href="https://t.me/person_grata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-sm hover:text-white transition-colors"
            >
              Разработка и поддержка сайта SV-Group
            </a>
          </div>
          <button 
            onClick={onPrivacyClick}
            className="text-gray-500 text-sm hover:text-white transition-colors"
          >
            Политика обработки персональных данных
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
