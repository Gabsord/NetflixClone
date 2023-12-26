export const apiBase = 'https://api.themoviedb.org/3'
export const apiKey = 'b5b75ddc5c3b1d2fc22c5323da6614a0'
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWI3NWRkYzVjM2IxZDJmYzIyYzUzMjNkYTY2MTRhMCIsInN1YiI6IjY1NjZmNmZkMTU2Y2M3MDBjYTcwZTFiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.koovhADgqoZL-uLAtijGnLX2HUG9WImOBZ1QADhJ1P4'
    }
  };

export const fetching = async (endpoint) => {
    const response = await fetch(`${apiBase}${endpoint}${apiKey}`,options)
    const data = await response.json()
    return data
}

export const featured = {
    slug :'featured' ,
    title:'Destaque',
    items:(`/tv/popular?api_key=${apiKey}&language=pt-BR`),
}

export const Categorys = [
    {
        slug: 'originais',
        title:'Originais da Netflix',
        items:(`/discover/tv?with_network=213&language=pt-BR$api_key=${apiKey}`)
    },
    {
        slug: 'trending',
        title:'Recomendados para você',
        items:(`/trending/all/week?language=pt-BR&api_key=${apiKey}`)
    },
    {
        slug:'topRated',
        title:'Em Alta',
        items:(`/movie/top_rated?language=pt-BR&api_key=${apiKey}`)
    },
    {
        slug:'action',
        title:'Ação',
        items:(`/discover/movie?with_genres=28&langauge=pt-BR&api_key=${apiKey}`)
    },
    {
        slug:'comedy',
        title:'Comédia',
        items:(`/discover/movie?with_genres=35&langauge=pt-BR&api_key=${apiKey}`)
    },
    {
        slug:"horror",
        title:'Terror',
        items: (`/discover/movie?with_genres=27&langauge=pt-BR&api_key=${apiKey}`)
    },
    {
        slug:'romance',
        title:'Romance',
        items:(`/discover/movie?with_genres=10749&langauge=pt-BR&api_key=${apiKey}`)
    },
    {
        slug:'documentary',
        title:'Documentary',
        items:(`/discover/movie?with_genres=99&langauge=pt-BR&api_key=${apiKey}`)
    }
]


