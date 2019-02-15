class Grasshopper < ApplicationRecord
    belongs_to :group

    validates :description, presence: true
    validates :age, presence: true
    validates :group_id, presence: true

end
