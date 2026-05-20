
class BaseServices{
    constructor(services){
        this.service = services;
    }

    add = async(data)=>{
        return await this.service.create(data);
    }
    get = async ()=>{
        return await this.service.find();
    }
    update = async (id,data)=>{
        const updatedData = await this.service.findByIdAndUpdate(id,data,{new:true});
        if(!updatedData) throw new Error("updation failed");
        return updatedData;
    }
    delete = async (id)=>{
        const deletedData = await this.service.findByIdAndDelete(id);
        if(!deletedData) throw new Error("Delete failed");
        return deletedData;
    }
        
         
}


export default BaseServices;

