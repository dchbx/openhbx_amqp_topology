class RouteArgument < ApplicationRecord
  belongs_to :message_route, inverse_of: :route_arguments, optional: true

  validates_presence_of :message_route
  validates_presence_of :key, :allow_blank => false
end
