
<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Проверяем метод запроса
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Метод не разрешен']);
    exit;
}

// Получаем данные из POST-запроса
$input = json_decode(file_get_contents('php://input'), true);

// Валидация данных
if (!isset($input['name']) || !isset($input['phone'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Не все обязательные поля заполнены']);
    exit;
}

$name = trim($input['name']);
$phone = trim($input['phone']);
$message = isset($input['message']) ? trim($input['message']) : '';

// Простая валидация
if (empty($name) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Имя и телефон обязательны для заполнения']);
    exit;
}

// Настройки электронной почты
$to = 'info@profkadry-ekb.ru'; // Замените на ваш email
$subject = 'Новая заявка с сайта ПрофПерсонал';
$from = 'noreply@profkadry-ekb.ru'; // Замените на ваш домен

// Формируем содержимое письма
$email_content = "Новая заявка с сайта ПрофПерсонал\n\n";
$email_content .= "Имя: " . $name . "\n";
$email_content .= "Телефон: " . $phone . "\n";
if (!empty($message)) {
    $email_content .= "Сообщение: " . $message . "\n";
}
$email_content .= "\nДата отправки: " . date('d.m.Y H:i:s') . "\n";
$email_content .= "IP-адрес: " . $_SERVER['REMOTE_ADDR'] . "\n";

// Заголовки письма
$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Отправляем письмо
$mailResult = mail($to, $subject, $email_content, $headers);

// Возвращаем JSON ответ
if ($mailResult) {
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'Заявка успешно отправлена'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Ошибка отправки письма. Попробуйте позже.'
    ]);
}

// Принудительно завершаем выполнение, чтобы не было дополнительного вывода
exit;
?>
