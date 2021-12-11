<template>
  <!-- https://stackoverflow.com/questions/42234855/  is-it-possible-to-draw-a-partial-circle-outline-in-css-open-ring-shape -->
  <div class="wrapper">
    <div class="circle">
      <span class="time">
        <span class="time__minute">{{ minuteString }}</span>:<span class="time__second">{{ secondString }}</span>
      </span>
      <a class="btn-start">Start</a>
      <a class="btn-setting" @click="showModal()">
        <img class="btn-setting__icon" src="@/assets/icons/gear.svg" />
      </a>
    </div>
    <svg height="520" width="520">
      <circle class="ring" cx="260" cy="260" r="255"></circle>
    </svg>
  </div>
  <a-button>Test</a-button>
  <a-modal
    title="Settings"
    :visible="visible"
    @ok="handleSubmitSetting"
    @cancel="handleCancel"
  >
    <p>Hello world</p>
  </a-modal>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import { Modal } from 'ant-design-vue';

@Options({
  props: {},
  // components: {
  //   'a-modal': Modal,
  // },
})
export default class Day1 extends Vue {
  public minute = 0;
  public second = 0;
  public visible = false;

  get minuteString(): string {
    return `${this.minute}`.padStart(2, '0');
  }

  get secondString(): string {
    return `${this.second}`.padStart(2, '0');
  }

  public created(): void {
    this.minute = 15;
    this.second = 0;

    setInterval(() => {
      this.second += 1;
    }, 1000);
  }

  public handleSubmitSetting(): void {
    console.log('hello');
  }

  public handleCancel(): void {
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
}

.time {
  display: inline-block;
  margin-top: 110px;
  font-size: 196px;
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
}

.btn-setting {
  width: 50px;
  cursor: pointer;

  &__icon {
    width: 26px;
  }
}

svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  pointer-events: none;
  // box-shadow: -5px 14px 44px #000000, 5px -16px 50px rgba(255, 255, 255, 0.15);
}

.ring {
  fill: transparent;
  stroke: #900a0a;
  stroke-width: 10;
  stroke-dasharray: $perimeter;
  stroke-dashoffset: 0;
  animation: rotate 6s linear 1;
}

@keyframes rotate {
  to {
    stroke-dashoffset: -$perimeter;
  }
}
</style>
