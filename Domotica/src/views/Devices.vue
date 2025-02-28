<script setup lang="ts">
    import { Environment } from "@/models/devices";
    import { reactive, ref} from 'vue';
    import { Device } from "@/models/devices";

    const environments: Array<Environment> = reactive([]);
    
    const ar: Device = reactive(new Device());
    ar.name = 'Ar condicionado';
    ar.color = '#ba1307'

    const tv: Device = reactive(new Device());
    tv.name = 'Smart TV';
    tv.color = '#f2f244'
    tv.state = true;

    const iluminacao: Device = reactive(new Device());
    iluminacao.name = 'Iluminação';
    iluminacao.color = '#00eddd'

    const sala: Environment = reactive(new Environment());
    sala.name = 'Sala';
    sala.devices = [ar,tv,iluminacao];
    //sala.devices.push(ar);
    //sala.devices.push(tv);
    //sala.devices.push(iluminacao);
    //sala.devices = [...sala.devices,tomada];
    //sala.devices = [ar,tv,iluminacao,tomada];

    environments.push(sala);

</script>

<template>
    <main class="flex flex-column">
        <h1>Devices Page!</h1>
        <section class="environments flex flex-colunm">

        </section>
    </main>
</template>

<style scoped lang="scss">
    main{
        width: 100vw;
        min-width: 100vh;
        .environments{
            width: 98;
        }
    }
</style>