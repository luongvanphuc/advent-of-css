import { ChangeDetectionStrategy, Component } from '@angular/core';

import { dishes } from './models';

@Component({
  selector: 'app-day-2',
  templateUrl: './day-2.component.html',
  styleUrls: ['./day-2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Day2Component {
  public dishes = dishes;
}
