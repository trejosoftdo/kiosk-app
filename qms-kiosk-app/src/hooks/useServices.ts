import { ServicesData, loadServices } from "../common/api";
import { Progress, useProgress } from "../common/hooks";

const useServices = (): Progress<ServicesData> => useProgress<ServicesData>(loadServices());

export default useServices;
