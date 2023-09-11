export const BASE_URL = 'https://punchysports.com';

export default endPoints = {
  baseUrl: BASE_URL,

  // Auth Endpoints
  register: 'auth/register',
  login: 'auth/login',
  forgetPassword: 'auth/forgetpassword',
  verifyOtp: 'auth/verifyotp',
  resetPassword: 'auth/resetpassword',
  changePassword: 'auth/changePassword',
  verifyUser: 'auth/verifyuser',
  resendOtp: 'auth/resend',
  deleteUser: 'user/delete',
  updateprofile: 'auth/updateprofile',
  getProfile: 'auth/profile',
  getUserById: 'auth/getUserById',
  logout: 'auth/logout',
};
