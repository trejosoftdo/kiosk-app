import { Progress, useProgress } from "../common/hooks";
import { TicketDetailsData } from "../common/models";
import { loadTicketDetails } from "../common/services/ticket";

/**
 * Hook used to get the details of a ticket for a given service.
 * @param  {string} service
 * 
 * @returns Progress<TicketDetailsData>
 */
const useTicketDetails = (service: string): Progress<TicketDetailsData> => useProgress<TicketDetailsData>(loadTicketDetails(service));

export default useTicketDetails;
