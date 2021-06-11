import axios from "axios";
const FARMER_API_BASE_URL = "http://localhost:8082/farmer";

class FarmerService{
    async getAllFarmers(){
        return await axios.get(FARMER_API_BASE_URL);
    }
    async deleteFarmer(userId){
        return await axios.delete(FARMER_API_BASE_URL+"/"+ userId);
    }
    async addFarmer(farmer) {
        return await axios.post(FARMER_API_BASE_URL,farmer);
    }
    async viewFarmer(userId){
        return await axios.get(FARMER_API_BASE_URL + "/" +userId);
    }
    async updateFarmer(userId,farmer){
        return await axios.put(FARMER_API_BASE_URL+"/"+ userId, farmer);
      }
}
export default new FarmerService();