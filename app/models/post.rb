# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  title      :text             not null
#  body       :text             not null
#  blog_id    :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Post < ApplicationRecord
    validates :title, :body, :blog_id, presence: true
    belongs_to :blog
    has_one :user,
        through: :blog,
        source: :user

end
