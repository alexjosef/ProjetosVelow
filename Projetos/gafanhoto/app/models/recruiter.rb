class Recruiter < ApplicationRecord
    has_many :group

    validates :descripton, presence: true
    validates :street, presence: true
    validates :number, presence: true
    validates :phone, presence: true
    
end


