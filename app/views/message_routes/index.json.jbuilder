json.array!(@message_routes) do |message_route|
  json.extract! message_route, :id, :to_exchange_id, :from_exchange_id
  json.url message_route_url(message_route, format: :json)
end
