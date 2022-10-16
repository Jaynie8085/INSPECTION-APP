class InspectionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :vehicle_id, :offence, :fine, :servicecharge, :status
end
