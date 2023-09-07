import DatePicker from 'vue2-datepicker-c';
import eo from 'date-format-parse/lib/locale/eo';

const lang = {
  formatLocale: eo,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('eo', lang);

export default lang;
