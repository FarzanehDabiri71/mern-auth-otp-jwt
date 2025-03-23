// POsT: http://localhost:8000/api/register
// * @params:{
//   "username": "example123",
//  "password":"admin123"
// "email": "example@gmail.com",
// "firstName": "bill",
// "lastName" : "wiliam",
// "mobile" : 8009860560
// "address" : "Apt. 556, Kulas Light, Gwenborough"
// "profile" : ""
// }
export async function register(req, res) {
  res.json("register route");
}

// POsT: http://localhost:5000/api/login
// * @params:{
//  "username": "example123",
//  "password": "admin123"

// }
export async function login(req, res) {
  res.json("login route");
}

// GET: http://localhost:5000/api/user/example123
export async function getUser(req, res) {
  res.json("getUser route");
}

// PUT: http://localhost:8000/api/updateuser
// * @param: {
// "id":"<userid>"
// }
// body:{
//   firstName:'',
//   address:'',
//   profile:'',
// }
export async function updateUser(req, res) {
  res.json("updateUser route");
}

// GET: http://localhost:8000/api/generateOTP
export async function generateOTP(req, res) {
  res.json("generateOTP route");
}

// GET: http://localhost:8000/api/verifyOTP
export async function verifyOTP(req, res) {
  res.json("verifyOTP route");
}

// successfully redirect user whe OTP is valid
// GET: http://localhost:8000/api/createResetSession
export async function createResetSession(req, res) {
  res.json("createResetSession route");
}

//update the password when we have valid session
//** PUT: http://localhost:8000/api/resetPassword */
export async function resetPassword(req, res) {
  res.json("resetPassword route");
}
