
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/sonner";

type ContactFormProps = {
  title?: string;
  description?: string;
  ctaText?: string;
  className?: string;
};

const ContactForm = ({
  title = "Заказать звонок",
  description = "Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время",
  ctaText = "Отправить заявку",
  className = "",
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    policy: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, policy: checked }));
    
    // Clear error when user checks the box
    if (errors.policy) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.policy;
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Пожалуйста, введите ваше имя";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Пожалуйста, введите ваш телефон";
    } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Пожалуйста, введите корректный номер телефона";
    }
    
    if (!formData.policy) {
      newErrors.policy = "Необходимо согласиться с политикой обработки персональных данных";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        console.log('Отправка формы...');
        
        const response = await fetch('/send-mail.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            message: formData.message
          }),
        });

        console.log('Статус ответа:', response.status);
        console.log('Заголовки ответа:', Object.fromEntries(response.headers.entries()));

        // Получаем текст ответа для отладки
        const responseText = await response.text();
        console.log('Текст ответа от сервера:', responseText);

        let result;
        try {
          result = JSON.parse(responseText);
        } catch (parseError) {
          console.error('Ошибка парсинга JSON:', parseError);
          console.log('Ответ сервера не является валидным JSON:', responseText);
          throw new Error('Сервер вернул некорректный ответ');
        }

        console.log('Обработанный ответ сервера:', result);

        if (result.success) {
          setFormData({
            name: "",
            phone: "",
            message: "",
            policy: false,
          });
          toast.success("Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.");
        } else {
          toast.error(result.message || 'Ошибка отправки заявки');
        }
      } catch (error) {
        console.error('Ошибка отправки формы:', error);
        toast.error("Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const openPrivacyPolicy = () => {
    const element = document.getElementById("privacy-policy");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`bg-white rounded-lg p-6 shadow-lg ${className}`}>
      {title && <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>}
      {description && <p className="text-gray-600 mb-6 text-center">{description}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Input
              name="name"
              placeholder="Ваше имя *"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div>
            <Input
              name="phone"
              placeholder="Ваш телефон *"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          
          <div>
            <Textarea
              name="message"
              placeholder="Дополнительная информация"
              value={formData.message}
              onChange={handleChange}
              rows={3}
            />
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="policy"
              checked={formData.policy}
              onCheckedChange={handleCheckboxChange}
              className={errors.policy ? "border-red-500" : ""}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="policy"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Я согласен с <button type="button" onClick={openPrivacyPolicy} className="text-brand-700 underline">политикой обработки персональных данных</button>
              </label>
              {errors.policy && <p className="text-red-500 text-xs">{errors.policy}</p>}
            </div>
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Отправка..." : ctaText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
