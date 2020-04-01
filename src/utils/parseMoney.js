const moneyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

export default function parseMoney(number) {
  return moneyFormatter.format(number);
}
