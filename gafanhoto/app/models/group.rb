class Group < ApplicationRecord
    has_many :grasshoppers
    belongs_to :recruiter

    validates :description, presence: true
    validates :comment, presence: true
    validates :recruiter_id, presence: true
    validates :quality, presence: true
    validates :learn, presence: true

end
