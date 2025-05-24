
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const OrderModal = ({ open, onOpenChange }: OrderModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Заказать персонал
          </DialogTitle>
        </DialogHeader>
        <ContactForm 
          title=""
          description="Оставьте заявку — перезвоним в течение 15 минут и рассчитаем стоимость"
          ctaText="Отправить заявку"
          className="p-0 shadow-none"
        />
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
