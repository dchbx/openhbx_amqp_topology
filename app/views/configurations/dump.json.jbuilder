json.exchanges @exchanges do |exchange|
  json.extract! exchange, :id, :name, :exchange_kind
end

json.message_routes @message_routes do |message_route|
  json.extract! message_route, :id, :from_exchange_id, :to_exchange_id, :routing_key
end

json.route_arguments @route_arguments do |route_argument|
  json.extract! route_argument, :id, :message_route_id, :key
  if !route_argument.value.nil?
    json.value route_argument.value
  end
end
