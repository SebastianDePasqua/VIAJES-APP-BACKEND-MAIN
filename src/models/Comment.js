import { Schema, model } from 'mongoose';

const CommentSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
  versionKey: false,
});

export const CommentModel = model('Comment', CommentSchema);
