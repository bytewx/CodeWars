function validateUsr(username) {
  const res = /^[a-z0-9_]{4,16}$/.test(username);
  return res;
}
