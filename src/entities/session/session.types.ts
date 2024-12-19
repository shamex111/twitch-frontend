export interface ISession {
  id: string;
  cookie: {
    originalMaxAge: number; // В миллисекундах
    expires: string; // Дата в формате ISO
    secure: boolean; // Используется ли HTTPS
    httpOnly: boolean; // Доступность только через HTTP
    domain: string; // Домен, к которому привязан cookie
    path: string; // Путь, к которому относится cookie
    sameSite: 'lax' | 'strict' | 'none'; // Политика SameSite
  };
  createdAt: string; // Дата создания сессии в формате ISO
  metadata: {
    location: {
      country: string; // Страна пользователя
      city: string; // Город пользователя
      latitude: number; // Широта
      longitude: number; // Долгота
    };
    device: {
      browser: string; // Браузер пользователя
      os: string; // Операционная система пользователя
      type: string; // Тип устройства
    };
    ip: string; // IP-адрес пользователя
  };
  userId: string; // ID пользователя
}
