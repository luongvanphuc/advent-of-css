import { ChangeDetectionStrategy, Component, QueryList, ViewChildren } from '@angular/core';
import { AudioComponent } from './audio/audio.component';

@Component({
  standalone: true,
  selector: 'app-day-3',
  templateUrl: './day-3.component.html',
  styleUrls: ['./day-3.component.scss'],
  imports: [AudioComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Day3Component {
  @ViewChildren(AudioComponent)
  public audioPlayers!: QueryList<AudioComponent>;

  public play(idx: number): void {
    const player = this.audioPlayers.get(idx - 1);
    player?.play();
  }
}
