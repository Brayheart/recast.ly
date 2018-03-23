var searchYouTube = (options, callback) => {


  $.get({
    type: 'GET',
    url:  "https://www.googleapis.com/youtube/v3/search",
    success: function(data) {
      console.log(data);
    },
    error: function(data) {
      console.log('error:' + data);
    }

  })
};

window.searchYouTube = searchYouTube;
