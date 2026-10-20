import mongoose from 'mongoose';
const schema = new mongoose.Schema({ orderNumber:{type:String,unique:true,required:true}, items:Array, orderType:String, status:String }, {timestamps:true});
export default mongoose.model('KitchenTicket', schema);
