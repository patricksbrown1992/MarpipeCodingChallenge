class AddTimestampsToUser < ActiveRecord::Migration[5.2]
  def change
    
    add_column :blogs, :created_at, :datetime
    add_column :blogs, :updated_at, :datetime
    add_column :posts, :created_at, :datetime
    add_column :posts, :updated_at, :datetime
  end
end
