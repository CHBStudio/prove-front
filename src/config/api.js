const api = '/api';

export default {
  userGet: `${api}/user/get`,
  userLogin: `${api}/user/login`,
  userRegistration: `${api}/user/register`,
  userLogout: `${api}/user/logout`,

  landingGet: `${api}/landing/get`,

  courseGoToPay: courseId => `${api}/course/pay?id=${courseId}`,

  courseGet: `${api}/course/get`,

  vkSocialLogin: `${api}/user/vk/`,
  fbSocialLogin: `${api}/user/fb/`,
}