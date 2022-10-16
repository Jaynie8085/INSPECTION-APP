class BookingSerializer < ActiveModel::Serializer
  attributes :id, :service, :date, :time, :user_id, :status
end
