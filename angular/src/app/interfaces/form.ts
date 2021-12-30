import { FormGroup } from '@angular/forms';

export interface TypedFormGroup<T> extends FormGroup {
  value: Partial<T>;
  getRawValue: () => T;
}
