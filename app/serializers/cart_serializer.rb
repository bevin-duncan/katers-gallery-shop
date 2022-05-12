class CartSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :order
  has_many :products
end
