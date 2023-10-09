import type { FormData } from "../types";

enum FieldNames {
  FIRST_NAME = "firstName",
  SURNAME = "surName",
  EMAIL = "email",
  PHONE_NUMBER = "phoneNumber",
  GENDER = "gender",
  DOB_YEAR = "dobYear",
  DOB_MONTH = "dobMonth",
  DOB_DAY = "dobDay",
  COMMENT = "comment",
}

type AvailableFields =
  | FieldNames.FIRST_NAME
  | FieldNames.SURNAME
  | FieldNames.EMAIL
  | FieldNames.PHONE_NUMBER
  | FieldNames.GENDER
  | FieldNames.DOB_YEAR
  | FieldNames.DOB_MONTH
  | FieldNames.DOB_DAY
  | FieldNames.COMMENT;

interface StepProps {
  formData: FormData;
  updateFormData: (fieldName: AvailableFields, fieldValue: string) => void;
  setCurrentAccordion: (accordion: number) => void;
}
export type { StepProps, AvailableFields };
export { FieldNames };
