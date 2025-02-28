
export class Device {
    name: string = "";
    state: boolean = false;
    color: string = "#4a3670";
    icon: string = "device";
}

export class Environment {
    name: string = "";
    devices: Array<Device> = []
}