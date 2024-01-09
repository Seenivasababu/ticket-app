import mongoose, { Schema } from 'mongoose';

mongoose.connect("mongodb+srv://Seenivasababu:Um1OGPQRndD2LpHS@cluster0.xy5zdle.mongodb.net/ticketDB?retryWrites=true&w=majority");
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