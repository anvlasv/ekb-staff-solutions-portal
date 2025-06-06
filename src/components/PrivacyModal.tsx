
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PrivacyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyModal = ({ open, onOpenChange }: PrivacyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Политика обработки персональных данных
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 text-gray-700">
          <p>
            Настоящая Политика обработки персональных данных (далее – «Политика») определяет общие принципы 
            и порядок обработки персональных данных Посетителей Сайта и меры по обеспечению их безопасности 
            в ИП Васюков А.Б.
          </p>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">1. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ</h3>
            <p className="mb-2">Стороны используют следующие термины в указанном ниже значении:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Данные – иные данные о Посетителе Сайта.</li>
              <li>Посетитель Сайта – физическое лицо, использующее Сайт.</li>
              <li>Персональные данные – информация, относящаяся к прямо или косвенно определенному, или определяемому Посетителю Сайта.</li>
              <li>Обработка персональных данных – любое действие с персональными данными, совершаемое с использованием средств автоматизации.</li>
              <li>Оператор – ИП Васюков А.Б., самостоятельно организующий обработку персональных данных.</li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">2. ОБЩИЕ ПОЛОЖЕНИЯ</h3>
            <p className="mb-2">
              2.1. Настоящая Политика в отношении обработки персональных данных разработана в соответствии 
              с положениями Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных» и определяет 
              порядок обработки персональных данных и меры по обеспечению их безопасности.
            </p>
            <p>
              2.2. Целью настоящей Политики является защита прав и свобод человека и гражданина при обработке 
              его персональных данных, в том числе защиты прав на неприкосновенность частной жизни.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">3. ОСНОВНЫЕ ПРАВА И ОБЯЗАННОСТИ ОПЕРАТОРА</h3>
            <p className="mb-2">3.1. Оператор имеет право:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>получать от Посетителя Сайта достоверные информацию и/или документы, содержащие Персональные данные;</li>
              <li>требовать от Посетителя Сайта уточнения его Персональных данных, их блокирования или уничтожения в случае, если Персональные данные являются неполными, устаревшими, недостоверными;</li>
              <li>принимать меры по актуализации и проверке достоверности Персональных данных.</li>
            </ul>
            <p className="mb-2">3.2. Оператор обязан:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>предоставлять Посетителю Сайта по его просьбе информацию, касающуюся обработки его Персональных данных;</li>
              <li>организовывать обработку Персональных данных в порядке, установленном действующим законодательством РФ;</li>
              <li>отвечать на обращения и запросы Посетителей Сайта, касаемые Персональных данных, обрабатываемых Оператором, а также давать соответствующие объяснения и пояснения;</li>
              <li>осуществлять иные обязанности, предусмотренные законодательством РФ.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">4. ОСНОВНЫЕ ПРАВА И ОБЯЗАННОСТИ ПОСЕТИТЕЛЕЙ САЙТА</h3>
            <p className="mb-2">4.1. Посетитель Сайта имеет право:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>получать информацию, касающуюся обработки его Персональных данных;</li>
              <li>требовать от Оператора уточнения его Персональных данных, их блокирования или уничтожения в случае, если Персональные данные являются неполными, устаревшими, неточными;</li>
              <li>принимать предусмотренные законом меры по защите своих прав.</li>
            </ul>
            <p className="mb-2">4.2. Посетитель Сайта обязан:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>предоставлять Оператору только достоверные данные о себе;</li>
              <li>предоставлять документы, содержащие Персональные данные, с учетом требований законодательства Российской Федерации;</li>
              <li>незамедлительно уведомлять Оператора о каких-либо изменениях своих Персональных данных.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">5. ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ</h3>
            <p className="mb-2">
              5.1. Оператор обрабатывает Персональные данные на законной и справедливой основе для выполнения 
              возложенных законодательством функций, полномочий и обязанностей, осуществления прав и законных 
              интересов Оператора, работников Оператора и третьих лиц.
            </p>
            <p className="mb-2">5.2. Оператор получает Персональные данные непосредственно от Посетителей Сайта.</p>
            <p className="mb-2">
              5.3. Оператор обрабатывает Персональные данные автоматизированным способом, с использованием 
              средств вычислительной техники.
            </p>
            <p className="mb-2">
              5.4. Действия по обработке Персональных данных включают: сбор, запись, систематизацию, накопление, 
              хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, 
              предоставление, доступ), обезличивание, блокирование, удаление и уничтожение.
            </p>
            <p>
              5.5. Базы данных информации, содержащей Персональные данные граждан Российской Федерации, 
              находятся на территории Российской Федерации.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyModal;
