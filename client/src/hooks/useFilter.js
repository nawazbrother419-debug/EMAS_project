import {useState} from "react";

const useFilter = ()=>{

const [search,setSearch]
= useState("");

const [startDate,setStartDate]
= useState("");

const [endDate,setEndDate]
= useState("");

return {

search,
setSearch,

startDate,
setStartDate,

endDate,
setEndDate

};

}

export default useFilter;