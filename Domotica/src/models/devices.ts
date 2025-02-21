
export type Device = {
    nome: string,
    state: boolean,
}

export type Places = {
    nome: string,
    devices: Array<Device>
}