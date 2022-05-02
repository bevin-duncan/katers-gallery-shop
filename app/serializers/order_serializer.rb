class OrderSerializer < ActiveModel::Serializer
  attributes :id, :total_price, :ordered
  has_one :user
end
