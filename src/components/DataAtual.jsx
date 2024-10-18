const data = new Date()

export const anoAtual = () => {
  return data.getFullYear();
};

export const mesAtual = () => {
  return data.getMonth();
};

export const diaAtual = () => {
  return data.getDay();
};