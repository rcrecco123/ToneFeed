json.set! @comment.id do 
    json.extract! @comment, :id, :author_id, :track_id, :body, :created_at, :author
end