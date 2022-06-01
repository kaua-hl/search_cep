const getApi = async (cep: string): Promise<any> => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const json = await response.json();
  return json;
};

export default getApi;
