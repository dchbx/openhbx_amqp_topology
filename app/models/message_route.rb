class MessageRoute < ApplicationRecord
  belongs_to :from_exchange, class_name: "Exchange"
  belongs_to :to_exchange, class_name: "Exchange"

  validates_presence_of :from_exchange_id, :allow_blank => false
  validates_presence_of :to_exchange_id, :allow_blank => false

  has_many :route_arguments, dependent: :destroy

  accepts_nested_attributes_for :route_arguments, allow_destroy: true
end
