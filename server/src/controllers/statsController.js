import statsService from "../services/statsService"
import db from '../models/index';


let handleStats = async (req, res) => {
    let userId = req.body.userId;
    let data = await statsService.handleStats(userId);
    let registerDate = [];
    let expireDate = [];
    for (let i = 0; i <= 12; i++) {
        registerDate[i] = 0;
        expireDate[i] = 0;
    }
    for (let i = 0; i < data.length; i++) {
        let registerMonth = new Date(data[i].registerDate).getMonth();
        let expireMonth = new Date(data[i].expireDate).getMonth();
        registerDate[registerMonth]++;
        expireDate[expireMonth]++;
    }

    return res.status(200).json({
        errCode: 0,
        errMessage: "get data success",
        registerDate: registerDate,
        expireDate: expireDate
    })


}

module.exports = {
    handleStats: handleStats,
}