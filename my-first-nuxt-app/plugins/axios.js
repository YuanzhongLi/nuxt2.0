import {
  QIITA_TOKEN,
} from '~/config';

export default function({ $axios }) {
  $axios.onRequest((config) => {
    console.log(QIITA_TOKEN);
    console.log(process.env.QIITA_TOKEN);
    if (process.env.QIITA_TOKEN) {
      config.headers.common['Authorization'] = process.env.QIITA_TOKEN;
    }
    return config;
  })
}
