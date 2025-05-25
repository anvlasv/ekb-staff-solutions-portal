
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

type ContactButtonsProps = {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  showText?: boolean;
};

const ContactButtons = ({ variant = "default", size = "default", showText = true }: ContactButtonsProps) => {
  // Get contact information from window object
  const contacts = (window as any).contactData || {
    phone: "+79224714899",
    email: "info@profpersonal.ru",
    whatsapp: "+79227837198",
    telegram: "tmnsklwork"
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant={variant} size={size} asChild>
        <a href={`tel:${contacts.phone}`} className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          {showText && "Позвонить"}
        </a>
      </Button>
      
      <Button variant={variant} size={size} asChild>
        <a href={`https://wa.me/${contacts.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.958 17.931c-.212.377-.665.761-1.129.971-1.291.577-3.42.555-3.42.555-4.26-.167-7.146-1.74-9.782-5.244-1.088-1.576-1.72-3.776-1.772-5.767 0 0-.046-1.323.594-2.171.323-.394.783-.633 1.344-.648 1.176-.031 1.196 1.446 1.204 1.68.067 1.837-.394 2.037-1.72 3.931-.325.541.31.921.643 1.131 1.097.692 2.24.942 3.331 1.172.854.185 1.903.028 2.297-.78.376-.756 1.11-2.19 1.108-2.185.291-.492.709-.745 1.545-.287.332.189 3.565 1.852 3.565 1.852.344.199.572.496.572.857 0 1.308-1.316 5.889-1.38 6.113z"></path>
          </svg>
          {showText && "WhatsApp"}
        </a>
      </Button>
      
      <Button variant={variant} size={size} asChild>
        <a href={`https://t.me/${contacts.telegram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.931 9.03c-.146.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.59-4.47c.538-.196 1.006.128.774 1.201z"></path>
          </svg>
          {showText && "Telegram"}
        </a>
      </Button>
      
      <Button variant={variant} size={size} asChild>
        <a href={`mailto:${contacts.email}`} className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          {showText && "Email"}
        </a>
      </Button>
    </div>
  );
};

export default ContactButtons;
