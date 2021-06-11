import axios from "axios"
const LOCAL_HOST_URL = "http://localhost:8081/bid";


class BidService{
    async getAllBids(){
    return await axios.get(LOCAL_HOST_URL);
    }
    
    async addBid(bid){
        return await axios.post(LOCAL_HOST_URL,bid);
    }

    async deleteBid(bidId){
        return await axios.delete(LOCAL_HOST_URL +"/"+bidId);
    }

    async getBidById(bidId){
        return await axios.get(LOCAL_HOST_URL + "/"+bidId);
    }

    async updateBid(bid, bidId){
        return await axios.put(LOCAL_HOST_URL + bid);
    }
}
export default new BidService();
