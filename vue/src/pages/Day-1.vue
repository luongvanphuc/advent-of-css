<template>
  <!-- https://stackoverflow.com/questions/42234855/  is-it-possible-to-draw-a-partial-circle-outline-in-css-open-ring-shape -->
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
        <img class="btn-setting__icon" src="@/assets/icons/gear.svg" />
      </a>
    </div>
    <svg class="ring-svg" height="520" width="520">
      <circle
        v-bind:style="{ '--duration': cssDuration, '--ring-color': ringColor }"
        v-bind:class="{ animate: animating }"
        class="ring"
        cx="260"
        cy="260"
        r="255"
      ></circle>
    </svg>

    <svg
      class="drop-svg"
      width="622"
      height="637"
      viewBox="0 0 622 637"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_108_2)">
        <circle cx="308" cy="320" r="259" fill="black" />
      </g>
      <defs>
        <filter
          id="filter0_dd_108_2"
          x="0"
          y="-5"
          width="622"
          height="642"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="5" dy="-16" />
          <feGaussianBlur stdDeviation="25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_108_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-5" dy="14" />
          <feGaussianBlur stdDeviation="22" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_108_2"
            result="effect2_dropShadow_108_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_108_2"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
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

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { reactive } from 'vue';
import type { UnwrapRef } from 'vue';
import { Modal } from 'ant-design-vue';

interface FormState {
  minutes: number;
  seconds: number;
}

const MAX_SECONDS = 3599; // 59:59 (m:s)

@Options({
  props: {},
})
export default class Day1 extends Vue {
  public visible = false;
  public duration = 0;
  public animating = false;
  public ringColor = '#900a0a';

  private minute = 0;
  private second = 0;
  private totalInSeconds = 0;
  private timer = 0;

  public formState: UnwrapRef<FormState> = reactive({
    minutes: 0,
    seconds: 0,
  });

  get minuteString(): string {
    return `${this.minute}`.padStart(2, '0');
  }

  get secondString(): string {
    return `${this.second}`.padStart(2, '0');
  }

  get cssDuration(): string {
    return `${this.duration}s`;
  }

  public handleSubmitSetting(): void {
    const { minutes = 0, seconds = 0 } = this.formState;
    this.totalInSeconds = Math.min(MAX_SECONDS, minutes * 60 + seconds);
    this.duration = this.totalInSeconds;
    this.refreshNumbers();
    this.hideModal();
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
    Modal.info({ title: "Time's up" });
  }

  private refreshNumbers(): void {
    const timeValue = new Date(this.totalInSeconds * 1000)
      .toISOString()
      .substr(14, 5);
    const [m, s] = timeValue.split(':');

    this.minute = +m;
    this.second = +s;
  }

  public hideModal(): void {
    this.visible = false;
  }

  public showModal(): void {
    this.visible = true;
  }
}
</script>

<style lang="scss" scoped>
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

  &.animate {
    animation: rotate var(--duration) linear 1;
  }
}

@keyframes rotate {
  to {
    stroke-dashoffset: -$perimeter;
  }
}
</style>
