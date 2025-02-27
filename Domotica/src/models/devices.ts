
export class Device {
    name: string = "";
    state: boolean = false;
    color: string = "#4a3670";
}

export class Environment {
    name: string = "";
    devices: Array<Device> = []
}