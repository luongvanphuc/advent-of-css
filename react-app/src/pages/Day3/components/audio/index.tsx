import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef } from 'react';

export type AudioMethods = {
  play: () => void;
}

const Audio: ForwardRefRenderFunction<AudioMethods, LayoutProps> = (props, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, (): AudioMethods => ({
    play: (): void => {
      if (!audioRef.current) {
        return;
      }

      const player = audioRef.current;
      console.log(player);

      if (!player.paused) {
        player.pause();
        player.currentTime = 0;
      }

      player.play();
    },
  }));

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mediaFile = require(`../../medias/${props.file}`);

  return (
    <audio ref={audioRef}>
      <source src={mediaFile} type="audio/mpeg" />
    </audio>
  );
};

interface LayoutProps {
  file: string;
}

export default forwardRef(Audio);
