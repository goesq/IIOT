<script setup lang="ts">    
    import DeviceComponent from '@/components/DeviceComponent.vue';
import { Device, Environment } from '@/models/devices';
    import { reactive, ref } from 'vue';

    const environments: Array<Environment> = reactive([]);
        
    const ar: Device = reactive(new Device());
    ar.name = 'Ar condicionado';
    ar.color = '#3266a8';
    ar.icon = 'mode_fan';

    const tv: Device = reactive(new Device());
    tv.name = 'Smart TV';
    tv.color = '#a5c949';
    tv.state = true;   
    tv.icon = 'tv';

    const iluminacao: Device = reactive(new Device());
    iluminacao.name = 'Iluminação';
    iluminacao.color = '#4d0d75';
    iluminacao.icon = 'light'

    const tomada: Device = reactive(new Device());
    tomada.name = 'Tomada Inteligente';
    tomada.color = '#4d0d75';

    const sala: Environment = reactive(new Environment());
    sala.name = 'Sala';
    sala.devices = [ar,tv,iluminacao,tomada];
    //sala.devices.push(ar);
    //sala.devices.push(tv);
    //sala.devices.push(iluminacao);
 
    environments.push(sala);  
    
  </script>
<template>
    <main class="flex flex-column text-center justify-content-center align-items-center">
        <h1>Devices page!!!!</h1>
        <section class="environments flex flex-column border-round-sm">
            <div v-for="(environment, env_id) in environments" :key="env_id">
                <h3>{{ environment.name }}</h3>
                <EnvironmentComponent :environment="environment" />
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">  
    main{
        width: 100vw;
        min-height: 100vh;
        .environments{
            width: 90vw;
            min-height: 95vh;
            background-color: rgb(226, 218, 218);
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
    }


</style>

