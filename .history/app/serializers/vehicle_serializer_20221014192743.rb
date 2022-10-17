class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :numberplate, :chasisnumber, :model
end
