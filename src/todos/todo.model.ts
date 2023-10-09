import { Schema, Document } from 'mongoose';

export interface Todo extends Document {
  title: string;
  description: string;
  isDone: boolean;
}

export const TodoSchema = new Schema({
  title: String,
  description: String,
  isDone: Boolean,
});
