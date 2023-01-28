import axios from 'axios';

// Fetch images from Pixabay API using Axios

async function fetchImages(name, page, perPage) {
    const baseURL = 'https://pixabay.com/api/';
    const key = '11240134-58b8f655e9e0f8ae8b6e8e7de';
    

  try {
    const response = await axios.get(
      `${baseURL}?key=${key}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
}

export { fetchImages };