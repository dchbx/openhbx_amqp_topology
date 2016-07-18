class Exchange < ApplicationRecord
  has_many :routes_from, class_name: "MessageRoute", inverse_of: :from_exchange, :foreign_key => :from_exchange_id
  has_many :routes_to, class_name: "MessageRoute", inverse_of: :to_exchange, :foreign_key => :to_exchange_id

  has_many :destination_exchanges, through: :routes_from, :source => :to_exchange

  validates_presence_of :name, :allow_blank => false

  ALLOWED_KINDS = %w(
    fanout
    topic
    direct
    headers
  )

  validates_inclusion_of :exchange_kind, :in => ALLOWED_KINDS, :allow_blank => false

  def display_name
    "#{name} (#{exchange_kind})"
  end

  def headers_exchange?
    exchange_kind == "headers"
  end

  def fanout_exchange?
    exchange_kind == "fanout"
  end
end
