import shortFilmsDisableIcon from "../../../../../images/svg/shortfilmstumb-disable.svg";
import shortFilmsActiveIcon from "../../../../../images/svg/shortfilmstumb-active.svg";

interface IFilterCheckboxProps {
  onToggleFilter: ()=> void;
  isToggleFilter: boolean;
}

function FilterCheckbox({ isToggleFilter, onToggleFilter }:IFilterCheckboxProps) {
  function handleToggleMovies() {
    onToggleFilter();
  }
  return (
    <label htmlFor="filtermovies" className="form__filter-field">
      <input
        id="filtermovies"
        type="button"
        className="form__filter-input"
        name="filter"
      />
      <span
        className="form__filter-item"
        onClick={handleToggleMovies}
        style={
          isToggleFilter
            ? { backgroundImage: `url(${shortFilmsActiveIcon})` }
            : { backgroundImage: `url(${shortFilmsDisableIcon})` }
        }
      ></span>
      <p className="form__filter-desc">Короткометражки</p>
    </label>
  );
}

export default FilterCheckbox;
