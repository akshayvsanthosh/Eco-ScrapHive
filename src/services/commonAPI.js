import axios from "axios";

const commonAPI = async (httpMethod,url,reqBody,reqHeader)=>{
    const reqConfiq={
        method:httpMethod,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfiq).then((res)=>{
        return res
    }).catch((error)=>{
        return error
    })
}

export default commonAPI

// import axios from "axios";

// const commonAPI = async (httpMethod, url, reqBody, reqHeader) => {
//   try {
//     const reqConfiq = {
//       method: httpMethod,
//       url,
//       data: reqBody,
//       headers: reqHeader || { "Content-Type": "application/json" },
//     };
//     const response = await axios(reqConfiq);
//     return response;
//   } catch (error) {
//     // This will correctly propagate the error to the calling function
//     throw error;
//   }
// };

// export default commonAPI;