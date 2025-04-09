import { Publisher, Subjects, TicketCreatedEvent } from "@gzticketz/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
