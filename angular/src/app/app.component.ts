import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppInfo } from './meta/app-info.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public availableDays = Array.from(Array(4).keys());
  public isDrawerVisible = false;
  public dayInfo: Array<string> = [];

  private _appInfo: AppInfo = require('./meta/app-info.json');

  public get appInfo(): Array<string> {
    return this._appInfo.app?.info;
  }

  constructor(private router: Router) {}

  public showDrawer(): void {
    const url = this.router.url;
    const day = url.split('-')[1];

    this.dayInfo = this._appInfo[`day${day}`]?.info;
    this.isDrawerVisible = true;
  }

  public closeDrawer(): void {
    this.isDrawerVisible = false;
  }
}
