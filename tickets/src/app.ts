import express from 'express';
import { json } from 'body-parser';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import { createTicketRouter } from './routes/new';
import { NotFoundError, errorHandler, currentUser } from '@wdtickets/common';
import { showTicketRouter } from './routes/show';
import { indexTicketRouter } from './routes/index';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);
app.use(currentUser);
// Routers
app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
