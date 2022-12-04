import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, QueryList, TrackByFunction, ViewChildren } from '@angular/core';

import { KeyComponent } from './key/key.component';
import { Rows } from './models/constant';
import { Key } from './models/model';

@Component({
  standalone: true,
  selector: 'app-day-4',
  templateUrl: './day-4.component.html',
  styleUrls: ['./day-4.component.scss'],
  imports: [CommonModule, KeyComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Day4Component implements OnInit, OnDestroy {
  @ViewChildren(KeyComponent)
  public keys!: QueryList<KeyComponent>;

  public readonly Rows = Rows;

  public ngOnInit(): void {
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  public ngOnDestroy(): void {
    document.removeEventListener('keydown', this.handleKeydown.bind(this));
  }

  private handleKeydown(e: KeyboardEvent): void {
    const keyEl = this.keys.find(k => k.key.code === e.code);
    keyEl?.jiggle();
  }

  public trackByIndex: TrackByFunction<number> = (_, i: number): number => i;

  public trackByKeyCode: TrackByFunction<Key> = (_, key: Key): Key['code'] => key.code;
}
