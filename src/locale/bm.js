import DatePicker from 'vue2-datepicker-c';
import bm from 'date-format-parse/lib/locale/bm';

const lang = {
  formatLocale: bm,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('bm', lang);

export default lang;
