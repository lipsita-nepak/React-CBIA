import axios from "axios";
const BANK_API_BASE_URL = "http://localhost:8082/bank";

class BankService{
    async getAllBanks(){
        return await axios.get(BANK_API_BASE_URL);
    }
    async deleteBank(bankId){
        return await axios.delete(BANK_API_BASE_URL+"/"+ bankId);
    }
    async addBank(bank) {
        return await axios.post(BANK_API_BASE_URL,bank);
    }
    async viewBank(bankId){
        return await axios.get(BANK_API_BASE_URL + "/" +bankId);
    }
    async updateBank(bankId,bank){
        return await axios.put(BANK_API_BASE_URL+"/"+ bankId, bank);
      }
}
export default new BankService;