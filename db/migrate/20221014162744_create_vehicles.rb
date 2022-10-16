class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles do |t|
      t.integer :user_id
      t.string :numberplate
      t.string :chasisnumber
      t.string :model

      t.timestamps
    end
  end
end
