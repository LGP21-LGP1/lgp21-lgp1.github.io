const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': prod ? '/lgp21-lgp1.github.io' : '',
};
