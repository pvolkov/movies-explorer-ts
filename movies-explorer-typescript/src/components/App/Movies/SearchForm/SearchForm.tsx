import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

interface IFilterCheckboxProps {
  onSearch: (searchValue: string) => void;
  onToggleFilter: () => void;
  isToggleFilter: boolean;
  isEmptyValue: boolean;
  searchValue: string;
  onSearchValue: (e: string) => void;
  isLoading: boolean;
}

function SearchForm({
  onSearch,
  onToggleFilter,
  isToggleFilter,
  isEmptyValue,
  searchValue,
  onSearchValue,
  isLoading,
}: IFilterCheckboxProps) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch(searchValue);
  }

  function handleSearchChange(e: React.FormEvent<HTMLInputElement>) {
    onSearchValue((e.target as HTMLInputElement).value);
  }

  return (
    <form
      action="#"
      name="form"
      className="form"
      onSubmit={handleSubmit}
      noValidate
    >
      <label htmlFor="searchmovie" className="form__field">
        <input
          id="searchmovie"
          type="text"
          className="form__input"
          name="search"
          placeholder="Фильм"
          value={searchValue || ""}
          onChange={handleSearchChange}
          formNoValidate
          disabled={isLoading}
        />
        <span className="form__input_focus"></span>
        <span
          id="error-searchmovie"
          className={`form__input-error ${
            isEmptyValue ? "form__input-error_active" : ""
          }`}
        >
          Нужно ввести ключевое слово
        </span>
        <button
          className="form__submit"
          type="submit"
          disabled={isLoading}
        ></button>
      </label>
      <FilterCheckbox
        onToggleFilter={onToggleFilter}
        isToggleFilter={isToggleFilter}
      />
    </form>
  );
}

export default SearchForm;
