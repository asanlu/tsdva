
// 获取权限auth
export function getAuthority() {
  let authority = sessionStorage.getItem('apikey');
  return authority ? JSON.parse(authority) : '';
}

// 保存auth
export function setAuthority(auth: any) {
  return sessionStorage.setItem('apikey', JSON.stringify(auth));
}
