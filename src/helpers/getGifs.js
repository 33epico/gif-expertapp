export const getGifs = async( category) => {

    //monta la uri de conexión
    const apiKey = 'FmExXKPeCLDPDH8qZZzEmIPpnyYirsIe';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${ apiKey }`

    //obtiene los datos del endpoint en forma de json
    const resp   = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        //poniendo ? utiliza el resto si viene images
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;

}