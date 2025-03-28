export const isLive = process.env.NODE_ENV === 'production';

const consts = {
  global: {
    url: {
      logo: '/logo.svg',
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
};
export default consts;
