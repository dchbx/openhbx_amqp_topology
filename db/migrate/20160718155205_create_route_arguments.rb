class CreateRouteArguments < ActiveRecord::Migration[5.0]
  def change
    create_table :route_arguments do |t|
      t.integer :message_route_id, :allow_nil => false
      t.string :key, :allow_nil => false, :limit => 512
      t.string :value, :allow_nil => true, :limit => 512
    end

    add_index :route_arguments, :message_route_id
  end
end
