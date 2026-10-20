import mongoose from 'mongoose';
const schema = new mongoose.Schema({ orderNumber:{type:String,unique:true,required:true}, customerId:{type:mongoose.Schema.Types.ObjectId,ref:'User'}, items:[{ menuItemId:{type:mongoose.Schema.Types.ObjectId,ref:'MenuItem'}, name:String, price:Number, quantity:Number }], totalBill:Number, orderType:{type:String,enum:['dine-in','takeaway'],required:true}, status:{type:String,enum:['Placed','Accepted','Preparing','Ready','Completed'],default:'Placed'} }, {timestamps:true});
export default mongoose.model('Order', schema);
