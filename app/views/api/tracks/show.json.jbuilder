<h1><%= @track.title %></h1>

Test 1
<br>
<audio src='<%= url_for(@track.track) %>' type="audio/mpeg" controls></audio>
<br>
Test 2
<br>
<audio src='https://s3.amazonaws.com/tonefeed-dev/yzdcaRHshydpm9Zhtgo7Hxt4' type="audio/mpeg" controls></audio>