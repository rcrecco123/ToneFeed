# == Schema Information
#
# Table name: tracks
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord
    validates :title, :user_id, presence: true

    belongs_to :user
        # primary_key: :id,
        # foreign_key: :user_id,
        # class_name: :User

    has_one_attached :track

end
