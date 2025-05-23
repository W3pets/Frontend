export const isLive = process.env.NODE_ENV === 'production';

const consts = {
  global: {
    url: {
      api: 'https://w3pets.nw.r.appspot.com/',
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
    imgTypes: '.jpg,.jpeg,.gif,.png',
    imgSize: 2 * 1024 * 1024, // 2mb
    vidSize: 20 * 1024 * 1024, // 20mb
    vidTypes: '.mp4,.avi,.mov',
  },
};
export default consts;
