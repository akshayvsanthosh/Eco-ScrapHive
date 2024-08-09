import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";

// registerAPI
export const registerAPI = async (reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/register`,reqBody)
}

// loginAPI
export const loginAPI = async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/login`,reqBody)
}

// add category
export const addCategoryAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${SERVER_URL}/admin/category`,reqBody,reqHeader)
}

// get all-category
export const getAllCategoryAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/admin/all-category`,'',reqHeader)
}

// delete category
export const deleteCategoryAPI = async(cid,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/admin/category/${cid}/delete`,{},reqHeader)
}

// edit category
export const editCategoryAPI = async(cid,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/admin/category/${cid}/edit`,reqBody,reqHeader)
}

// add item
export const addItemAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${SERVER_URL}/admin/addItem`,reqBody,reqHeader)
}

// get all-category
export const getAllItemAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/admin/all-item`,'',reqHeader)
}

// edit item
export const editItemAPI = async(itmid,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/admin/item/${itmid}/edit`,reqBody,reqHeader)
}

// delete item
export const deleteItemAPI = async(itmid,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/admin/item/${itmid}/delete`,{},reqHeader)
}