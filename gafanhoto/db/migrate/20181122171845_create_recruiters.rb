class CreateRecruiters < ActiveRecord::Migration[5.2]
  def change
    create_table :recruiters do |t|
      t.string :descripton
      t.string :street
      t.string :number
      t.string :phone

      t.timestamps
    end
  end
end
