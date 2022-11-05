import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

import { TypedFormGroup } from 'interfaces';
import { NzModalRef } from 'ng-zorro-antd/modal';

export interface ISettings {
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsModalComponent implements OnInit {
  public form!: TypedFormGroup<ISettings>;

  constructor(
    private fb: UntypedFormBuilder,
    private modalRef: NzModalRef<SettingsModalComponent, ISettings>,
  ) {}

  public get formData(): ISettings {
    return this.form.getRawValue();
  }

  public ngOnInit(): void {
    const model: FormGroupObj<ISettings> = {
      minutes: [null],
      seconds: [null],
    };

    this.form = this.fb.group(model);
  }

  public submitForm(): void {
    this.modalRef.close(this.form.getRawValue());
  }
}
