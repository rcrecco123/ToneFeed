json.set! @track.id do 
    json.extract! @track, :id, :title, :user_id
    json.fileUrl url_for(@track.track)
end