
json.set! user.id do
    json.extract! user, :id, :username, :location, :name
    json.imageUrl user.image.attached? ?  url_for(user.image) : "https://image.flaticon.com/icons/svg/149/149071.svg"
    json.bannerImageUrl user.banner_image.attached? ?  url_for(user.banner_image) : nil
    json.trackIds user.track_ids
end
