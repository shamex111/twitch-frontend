import {
  format,
  formatDistanceToNow,
  isToday,
  isYesterday,
  parseISO
} from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatDate = (date: string | Date) => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;

  // Если дата сегодня
  if (isToday(parsedDate)) {
    return `сегодня в ${format(parsedDate, 'H:mm')}`;
  }

  // Если дата вчера
  if (isYesterday(parsedDate)) {
    return `вчера в ${format(parsedDate, 'H:mm')}`;
  }

  // Форматирование в зависимости от года
  const formattedDate = format(parsedDate, 'd MMMM yyyy', { locale: ru });
  const formattedDateWithoutYear = format(parsedDate, 'd MMMM', { locale: ru });

  // Если год тот же, что и текущий, то выводим без года
  if (new Date().getFullYear() === parsedDate.getFullYear()) {
    return formattedDateWithoutYear;
  }

  return formattedDate;
};

const formatTimeAgo = (date: string | Date) => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;

  return formatDistanceToNow(parsedDate, { addSuffix: true, locale: ru });
};

// // Примеры использования:

// const date1 = new Date(2009, 0, 21);
// const date2 = new Date();
// const date3 = new Date(new Date().getTime() - 3600000); // 1 час назад
// const date4 = new Date(new Date().getTime() - 2580000); // 43 минуты назад

// console.log(formatDate(date1)); // 21 января 2009 года
// console.log(formatDate(date2)); // сегодня в 17:09 (если сейчас 17:09)
// console.log(formatTimeAgo(date3)); // час назад
// console.log(formatTimeAgo(date4)); // 43 минуты назад
