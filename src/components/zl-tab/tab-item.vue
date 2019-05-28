<template>
    <div class="tab-item"
    :class="[currentSelected ? activeClass : '', {
      'tab-selected': currentSelected
    }]" 
    :style="{
      color: currentSelected? this.$parent.activeColor:''
    }" 
    @click="onItemClick">
        <slot></slot>
        {{currentSelected}}
    </div>
</template>

<script>
import { childMixin } from './mixins/multi-items'
export default {
    name: 'tab-item',
    mixins: [childMixin],
    props:{
      activeClass: String
    },
    data() {
        return {
            
        }
    },
    components: {
        
    }
}
</script>

<style lang="less" scoped>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
/* .component-fade-leave-active for below version 2.1.8 */ 
  opacity: 0;
}
</style>