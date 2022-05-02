class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :firstname
      t.string :lastname
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :phone
      t.string :email
      t.string :password_digest
      t.boolean :admin, default: false

      t.timestamps
    end
  end
end
