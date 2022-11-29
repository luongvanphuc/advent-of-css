<script lang="ts">
import { Modal } from 'ant-design-vue';
import { reactive } from 'vue';
import type { UnwrapRef } from 'vue';
import type { FormState } from './shared/models/model';
import { MAX_SECONDS } from './shared/models/constant';
import DropSVG from './shared/icons/DropSVG.vue';

export default {
  data(): IData {
    return {
      visible: false,
      duration: 0,
      animating: false,
      ringColor: '#900a0a',
      minute: 0,
      second: 0,
      totalInSeconds: 0,
      timer: 0,
      formState: reactive({
        minutes: 0,
        seconds: 0,
      }),
    };
  },
  computed: {
    minuteString(): string {
      return `${this.minute}`.padStart(2, '0');
    },
    secondString(): string {
      return `${this.second}`.padStart(2, '0');
    },
    cssDuration(): string {
      return `${this.duration}s`;
    },
  },
  methods: {
    handleSubmitSetting(): void {
      const { minutes = 0, seconds = 0 } = this.formState;
      this.totalInSeconds = Math.min(MAX_SECONDS, minutes * 60 + seconds);
      this.duration = this.totalInSeconds;
      this.refreshNumbers();
      this.hideModal();
    },
    toggleTimer(): void {
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
    },
    reset(): void {
      clearInterval(this.timer);
      this.totalInSeconds = 0;
      this.duration = 0;
      this.minute = 0;
      this.second = 0;
      this.animating = false;
    },
    finish(): void {
      this.reset();
      this.ringColor = 'green';
      Modal.info({ title: "Time's up" });
    },
    refreshNumbers(): void {
      const timeValue = new Date(this.totalInSeconds * 1000)
        .toISOString()
        .substring(14, 19);
      const [m, s] = timeValue.split(':');
      this.minute = +m;
      this.second = +s;
    },
    hideModal(): void {
      this.visible = false;
    },
    showModal(): void {
      this.visible = true;
    },
  },
  components: { DropSVG },
};

interface IData {
  visible: boolean;
  duration: number;
  animating: boolean;
  ringColor: string;
  minute: number;
  second: number;
  totalInSeconds: number;
  timer: number;
  formState: UnwrapRef<FormState>;
}
</script>

<template>
  <div class="wrapper">
    <div class="circle">
      <span class="time">
        <span class="time__minute">{{ minuteString }}</span
        >:<span class="time__second">{{ secondString }}</span>
      </span>
      <a class="btn-start" @click="toggleTimer()">
        {{ animating ? 'Stop' : 'Start' }}
      </a>
      <a class="btn-setting" @click="showModal()">
        <img class="btn-setting__icon" src="./shared/icons/gear.svg" />
      </a>
    </div>

    <svg class="ring-svg" height="520" width="520">
      <circle
        :style="{ '--duration': cssDuration, '--ring-color': ringColor }"
        :class="{ animate: animating }"
        class="ring"
        cx="260"
        cy="260"
        r="255"
      ></circle>
    </svg>

    <DropSVG class="drop-svg" />
  </div>
  <a-modal
    title="Settings"
    :visible="visible"
    @ok="handleSubmitSetting"
    @cancel="hideModal"
  >
    <a-form :model="formState" :label-col="{ span: 4 }">
      <a-form-item label="Minutes">
        <a-input-number v-model:value="formState.minutes" :min="0" :max="59" />
      </a-form-item>
      <a-form-item label="Seconds">
        <a-input-number v-model:value="formState.seconds" :min="0" :max="59" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: 'bebasneue-book';
  src: url('./shared/fonts/bebasneue-book-webfont.woff2') format('woff2'),
    url('./shared/fonts/bebasneue-book-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

$perimeter: 255 * 2 * 3.14159; // 2 * pi * r

.wrapper {
  font-family: 'bebasneue-book';
  position: relative;
  display: grid;
  place-content: center;
  width: 100%;
  height: 640px;
  background: #2b2a30;
  color: #fff;
  text-align: center;
}

.circle {
  --size: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background: radial-gradient(
    71.4% 71.4% at 51.7% 28.6%,
    #3a393f 0%,
    #17171a 100%
  );
  box-shadow: inset 0px 0px 114px rgba(0, 0, 0, 0.45);
  border: 10px solid #000;
  box-sizing: content-box;
  z-index: 2;
}

.time {
  display: inline-block;
  margin-top: 140px;
  font-size: 196px;
  line-height: 196px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &__minute,
  &__second {
    display: inline-block;
    width: 150px;
  }

  &__minute {
    text-align: right;
  }

  &__second {
    text-align: left;
  }
}

.btn-start {
  $letter-spacing: 0.6em;
  width: 300px;
  height: 28px;
  margin-top: 35px;
  margin-bottom: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: $letter-spacing;
  margin-right: -$letter-spacing; // hack to remove spacing at last letter
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  user-select: none;
}

.btn-setting {
  width: 50px;
  cursor: pointer;
  user-select: none;

  &__icon {
    width: 30px;
    margin: auto;
  }
}

.ring-svg,
.drop-svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  pointer-events: none;
}

.ring-svg {
  z-index: 3;
}

.drop-svg {
  z-index: 1;
}

.ring {
  fill: transparent;
  stroke: var(--ring-color);
  stroke-width: 10;
  stroke-dasharray: $perimeter;
  stroke-dashoffset: 0;
  transition: stroke-dashoffset var(--duration) linear;

  &.animate {
    stroke-dashoffset: -$perimeter;
  }
}
</style>
