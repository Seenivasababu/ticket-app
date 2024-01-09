import mongoose, { Schema } from 'mongoose';
const MONGO_URL = process.env.MONOGODB_URI ?? "";
mongoose.connect(MONGO_URL)
mongoose.Promise = global.Promise;

const ticketSchema = new Schema({
  title: String,
  description: String,
  category: String,
  priority: Number,
  progress: Number,
  status: String,
  active: Boolean,
},{
   timestamps:true
});

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket",ticketSchema)

export default Ticket