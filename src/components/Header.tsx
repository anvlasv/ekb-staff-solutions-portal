
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contacts = (window as any).contactData || { phoneDisplay: "+7 (922) 471-48-99" };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md",
      isScrolled ? "py-2" : "py-4"
    )}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-brand-700">ПрофПерсонал</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-gray-700 hover:text-brand-700 transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection("pricing")} 
              className="text-gray-700 hover:text-brand-700 transition-colors"
            >
              Цены
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")} 
              className="text-gray-700 hover:text-brand-700 transition-colors"
            >
              Отзывы
            </button>
            <button 
              onClick={() => scrollToSection("process")} 
              className="text-gray-700 hover:text-brand-700 transition-colors"
            >
              Как мы работаем
            </button>
            <button 
              onClick={() => scrollToSection("faq")} 
              className="text-gray-700 hover:text-brand-700 transition-colors"
            >
              Вопросы
            </button>
            <button 
              onClick={() => scrollToSection("contacts")} 
              className="text-gray-700 hover:text-brand-700 transition-colors"
            >
              Контакты
            </button>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${contacts.phone}`} className="font-medium text-brand-700">
              {contacts.phoneDisplay}
            </a>
            <Button onClick={() => scrollToSection("request")}>
              Заказать звонок
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <MobileMenu 
            isOpen={mobileMenuOpen}
            onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
            onClose={() => setMobileMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
