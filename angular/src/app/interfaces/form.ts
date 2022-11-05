import { UntypedFormGroup } from '@angular/forms';

export interface TypedFormGroup<T> extends UntypedFormGroup {
  value: Partial<T>;
  getRawValue: () => T;
}
