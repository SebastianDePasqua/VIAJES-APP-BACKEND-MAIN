import { Router } from 'express';

import {
  ctrlCreateComment,
  ctrlListComment,
  ctrlGetCommentById,
  ctrlUpdateComment,
  ctrlDeleteComment,
} from '../controllers/comment.controller.js';

import {
  createCommentValidations,
  deleteCommentValidations,
  getCommentValidations,
  listCommentValidations,
  updateCommentValidations,
} from '../models/validations/comment-validations.js';

const commentRouter = Router();

commentRouter.post('/:postId/', createCommentValidations, ctrlCreateComment);
commentRouter.get('/:postId/', listCommentValidations, ctrlListComment);

musicRouter.get('/:postId/:commentId', getCommentValidations, ctrlGetCommentById);
musicRouter.patch('/:postId/:commentId', updateCommentValidations, ctrlUpdateComment);
musicRouter.delete('/:postId/:commentId', deleteCommentValidations, ctrlDeleteComment);

export { musicRouter };
