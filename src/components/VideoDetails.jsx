var VideoDetails = (props) => (
  <div>
    <p><br/>Channel Title: {props.video.snippet.channelTitle}</p>
    <p>Published At: {moment(new Date(props.video.snippet.publishedAt)).format('YYYY/MM/DD')}</p>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoDetails.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoDetails = VideoDetails;