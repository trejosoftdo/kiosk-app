import { useEffect, useState } from "react";
import { loadServices } from "../common/api";
import { getDeviceId } from "../common/helpers";
import { useProgress } from "../common/hooks";


type DeviceData = {
  deviceId: string;
}

/**
 * Hook to get the device identifier
 * @returns Progress<DeviceData>
 */
const useDeviceId = (): Progress<DeviceData> => useProgress<DeviceData>(getDeviceId(), (deviceId) => ({ deviceId }));

export default useDeviceId;
