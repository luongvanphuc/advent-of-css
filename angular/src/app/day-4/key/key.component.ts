import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Key } from '../models/model';

@Component({
  standalone: true,
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyComponent {
  @Input()
  public key!: Key;

  @ViewChild('keyRef')
  public keyRef!: ElementRef<HTMLElement>;

  private get audioPlayer(): HTMLElement {
    return this.keyRef.nativeElement;
  }

  public jiggle(): void {
    if (!this.audioPlayer) {
      return;
    }

    this.audioPlayer.classList.add('jiggling');

    setTimeout(() => {
      this.audioPlayer.classList.remove('jiggling');
    }, 500);
  }
}
