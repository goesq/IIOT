import type { ApiResponse, Device, Environment, EnvironmentResponse } from "@/models/devices";
import { getCdn, getApi } from "./services.config";

export const getEnvironments = (): Promise<ApiResponse<EnvironmentResponse,Device>>=> {
    return getCdn().get("?content_type=environment");
}