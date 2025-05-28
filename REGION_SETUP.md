
# Настройка сайта для нового региона

## Быстрая смена региона

Для клонирования сайта на другой регион выполните следующие шаги:

### 1. Обновите региональную конфигурацию

В файле `src/config/regions.ts`:

1. Создайте новую конфигурацию региона по образцу `moscowConfig`
2. Измените `currentRegionConfig` на вашу новую конфигурацию

```typescript
// Замените эту строку:
export const currentRegionConfig = ekaterinburgConfig;

// На вашу конфигурацию:
export const currentRegionConfig = yourCityConfig;
```

### 2. Обновите мета-теги в index.html

В файле `index.html` замените:

- `<title>` - заголовок страницы
- `<meta name="description">` - описание
- `<meta name="keywords">` - ключевые слова
- Open Graph теги (`og:title`, `og:description`, `og:url`)
- Twitter Card теги
- Региональные мета-теги (`geo.region`, `geo.placename`, `geo.position`, `ICBM`)
- Структурированные данные в `<script type="application/ld+json">`
- `window.contactData` в скрипте

### 3. Замените логотип (если нужно)

Загрузите новый логотип в папку `public/lovable-uploads/` и обновите путь в `src/components/Header.tsx`.

### 4. Что автоматически обновится

Благодаря региональной конфигурации автоматически обновятся:

- Контактные данные в хедере и футере
- Информация о компании в футере
- Структурированные данные для SEO
- Все упоминания города и региона в компонентах

### 5. Дополнительные настройки

- Обновите домен в `<link rel="canonical">`
- Настройте аналитику (Yandex.Metrika, Google Analytics)
- Проверьте цены в компонентах (если они отличаются по регионам)

## Структура региональной конфигурации

```typescript
export interface RegionConfig {
  city: string;                    // Название города
  region: string;                  // Название региона
  companyName: string;             // Название компании
  phone: string;                   // Телефон в формате +7XXXXXXXXXX
  phoneDisplay: string;            // Телефон для отображения
  email: string;                   // Email
  whatsapp: string;                // WhatsApp
  telegram: string;                // Telegram
  address: string;                 // Полный адрес
  entrepreneur: string;            // Данные ИП
  inn: string;                     // ИНН
  coordinates: {                   // Координаты для карт
    latitude: string;
    longitude: string;
  };
  workingHours: string;            // Часы работы
  serviceRadius: string;           // Радиус обслуживания в метрах
  metaTags: {                      // SEO мета-теги
    title: string;
    description: string;
    keywords: string;
  };
  structuredData: {                // Данные для Schema.org
    businessName: string;
    serviceArea: string;
    description: string;
  };
}
```

## Полезные советы

- Копируйте существующую конфигурацию и изменяйте только нужные поля
- Проверьте все контактные данные перед публикацией
- Обновите координаты для корректной работы карт и геотаргетинга
- Адаптируйте ключевые слова под местную специфику поиска
