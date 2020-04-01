import axios from 'axios';

export const getOrder = () =>
  axios.get(
    'https://raw.githubusercontent.com/lucasnr/chaordic-frontend-challenge-2/master/assets/pedido.json'
  );
