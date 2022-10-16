class User < ApplicationRecord
    has_many :vehicles
    has_many :booking
end
