class Exchange < ActiveRecord::Base
  has_many :routes_from, class_name: "MessageRoute", inverse_of: :from_exchange
  has_many :routes_to, class_name: "MessageRoute", inverse_of: :to_exchange

  validates_presence_of :name, :allow_blank => false

  ALLOWED_KINDS = %w(
    fanout
    topic
    direct
    header
  )

  validates_inclusion_of :exchange_kind, :in => ALLOWED_KINDS, :allow_blank => false
end
