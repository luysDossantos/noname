export interface FilterItem {
  type: 'text' | 'dropdown';
  controlName: string;
  placeholder: string;
  options?: any[];
  optionLabel?: string;
  optionValue?: string;
}
