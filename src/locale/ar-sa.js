import DatePicker from 'vue2-datepicker-c';
import arSA from 'date-format-parse/lib/locale/ar-sa';

const lang = {
  formatLocale: arSA,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ar-sa', lang);

export default lang;
