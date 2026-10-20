import mongoose from 'mongoose';
const schema = new mongoose.Schema({ name:{type:String,required:true}, description:String, price:{type:Number,required:true,min:0}, category:String, imageUrl:String, isAvailable:{type:Boolean,default:true}, recipe:[{ ingredientId:{type:mongoose.Schema.Types.ObjectId,ref:'Ingredient',required:true}, quantityRequired:{type:Number,required:true,min:0} }] }, {timestamps:true});
export default mongoose.model('MenuItem', schema);
