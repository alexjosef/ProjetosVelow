class CreateGrasshoppers < ActiveRecord::Migration[5.2]
  def change
    create_table :grasshoppers do |t|
      t.string :description
      t.string :age

      t.timestamps
    end
  end
end
