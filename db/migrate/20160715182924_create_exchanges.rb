class CreateExchanges < ActiveRecord::Migration[5.0]
  def change
    create_table :exchanges do |t|
      t.string :name, :allow_null => false, :limit => 512
      t.string :exchange_kind, :allow_null => false, :limit => 64
    end
  end
end
