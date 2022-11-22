import { ISavedMovie, ICurrentUser } from "./interfaces";

type TMainApi = {
  baseUrl: string;
  headers: TMainApiHeaders;
  credentials: string;
};
type TMainApiHeaders = {
  authorization: string;
  Accept: string;
  "Content-Type": string;
};

class MainApi {
  _baseUrl: string;
  _headers: TMainApiHeaders;
  constructor({ baseUrl, headers }: TMainApi) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getMovies(token: string) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    }).then(this._checkResponse);
  }

  createMovie(
    {
      country,
      description,
      director,
      duration,
      nameRU,
      nameEN,
      trailerLink,
      image,
      movieId,
      thumbnail,
      year,
    }: ISavedMovie,
    token:string
  ) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      }),
    }).then(this._checkResponse);
  }

  deleteMovie(movieId:string, token:string) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    }).then(this._checkResponse);
  }

  getCurrentUser(token:string) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    }).then(this._checkResponse);
  }

  updateUser({ name, email }:ICurrentUser, token:string) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkResponse);
  }

  register({ name, password, email }:ICurrentUser) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    }).then(this._checkResponse);
  }

  login({ password, email }:ICurrentUser) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        password,
        email,
      }),
    }).then(this._checkResponse);
  }

  getContent = (token:string) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    }).then(this._checkResponse);
  };

  signout(token:string) {
    return fetch(`${this._baseUrl}/signout`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    }).then(this._checkResponse);
  }

  _checkResponse(res:Response) {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
  }
}

export const MainApiSet = new MainApi({
  baseUrl: `${window.location.protocol}${
    process.env.REACT_APP_API_URL || "//localhost:3001"
  }`,
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  credentials: "include",
});
