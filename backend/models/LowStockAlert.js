import mongoose from 'mongoose';
const schema = new mongoose.Schema({ ingredientId:mongoose.Schema.Types.ObjectId, ingredientName:String, message:String, resolved:{type:Boolean,default:false} }, {timestamps:true});
export default mongoose.model('LowStockAlert', schema);
