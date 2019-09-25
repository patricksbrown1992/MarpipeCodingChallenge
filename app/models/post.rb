# == Schema Information
#
# Table name: posts
#
#  id      :bigint           not null, primary key
#  title   :text             not null
#  body    :text             not null
#  blog_id :integer          not null
#

class Post < ApplicationRecord
    validates :title, :body, :blog_id, presence: true
    belongs_to :blog

end
