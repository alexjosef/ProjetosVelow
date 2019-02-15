class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :description
      t.string :comment

      t.timestamps
    end
  end
end
