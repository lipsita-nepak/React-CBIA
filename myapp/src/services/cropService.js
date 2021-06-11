import axios from "axios";
const CROP_API_BASE_URL = "http://localhost:8081/api/crop";
class CropService{
    async getAllCrops(){
        return await axios.get(CROP_API_BASE_URL+"/view");
    }
    async deleteCrop(cropId){
        return await axios.delete(CROP_API_BASE_URL+"/"+cropId);
    }
    async addCrop(crop) {
        return await axios.post(CROP_API_BASE_URL,crop);
    }
    async viewCrop(cropId){
        return await axios.get(CROP_API_BASE_URL + "/id/" +cropId);
    }
    async updateCrop(cropId,crop){
        return await axios.put(CROP_API_BASE_URL+"/update/"+cropId,crop);
    }
    async getCropByName(cropName){
        return await axios.get(CROP_API_BASE_URL + "/name/" +cropName);
    }
}
export default new CropService();