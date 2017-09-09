var Search = (props) => (
  <div className="search-bar form-inline">
    <button onClick={props.handleAutoPlay} className="btn hidden-sm-down">
      <span className={`glyphicon glyphicon-${props.repeat}`}></span>
    </button>
    <input onKeyUp={() => props.handleSearchSubmit($('input').val())} className="form-control" type="text" />
    <button onClick={() => props.handleSearchSubmit($('input').val())} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>

);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
