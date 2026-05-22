import Attendance from "../models/attendance.model.js";
import baseServices from "./base.services.js";

class AttendanceServices extends baseServices {
  constructor() {
    super(Attendance);
  }

  getSingle = async (id) => {
    return await this.service.findById(id);
  };

  getFilter = async (query) => {
    try {
      const { filter, startDate, endDate } = query;

      let filter = {};

      if (search) {
        filter.employeeName = {
          $regex: search,
          $options: "i",
        };
      }
      if (startDate && endDate) {
        filter.createdAt = {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        };
      }
      const data = await this.service.find(filter);
      return data;
    } catch (error) {
        throw new Error(error);
        
    }
  };
}

export default new AttendanceServices();
