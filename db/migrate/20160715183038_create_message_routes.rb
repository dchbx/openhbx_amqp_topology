class CreateMessageRoutes < ActiveRecord::Migration[5.0]
  def change
    create_table :message_routes do |t|
      t.integer :from_exchange_id, :allow_nil => false
      t.integer :to_exchange_id, :allow_nil => false
    end

    add_index :message_routes, :from_exchange_id
    add_index :message_routes, :to_exchange_id
  end
end
