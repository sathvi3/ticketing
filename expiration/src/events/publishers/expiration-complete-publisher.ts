import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@gzticketz/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
