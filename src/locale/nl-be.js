import DatePicker from 'vue2-datepicker-c';
import nlBE from 'date-format-parse/lib/locale/nl-be';

const lang = {
  formatLocale: nlBE,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('nl-be', lang);

export default lang;
