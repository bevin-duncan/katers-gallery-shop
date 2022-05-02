class User < ApplicationRecord
    has_secure_password 

    validates :firstname, :lastname, :address, :city, :state, :zip, :email, :username, :password, presence: true
    validates :username, uniqueness:true
end
