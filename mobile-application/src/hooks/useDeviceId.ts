import { useEffect, useState } from "react";
import { loadServices } from "../common/api";
import { getDeviceId } from "../common/device-connection";
import { useProgress } from "../common/hooks";
import { DeviceData } from "../common/models";

/**
 * Hook to get the device identifier
 * @returns Progress<DeviceData>
 */
const useDeviceId = (): Progress<DeviceData> => useProgress<DeviceData>(getDeviceId(), (deviceId) => ({ deviceId }));

export default useDeviceId;
