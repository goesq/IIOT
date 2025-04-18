<script setup lang="ts">    
    import DeviceComponent from '@/components/DeviceComponent.vue';
    import EnvironmentComponent from '../components/EnvironmentComponent.vue';
    import { Device, Environment } from '@/models/devices';
    import { reactive, ref } from 'vue';
    import { getEnvironments } from '@/services/environments.service';

    const environments: Array<Environment> = reactive([]);

    getEnvironments()
        .then(response=>{
            response.items.forEach(item=>{
                    if(item.fields) environments.push(item.fields);
                }                
            )
        })
        .catch(error=>{
        })
    
  </script>

<template>
    <main class="flex flex-column text-center justify-content-center align-items-center">
        <h1>Seus Dispositivos! ⚡</h1>
        <section class="environments flex flex-column border-round-sm">
            <div v-for="(environment, env_id) in environments" :key="env_id">
                <EnvironmentComponent :environment="environment"/>
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
            background-color: rgb(226, 226, 226);
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
        b1 {
            background-color: #ffffff;
        }
    }
</style>

