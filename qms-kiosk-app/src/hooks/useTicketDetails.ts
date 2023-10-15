import { TicketDetailsData, loadTicketDetails } from "../common/api";
import { Progress, useProgress } from "../common/hooks";

const useTicketDetails = (service: string): Progress<TicketDetailsData> => useProgress<TicketDetailsData>(loadTicketDetails(service));

export default useTicketDetails;
