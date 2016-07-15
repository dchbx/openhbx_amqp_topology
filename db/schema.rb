# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160715183038) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exchanges", force: :cascade do |t|
    t.string "name",          limit: 512
    t.string "exchange_kind", limit: 64
  end

  create_table "message_routes", force: :cascade do |t|
    t.integer "from_exchange_id"
    t.integer "to_exchange_id"
    t.index ["from_exchange_id"], name: "index_message_routes_on_from_exchange_id", using: :btree
    t.index ["to_exchange_id"], name: "index_message_routes_on_to_exchange_id", using: :btree
  end

end
