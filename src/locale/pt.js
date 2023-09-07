import DatePicker from 'vue2-datepicker-c';
import pt from 'date-format-parse/lib/locale/pt';

const lang = {
  formatLocale: pt,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('pt', lang);

export default lang;
