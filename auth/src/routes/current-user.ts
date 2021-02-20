import express, { RequestHandler } from 'express';

import { currentUser, requireAuth } from '@wdtickets/common';

const router = express.Router();

router.get(
  '/api/users/currentuser',
  currentUser as RequestHandler,
  requireAuth as RequestHandler,
  (req, res) => {
    res.send({ currentUser: req.currentUser || null });
  }
);

export { router as currentUserRouter };
