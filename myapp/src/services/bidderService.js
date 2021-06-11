import axios from 'axios';

const BIDDER_API_BASE_URL = "http://localhost:8082/bidder"
class BidderService{
      async retrieveAllBidders() {
        return await axios.get(BIDDER_API_BASE_URL);
      }

      async addBidder(bidder) {
        return await axios.post(BIDDER_API_BASE_URL, bidder);
      }
    
      async retrieveBidderById(userId) {
        return await axios.get(BIDDER_API_BASE_URL + "/" + userId);
      }

      async updateBidder(userId,bidder) {
        return await axios.put(BIDDER_API_BASE_URL + "/" + userId,bidder);
      }
    
      async deleteBidder(userId) {
        return await axios.delete(BIDDER_API_BASE_URL + "/" + userId);
      }
    
}
export default new BidderService()