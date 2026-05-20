import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
   employeeId:String,

   department:String,

   salary:Number,

   joiningDate:Date,

   createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Auth"
   }
}
);
const Employee  = mongoose.model("Employee", employeeSchema);

export default Employee;

