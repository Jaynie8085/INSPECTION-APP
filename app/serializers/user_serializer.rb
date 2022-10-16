class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :licence_no, :phone, :address
end
