
<h1>Production README

![Imgur](https://i.imgur.com/lb9qszi.png)

## Technologies:
	
* Ruby
* Ruby on Rails 
* Javascript
* React
* Redux
* HTML5 
* CSS
  
## Install:
  * run `bundle install`
  * run `npm install`
  * run `bundle exec rails db:migrate` (Make sure postgresql is running in the background)
  
# Features
  _ToneFeed is a SoundCloud clone build on a Ruby on Rails backend with a React/Redux frontend_
  
  So far, users can signup, login, and logout. ToneFeed allows for the uploading of audio files to share and listen to.
	
## User Auth
![Imgur](https://i.imgur.com/QRpeGGu.png)
* Through a custom built user authentication system, users can securely signup, login, and logout. User auth was built on a Ruby on Rails backend.
	
## Tracks
![Imgur](https://i.imgur.com/tkjvjfe.png)
* Using AWS S3 and AWS IAM, users have the ability to upload audio files to listen to and share. Using ActiveRecord in Ruby on Rails, audio files can be attached to the "tracks" model and stored on an AWS S3 secure server. These files can be queried for through the postgresql database with SQL

## Next Steps:
* Implement user "feed" page
* Implement file upload interactive frontend
* Create audio player UI
	
  
