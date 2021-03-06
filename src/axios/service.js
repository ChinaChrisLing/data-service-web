const _host_name =
  process.env.NODE_ENV && process.env.NODE_ENV === 'development'
    ? 'https://apple.myysq.com.cn/zhangzf'
    : '';

class Service {
  // 获取登入的用户信息
  static _get_login_data = `${_host_name}/bms/Organization/layout/get-login-info`;
  // 获取头部导航栏数据
  static _get_navigation = `${_host_name}/bms/Organization/layout/get-navigation`;

  static _get_app_auth = `${_host_name}/bms/applicationAuth/application-auth/get-app-auth`;

  static _get_metnu = `${_host_name}/bms/Organization/layout/get-menus?app_code=ManagementCenter`;

  static _get_login_out = `${
    _host_name ? _host_name : window.hostname
  }/bms/auth/logout`;

  static _get_dmp_list = `${_host_name}/bms/dataService/data-service/get-dmp-list`;
}

export default Service;
