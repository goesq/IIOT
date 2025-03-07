<script setup lang="ts">
import { Device } from '@/models/devices';

const props = defineProps({
  device: { type: Device, required: true }
});

const toggleState = (state: boolean) => {
  props.device.state = state;
};
</script>

<template>
  <section class="`flex flex-column text-center align-items-center 
        justify-content-center device-${props.device.state}`">
    <h5>{{ props.device.name }}</h5>
    <span class="material-icons-round">{{ props.device.icon }}</span>   
    <div class="flex-row">
    <button 
      :style="{ backgroundColor: props.device.state ? 'green' : 'white', color: props.device.state ? 'white' : 'black' }" 
      @click="toggleState(true)"
    >
      ON
    </button>
    <button 
      :style="{ backgroundColor: !props.device.state ? 'red' : 'white', color: !props.device.state ? 'white' : 'black' }" 
      @click="toggleState(false)"
    >
      OFF
    </button>
</div>
  </section>
</template>

<style scoped lang="scss">

section {
    background-color: rgb(209, 255, 255);
    border: 1px solid gray;
    width: 10rem;
    margin: 0.5rem; 
    .icons{
            width: 1.5rem;
            margin: 0.5rem;        
            color: rgb(87, 82, 82);    
        }
}

button {
  padding: 10px 20px;
  border: 1px black;
  border-radius: 7px;
  cursor: pointer;
  margin: 5px;
  transition: all 0.15s ease;
  padding: 20px;
  font-size: large;
}
</style>
