import { ServicesData, loadServices } from "../common/api";
import { Progress, useProgress } from "../common/hooks";

/**
 * Hook to get the available services
 * @returns Progress<ServicesData>
 */
const useServices = (): Progress<ServicesData> => useProgress<ServicesData>(loadServices());

export default useServices;
