import "./FilterCheckbox.css";

const FilterCheckbox = () => {
  return (
    <label className="filter">
      <input type="checkbox" id="checkbox" className="filter__checkbox" />
      <span className="filter__slider"></span>
    </label>
  );
};

export default FilterCheckbox;
