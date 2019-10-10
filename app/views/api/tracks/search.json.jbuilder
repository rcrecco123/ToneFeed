@tracks.each do |track|
    debugger
    if track.title.downcase.include?(@search_string.to_s.downcase)
  
        json.set! track.id do
            json.extract! track, :id, :title, :user_id
            json.username track.user.username
            json.fileUrl url_for(track.track)
            json.imageUrl url_for(track.image)
        end
    end
end