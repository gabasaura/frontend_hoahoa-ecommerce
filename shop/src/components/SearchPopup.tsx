
const SearchPopup: React.FC = () => (
    <div className="search-popup">
    <div className="search-popup-container">
    <form className="form-group" action="">
      <input
        type="search"
        id="search-form"
        className="form-control border-0 border-bottom"
        placeholder="Type and press enter"
        name="s"
      />
      <button
        type="submit"
        className="search-submit border-0 position-absolute bg-white"
        style={{ top: '15px', right: '15px' }}>
        <svg className="search" width="24" height="24">
          <use xlinkHref="#search"></use>
        </svg>
      </button>
    </form>
    </div>
    </div>
    );

    export default SearchPopup;