import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";

//add video called by add
export const addVideoAPI = async (video) =>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}