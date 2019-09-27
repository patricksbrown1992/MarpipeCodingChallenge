class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string "name", null: false
      t.integer "user_id", null: false
      t.boolean "duplicate", default: false
      t.boolean "activated", default: false
      t.timestamps
    end
  end
end
