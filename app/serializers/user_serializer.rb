class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :firstname, :lastname, :address, :city, :state, :zip, :phone, :email, :password_digest, :admin
end
