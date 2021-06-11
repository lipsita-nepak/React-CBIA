import axios from 'axios';

const ADDRESS_API_BASE_URL = "http://localhost:8082/address"
class AddressService{
      async retrieveAllAddress() {
        return await axios.get(ADDRESS_API_BASE_URL);
      }

      async addAddress(address) {
        return await axios.post(ADDRESS_API_BASE_URL,address);
      }
    
      async retrieveAddressById(id) {
        return await axios.get(ADDRESS_API_BASE_URL + "/" + id);
      }

      async updateAddress(id,address) {
        return await axios.put(ADDRESS_API_BASE_URL + "/" + id,address);
      }
    
      async deleteAddress(id) {
        return await axios.delete(ADDRESS_API_BASE_URL + "/" + id);
      }
    
}
export default new AddressService()