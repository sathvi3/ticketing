import { Subjects, Publisher, PaymentCreatedEvent } from "@gzticketz/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
