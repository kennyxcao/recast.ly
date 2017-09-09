class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      videoPlaying: exampleVideoData[0]
    };
    console.log(YOUTUBE_API_KEY);
    this.handleVideoTitleClick = this.handleVideoTitleClick.bind(this);
  }
  
  handleVideoTitleClick(video) {
    this.setState({
      videoPlaying: video
    });
  }
  
  render() {
    
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
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
