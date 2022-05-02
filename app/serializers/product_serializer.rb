class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :price, :quantity, :sku
end
