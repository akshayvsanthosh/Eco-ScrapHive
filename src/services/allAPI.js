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

// get orders
export const getAllOrdersAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user/all-orders`,{},reqHeader)
}

// add orders
export const addOrderAPI = async (reqBody,reqHeader) => {
    return await commonAPI("POST",`${SERVER_URL}/user/order`,reqBody,reqHeader)
}

// get all orders - admin
export const getAllAdminOrdersAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/admin/all-orders`,{},reqHeader)
}

// update orderStatus - admin
export const updateOrderStatusAPI = async(oId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/admin/orderStatus/${oId}/update`,reqBody,reqHeader)
}

// update orderStatus - admin
export const updateOrderPriceAPI = async(oId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/admin/orderPrice/${oId}/update`,reqBody,reqHeader)
}

// delete orderStatus - both
export const deleteOrderAPI = async(oId,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/order/${oId}/delete`,{},reqHeader)
}

// get user details
export const getUserDetailsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user/details`,{},reqHeader)
}

// update user details
export const updateUserDetailsAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/user/update`,reqBody,reqHeader)
}

// delete account
export const deleteAccount = async (reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/user/delete`,{},reqHeader)
}