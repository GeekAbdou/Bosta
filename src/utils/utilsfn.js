import { t } from 'i18next';
import Cookies from 'js-cookie';
const currentLanguageCode = Cookies.get('i18next') || 'en';

const formatDateTime = (inputDate) => {
  const date = new Date(inputDate);
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const formattedDate = date.toLocaleDateString('en-GB', options);
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return `${formattedDate} ${t('AT')} ${formattedTime}`;
};

function capitalizeFirstLetter(string) {
  return string.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}
function normalizeString(string) {
  return string.toLowerCase().split(' ').join('-');
}

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = (((hours + 11) % 12) + 1).toString().padStart(2, '0');
  return `${formattedHours}:${minutes} ${ampm}`;
};

const formatDateMonth = (inputDate) => {
  if (inputDate == null) {
    // loose equality to check null
    return 'Cancelled';
  }
  const date = new Date(inputDate);
  const day = ('0' + date.getDate()).slice(-2);
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  let formattedMonth;
  if (currentLanguageCode === 'ar') {
    const arabicMonths = [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
    ];
    formattedMonth = arabicMonths[monthIndex];
  } else {
    const options = { month: 'short' };
    formattedMonth = date.toLocaleDateString('en-GB', options);
  }

  return `${day} ${formattedMonth} ${year}`;
};

export {
  formatDateTime,
  capitalizeFirstLetter,
  normalizeString,
  formatDateMonth,
  formatTime,
  formatDate,
};
