export interface FormInputInterface {
  id?: string;
  value?: string;
  onBlur?: () => void;
  onChange?: () => void;
  allowClear?: boolean;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
  className?: string;
  hidden?: boolean;
}
