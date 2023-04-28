import statsService from "../services/statsService"
import db from '../models/index';


let handleStats = async (req, res) => {
    let userId = req.params.id;
    let data = await statsService.handleStats(userId);
    console.log(data)
    let month_expired = [];
    function Time() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        let now = new Date(today)
        return now;
    }
    function Convert(a) {
        a *= 0.001
        a /= 3600
        a /= 24
        return a
    }
    for (let i = 0; i <= 12; i++) {
        month_expired[i] = 0;
    }
    for ( let i = 0; i < data.length; i++ ) {
        let a = new Date(data[i].expireDate)
        for ( let j = 0; j < 12; j++) {
            if ( a.getMonth() + 1 == j + 1) {
                if ( Convert(Time() - a) >= 0) {
                    ++month_expired[j]
                } 
                break
            }
        }
    }

    return res.status(200).json({
        errCode: 0,
        errMessage: "get data success",
        month_expired: month_expired
    })

}
let handleGetRegister = async (req, res) => {
    let userId = req.params.id;
    console.log(userId)
    let data = await statsService.handleStats(userId);

    return res.status(200).json({
        errCode: 0, 
        errMessage: "get data success",
        data: data
    })

}
module.exports = {
    handleStats: handleStats,
    handleGetRegister: handleGetRegister
}