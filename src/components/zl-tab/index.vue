<template>
    <div class="tab-group">
      <div class="tab-container">
        <div class="tab"
        :class="[{'tab-no-animate': !animate}]"
        ref="nav">
          <slot></slot>
          <div
          v-if="animate"
          class="vux-tab-ink-bar"
          >
          <span
            class="vux-tab-bar-inner"
            :style="innerBarStyle"
            v-if="customBarWidth"></span>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
import { parentMixin } from './mixins/multi-items'
export default {
    name: 'tab-group',
    mixins: [parentMixin],
    data() {
        return {
            
        }
    },
    components: {
        
    },
    computed: {
      innerBarStyle () {
        return {
          width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
          background: this.barActiveColor || this.activeColor
        }
      },
    },
    props:{
      lineWidth: {
        type: Number,
        default: 3
      },
      activeColor: String,
      barActiveColor: String,
      defaultColor: String,
      animate: {
        type: Boolean,
        default: true
      },
      customBarWidth: [Function, String]
    }
}
</script>

<style lang="less">
.tab-group {
  position: relative;
  padding-top: 44px;
}
.tab-container {
  height: 44px;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  position: absolute;
}
.tab {
  display: flex;
  background-color: #fff;
  height: 44px;
  position: relative;
}

.tab button {
  padding: 0;
  border: 0;
  outline: 0;
  background: 0 0;
  appearance: none;
}

.tab .tab-item{
  display: block;
  flex: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;
  background-size: 100% 1px;
  font-size: 14px;
  text-align: center;
  line-height: 44px;
  color: @tab-text-default-color;
}
.tab .tab-item.tab-selected {
  color: #666;
  border-bottom: 3px solid #666;
}
.tab.tab-no-animate .tab-item.tab-selected {
  background: 0 0;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
/* .component-fade-leave-active for below version 2.1.8 */ 
  opacity: 0;
}
</style>