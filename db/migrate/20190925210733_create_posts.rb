class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :title, null: false
      t.text :body, null: false
      t.integer :blog_id, null: false
    end
  end
end
