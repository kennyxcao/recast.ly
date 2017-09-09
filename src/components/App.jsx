class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      videoPlaying: exampleVideoData[0]
    };
    this.options = {
      query: 'cat',
      max: '5',
      key: YOUTUBE_API_KEY,
      lastSearch: ''
    },
    this.handleVideoTitleClick = this.handleVideoTitleClick.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleAutoSearch = this.handleAutoSearch.bind(this);
    this.updateVideos = this.updateVideos.bind(this);    
    
    _.debounce(this.props.searchYouTube, 1500);
  }
  
  handleVideoTitleClick(video) {
    this.setState({
      videoPlaying: video
    });
  }
  
  handleSearchSubmit(query) {
    this.options.query = query,
    this.props.searchYouTube(this.options, this.updateVideos);
  }
  
  handleAutoSearch(query) {
    if (query && query !== this.options.lastSearch) {
      this.options.lastSearch = query;
      this.handleSearchSubmit(query);
    }
  }
  
  componentDidMount() {
    this.props.searchYouTube(this.options, this.updateVideos);
  }
  
  updateVideos(videos) {
    this.setState({
      videos: videos,
      videoPlaying: videos[0]
    });
  }
  
  render() {
    
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search handleAutoSearch={this.handleAutoSearch} handleSearchSubmit={this.handleSearchSubmit}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.videoPlaying} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videos} handleVideoTitleClick={this.handleVideoTitleClick}/></div>
          </div>
        </div>
      </div>      
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
