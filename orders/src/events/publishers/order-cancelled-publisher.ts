import { Publisher, Subjects, OrderCancelledEvent } from "@gzticketz/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
