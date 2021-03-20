import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@wdtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
