

@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :track_id, :author_id, :body, :created_at, :author
    end
end