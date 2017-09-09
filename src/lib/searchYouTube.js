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
      callback(data.items);
    },
    error: function (data) {
      console.error('YouTube Query: Failed to receive videos', data);
    }
  });   
};

// ***** Native Javascript Fetch Solution *****
//
// var searchYouTube = (options, callback) => {
//   var params = {
//     part: 'snippet',
//     type: 'video',
//     videoEmbeddable: 'true',
//     q: options.query,
//     maxResults: options.max || '5',
//     key: options.key
//   };

//   var esc = encodeURIComponent;
//   var queryURL = Object.keys(params)
//     .map(k => esc(k) + '=' + esc(params[k]))
//     .join('&');
  
//   var myHeaders = new Headers();

//   var myInit = { 
//     method: 'GET',
//     headers: myHeaders,
//     mode: 'cors',
//     cache: 'default' 
//   };

//   var url = 'https://www.googleapis.com/youtube/v3/search?' + queryURL;
  
//   var myRequest = new Request(url, myInit);
  
//   fetch(myRequest).then(function(response) {
//     return response.json();
//   }).then(function(json) {
//     callback(json.items);
//   });
// };

window.searchYouTube = searchYouTube;
