/**
 * Склоняет слово "фолловеры" в зависимости от числа и добавляет единицу измерения (тыс., млн.).
 * @param num - Число, относительно которого нужно склонить слово.
 * @returns Склонённое сочетание числа, единицы измерения (если нужно) и слова "фолловеры".
 */
export function formatFollowers(num: number): string {
  const absNum = Math.abs(num);
  let formattedNum = num.toString();
  let unit = '';
  let word = 'фолловеров';

  // Добавляем единицу измерения (тыс., млн.)
  if (absNum >= 1_000_000) {
    formattedNum = (num / 1_000_000).toFixed(1).replace('.0', '');
    unit = 'млн.';
  } else if (absNum >= 1_000) {
    formattedNum = (num / 1_000).toFixed(1).replace('.0', '');
    unit = 'тыс.';
  }

  // Склоняем слово "фолловеры"
  const lastDigits = absNum % 100;
  const lastDigit = absNum % 10;

  if (lastDigits > 10 && lastDigits < 20) {
    word = 'фолловеров'; // Для 11-19
  } else if (lastDigit > 1 && lastDigit < 5) {
    word = 'фолловера'; // Для 2-4
  } else if (lastDigit === 1) {
    word = 'фолловер'; // Для 1
  }

  return `${formattedNum} ${unit} ${word}`.trim();
}

//   // Пример использования:
//   console.log(formatFollowers(1)); // "1 фолловер"
//   console.log(formatFollowers(2)); // "2 фолловера"
//   console.log(formatFollowers(5)); // "5 фолловеров"
//   console.log(formatFollowers(1_200)); // "1.2 тыс. фолловеров"
//   console.log(formatFollowers(12_000)); // "12 тыс. фолловеров"
//   console.log(formatFollowers(2_300_000)); // "2.3 млн. фолловеров"
//   console.log(formatFollowers(-3_500_000)); // "-3.5 млн. фолловеров"
