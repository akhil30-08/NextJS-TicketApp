import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URL);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  { timestamps: true }
);

export const ticket =
  mongoose.models.ticket || mongoose.model('ticket', ticketSchema);
