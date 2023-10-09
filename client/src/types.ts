import {FieldNames} from './Accordion/types';

export interface FormData {
  [FieldNames.FIRST_NAME]: string;
  [FieldNames.SURNAME]: string;
  [FieldNames.EMAIL]: string;
  [FieldNames.PHONE_NUMBER]: string;
  [FieldNames.GENDER]: string;
  [FieldNames.DOB_YEAR]: string;
  [FieldNames.DOB_MONTH]: string;
  [FieldNames.DOB_DAY]: string;
  [FieldNames.COMMENT]: string;
}
