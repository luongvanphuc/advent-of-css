import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioComponent {
  @Input()
  public file!: string;

  @ViewChild('audio')
  public audioRef!: ElementRef<HTMLAudioElement>;

  private get audioPlayer(): HTMLAudioElement {
    return this.audioRef.nativeElement;
  }

  public play(): void {
    if (!this.audioPlayer) {
      return;
    }

    if (!this.audioPlayer.paused) {
      this.audioPlayer.pause();
      this.audioPlayer.currentTime = 0;
    }

    this.audioPlayer.play();
  }
}
