export const host = "http://localhost:8080"
export const loginRoute = `${host}/api/login`;
export const formRoute = `${host}/api/form`;
export const createRegistationRoute = `${host}/api/create-register`;
export const getStatsData = `${host}/api/stats`; 
// axios.post(getStatsData, {"userId" : 2});
// data return : 
// {
// "errCode": 0,
//     "errMessage": "get data success",
//     "registerDate": [0, 0, 1, 3, 5, 8, 5, 7, 8, 7, 10, 7, 0],
//     "expireDate": [0,0,1,3,5,8,5,7,8,7,10,7,0]
// }
