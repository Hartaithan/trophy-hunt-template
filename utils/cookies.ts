export const getCookieExpires = () => {
  const expires = new Date();
  expires.setDate(expires.getDate() + 365);
  return expires;
};
