export const isLive = process.env.NODE_ENV === 'production';

const consts = {
  global: {
    url: {
      api: 'http://ec2-51-20-31-127.eu-north-1.compute.amazonaws.com',
      app: isLive ? '' : 'http:localhost:3000',
      socials: {
        x: '',
        whatsApp: '',
        telegram: '',
        instagram: '',
      },
    },
  },
  files: {
    types: '.jpg,.jpeg,.gif,.png',
    size: 2 * 1024 * 1000, // 2mb
  },
};
export default consts;
