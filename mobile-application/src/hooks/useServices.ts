import { ServicesData, loadServices } from "../common/api";
import { Progress, useProgress } from "../common/hooks";

/**
 * Hook to get the available services
 * @param {number} categoryId
 * @returns Progress<ServicesData>
 */
const useServices = (categoryId: number): Progress<ServicesData> => useProgress<ServicesData>(loadServices(categoryId));

export default useServices;
