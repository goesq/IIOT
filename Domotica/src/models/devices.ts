
export class Device {
    nome: string = "";
    state: boolean = false;
    color: string = "#4a3670";
}

export class Places {
    nome: string = "";
    devices: Array<Device> = []
}