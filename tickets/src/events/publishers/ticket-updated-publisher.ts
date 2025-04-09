import { Publisher, Subjects, TicketUpdatedEvent } from "@gzticketz/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
