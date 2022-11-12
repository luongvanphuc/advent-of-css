import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, QueryList, ViewChildren } from '@angular/core';
import { AudioComponent } from './audio/audio.component';

@Component({
  standalone: true,
  selector: 'app-day-3',
  templateUrl: './day-3.component.html',
  styleUrls: ['./day-3.component.scss'],
  imports: [CommonModule, AudioComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Day3Component {
  @ViewChildren(AudioComponent)
  public audioPlayers!: QueryList<AudioComponent>;

  public arr23 = Array.from(Array(23).keys());

  public play(idx: number): void {
    this.audioPlayers.get(idx - 1)?.play();
  }
}
