import { IInitialMovie } from "./interfaces";

type TMoviesHeaders = {
  "Content-Type": string;
};

type TMoviesApi = {
  baseUrl: string;
  headers: TMoviesHeaders;
};

class MoviesApi {
  _baseUrl: string;
  _headers: TMoviesHeaders;
  constructor({ baseUrl, headers }:TMoviesApi) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  _checkResponse(res:Response):IInitialMovie[] | PromiseLike<IInitialMovie[]>{
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
  }
}

export const MoviesApiSet = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});
