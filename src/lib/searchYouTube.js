var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',
      q: options.query,
      maxResults: options.max || '5',
      key: options.key
    },
    contentType: 'application/json',
    success: function (data) {
      console.log('YouTube Query: videos received');
      console.log(data.items);
      callback(data.items);
    },
    error: function (data) {
      console.error('YouTube Query: Failed to receive videos', data);
    }
  });   
};

window.searchYouTube = searchYouTube;
