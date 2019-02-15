class AddLearnToGroups < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :learn, :string
  end
end
