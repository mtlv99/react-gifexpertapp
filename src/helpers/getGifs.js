export const getGifs = async (category) => {
  // Normalmente el API key va dentro de un archivo de configuración en el backend,
  // y nunca es expuesto al front end.
  let api_key = "cpH28UEt99R4796zsY3kyyj0cnzIOgz5";
  let limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURI(
    category
  )}&limit=${limit}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
