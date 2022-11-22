interface IProfile {
  name: string;
  email: string;
};

interface IProfileValues {
  profilename?: string;
  profileemail?: string;
};

export interface IProfileProps {
  loggedIn: boolean;
  onToggleBurger: ()=>void;
  isToggleBurger: boolean;
  onEditButton: ()=>void;
  isEditProfile: boolean;
  onEditProfile: ({ name, email }: IProfile) => void;
  isLoading: boolean;
  onCloseNav: ()=> void;
  values: IProfileValues;
  onInputChange: (event: React.FormEvent)=> void;
  isValid: boolean;
  submitError: string;
  submitSuccess: string;
  onSignout: ()=> void;
  onSameValue: (e: React.FormEvent) => void;
}

export interface IMovies {
  country: string;
  description: string;
  director: string;
  duration: number;
  nameEN: string;
  nameRU: string;
  trailerLink: string;
}

export interface ISavedMovie extends IMovies {
  image: string;
  isClicked?: boolean;
  movieId: number;
  owner: ICurrentUser;
  thumbnail: string;
  year: string;
  __v?: number;
  _id?: string;
}

export interface IInitialMovie extends IMovies{
  created_at: string;
  id: number;
  image: {url: string};
  updated_at: string;
  year: string;
}

export interface IMoviesProps {
  loggedIn: boolean;
  onToggleBurger: ()=>void;
  isToggleBurger: boolean;
  onToggleFilter: ()=>void;
  isToggleFilter: boolean;
  cardsData: ISavedMovie[];
  onSelect: (card: ISavedMovie)=> void;
  isSelected: boolean;
  onSearch: (searchValue: string) => void;
  isEmptyValue: boolean;
  searchValue: string;
  onSearchValue: (e: string) => void;
  isLoading: boolean;
  isNotFoundMovies: boolean;
  notFoundMoviesText: string;
  onAddMovies: (number: number)=> void;
  isDisableMoreButton: boolean;
  numberOfMovies: number;
  cards: ISavedMovie[];
  onCloseNav: ()=> void;
}

export interface IMoviesCardListProps {
  cardsData: ISavedMovie[];
  onSelect: (card: ISavedMovie)=> void;
  cardButtonClassType: string;
  isNotFoundMovies: boolean;
  notFoundMoviesText: string;
  onAddMovies: (number: number)=> void;
  isDisableMoreButton: boolean;
  numberOfMovies: number;
}

export interface IMoviesCardProps {
  card: ISavedMovie;
  key: number;
  onSelect: (card: ISavedMovie)=> void;
  cardButtonClassType: string;
}

export interface INavigationProps {
  isToggleBurger: boolean;
  onCloseNav: ()=> void;
}

export interface ICurrentUser {
  name?: string;
  email?: string;
  password?: string;
  __v?: number;
  _id?: string;
}
