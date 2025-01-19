import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateRangeValidator(startDateKey: string, endDateKey: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const startDate = formGroup.get(startDateKey)?.value;
    const endDate = formGroup.get(endDateKey)?.value;

    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      return { dateRange: 'End date cannot be before start date' };
    }
    return null;
  };
}
export function conditionalCoverageValidator(financialParamCoverage: AbstractControl) {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const financialCoverage = financialParamCoverage?.value;
    if (financialCoverage === 'Parcial' && (control.value === null || control.value === '')) {
      return { 'required': true };
    }
    return null;
  }
}
