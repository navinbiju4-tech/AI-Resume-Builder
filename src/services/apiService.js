import axiosService from "../api/axiosService";

// save resume api : called by resumeInput  componenet when finish buttom click
export const saveResumeApi = async (resumeDetails)=>{
    return await axiosService("POST","/resumes",resumeDetails)
}

// view resume api : called by view componenet when page load in the browser
export const viewResumeApi = async (resumeId)=>{
    return await axiosService("GET",`/resumes/${resumeId}`,{})
}

// get all resume api : called by saved componenet when page load in the browser
export const getAllResumeApi = async (resumeId)=>{
    return await axiosService("GET",`/resumes`,{})
}


// remove resume api : called by saved componenet when delete button clicked
export const deletelResumeApi = async (resumeId)=>{
    return await axiosService("DELETE",`/resumes/${resumeId}`,{})
}

// edit resume api : called by edit componenet when delete button clicked
export const editResumeApi = async (resumeId,resumeDetails)=>{
    return await axiosService("PUT",`/resumes/${resumeId}`,resumeDetails)
}

// add resume api : called by view  componenet when finish buttom click
export const downloadResumeApi = async (resumeDetails)=>{
    return await axiosService("POST","/downloads",resumeDetails)
}

// get all download list api : called by downloadcomponenet when page load in the browser
export const getAlldownloadApi = async ()=>{
    return await axiosService("GET","/downloads",{})
}

