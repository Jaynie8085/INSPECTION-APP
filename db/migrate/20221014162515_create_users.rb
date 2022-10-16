class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :licence_no
      t.integer :phone
      t.string :address

      t.timestamps
    end
  end
end
