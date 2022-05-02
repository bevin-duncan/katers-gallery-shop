class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :image
      t.float :price
      t.integer :quantity
      t.string :sku

      t.timestamps
    end
  end
end
