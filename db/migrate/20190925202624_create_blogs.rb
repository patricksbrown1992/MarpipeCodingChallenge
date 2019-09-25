class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.integer :user_id, null: false
      t.text :title, null: false
      
    end
    add_index :blogs, :title
  end
end
