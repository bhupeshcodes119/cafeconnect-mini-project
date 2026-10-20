import mongoose from 'mongoose';
const schema = new mongoose.Schema({ name:{type:String,required:true,unique:true}, unit:{type:String,required:true}, currentQuantity:{type:Number,required:true,min:0}, minThreshold:{type:Number,required:true,min:0} }, {timestamps:true});
export default mongoose.model('Ingredient', schema);
