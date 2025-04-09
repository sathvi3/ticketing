import { Publisher, Subjects, OrderCreatedEvent } from "@gzticketz/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
