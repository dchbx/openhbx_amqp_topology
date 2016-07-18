json.array!(@exchanges) do |exchange|
  json.extract! exchange, :id, :name, :exchange_kind
  json.url exchange_url(exchange, format: :json)
end
