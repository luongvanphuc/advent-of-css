import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ISettings, SettingsModalComponent } from './settings-modal/settings-modal.component';

const MAX_SECONDS = 3599; // 59:59 (m:s)

@Component({
  selector: 'app-day-1',
  templateUrl: './day-1.component.html',
  styleUrls: ['./day-1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Day1Component {
  public visible = false;
  public duration = 0;
  public animating = false;
  public ringColor = '#900a0a';

  private minute = 0;
  private second = 0;
  private totalInSeconds = 0;
  private timer: any;

  constructor(
    private modalService: NzModalService,
    private cdr: ChangeDetectorRef,
  ) {}

  public get minuteString(): string {
    return `${this.minute}`.padStart(2, '0');
  }

  public get secondString(): string {
    return `${this.second}`.padStart(2, '0');
  }

  public toggleTimer(): void {
    if (!this.animating && this.totalInSeconds > 0) {
      this.animating = true;
      this.ringColor = '#900a0a';
      this.timer = setInterval(() => {
        this.totalInSeconds > 1 ? (this.totalInSeconds -= 1) : this.finish();
        this.refreshNumbers();
      }, 1000);
    } else {
      this.reset();
    }
  }

  private reset(): void {
    clearInterval(this.timer);
    this.totalInSeconds = 0;
    this.duration = 0;
    this.minute = 0;
    this.second = 0;
    this.animating = false;
  }

  private finish(): void {
    this.reset();
    this.ringColor = 'green';
    this.modalService.info({ nzTitle: "Time's up" });
  }

  private refreshNumbers(): void {
    const timeValue = new Date(this.totalInSeconds * 1000)
      .toISOString()
      .substr(14, 5);
    const [m, s] = timeValue.split(':');

    this.minute = +m;
    this.second = +s;
    this.cdr.markForCheck();
  }

  public openSettingModal(): void {
    const modal = this.modalService.create({
      nzTitle: 'Settings',
      nzContent: SettingsModalComponent,
      nzFooter: null,
      nzWidth: 350,
    });

    modal.afterClose.subscribe((result: ISettings) => {
      const { minutes = 0, seconds = 0 } = result;
      this.totalInSeconds = Math.min(MAX_SECONDS, minutes * 60 + seconds);
      this.duration = this.totalInSeconds;
      this.refreshNumbers();
    });
  }
}
