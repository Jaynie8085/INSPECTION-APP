class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.string :service
      t.string :date
      t.string :time
      t.integer :user_id
      t.boolean :status

      t.timestamps
    end
  end
end
