interface RequestOptions {
  method: string;
  headers: {
    'X-RapidAPI-Host': string;
    'X-RapidAPI-Key': string;
  };
}

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY || '',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY || '',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url: string, options: RequestOptions) => {
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      console.error('Failed to fetch data. Status:', res.status);
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error while fetching data:', error);
    throw error;
  }
};

