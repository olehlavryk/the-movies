class Api {
    constructor() {
        this.imageUrl = "https://image.tmdb.org/t/p/w500";
        this.apiUrl = "https://api.themoviedb.org";
        this.apiKey = "8e3302447f2ef4cb9470023e800f1f03";
        this.headers = { "Content-Type": "application/json" };
        this.localStorageName = "films";
    }

    async fetchPopularMovies(page) {
        try {
            const response = await fetch(`${this.apiUrl}/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=${page}`, {
                method: "GET",
                headers: this.headers
            });

            if (!response.ok) {
                throw new Error(`Failed with status code: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Request Error: ", error);
        }
    }

    async fetchFilmById(id) {
        try {
            const response = await fetch(`${this.apiUrl}/3/movie/${id}?api_key=${this.apiKey}&language=en-US`, {
                method: "GET",
                headers: this.headers
            });

            if (!response.ok) {
                throw new Error(`Failed with status code: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Request Error: ", error);
        }
    }

    async fetchMovies(url) {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            if (!response.ok) {
                throw new Error(`Failed with status code: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Request Error: ", error);
        }
    }
}

export default new Api();