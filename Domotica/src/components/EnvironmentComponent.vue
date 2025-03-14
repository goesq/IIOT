<script setup lang="ts">
    import { Environment } from '../models/devices'
    import DeviceComponent from '../components/DeviceComponent.vue';

    const props = defineProps({
        environment: { type: Environment, required: true }
    });
    
</script>

<template>
    <section class="teste flex flex-column">
        <h3>{{ props.environment.name }}</h3>
        <div v-for="(device, dev_id) in props.environment.devices" :key="dev_id">
            <DeviceComponent :device="device" />
        </div>
    </section>
</template>

<style scoped lang="scss">   

</style>