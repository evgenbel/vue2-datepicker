import DatePicker from 'vue2-datepicker-c';
import id from 'date-format-parse/lib/locale/id';

const lang = {
  formatLocale: id,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('id', lang);

export default lang;
