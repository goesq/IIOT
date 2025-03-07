<script setup lang="ts">
    import { Device, Environment } from '@/models/devices';
    
    const props = defineProps({
        environment: { type: Environment, required: true }
    });
    
</script>

<template>
    <section>
        <h3> {{ props.environment.name }} </h3>
        <div v-for="(device, dev_id) in environment.devices" :key="dev_id">
            <DeviceComponent :device="device" />
        </div>
    </section>
</template>

<style scoped lang="scss">   

</style>