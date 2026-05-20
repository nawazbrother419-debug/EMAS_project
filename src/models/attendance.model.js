import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
    {
   employee:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Auth"
   },

   checkIn:Date,

   checkOut:Date,

   workingHours:Number,

   status:{
      type:String,
      enum:["present","absent","leave"]
   }
}
);

attendanceSchema.pre("save", function(){
    const hours =  (this.checkOut - this.checkIn)
      / (1000 * 60 * 60);
      this.workingHours = hours;
})
const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;
