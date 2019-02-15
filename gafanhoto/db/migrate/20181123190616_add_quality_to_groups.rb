class AddQualityToGroups < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :quality, :string
  end
end
