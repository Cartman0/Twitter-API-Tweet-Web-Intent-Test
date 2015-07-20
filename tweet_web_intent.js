(function() {
  // https://dev.twitter.com/web/tweet-button/web-intent
  var div_tweet = document.getElementById('div-tweet');
  var base_url = 'https://twitter.com/intent/tweet';
  // パラメータ
  var text = 'Twitter API(Tweet Web Intent) Test';
  var url = 'http://cartman0.hatenablog.com/';
  var via = 'cartman_eng';
  var hashtags = 'はしくれエンジニア, TwitterAPI';
  // 指定したユーザーがおすすめユーザーとして2アカウントまで表示
  var related = 'cartman_eng';
  var tweetid = 0;

  var tweetLink = '<a href="' + base_url +
    '?text=' + encodeURIComponent(text) +
    '?url=' + url +
    '&via=' + via +
    '&hashtags=' + hashtags +
    '&related=' + related +
    '&in-reply-to=' + tweetid +
    '" target="_blank">ツイート</a>';

  div_tweet.innerHTML = tweetLink;
})();
