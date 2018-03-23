var searchYouTube = (options, callback) => {
  $.ajax({
    url: url,
    data: data,
    success: success,
    dataType: dataType
  });
};

window.searchYouTube = searchYouTube;
