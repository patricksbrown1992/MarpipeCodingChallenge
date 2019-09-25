# == Schema Information
#
# Table name: blogs
#
#  id      :bigint           not null, primary key
#  user_id :integer          not null
#  title   :text             not null
#

class Blog < ApplicationRecord
    validates :title, :user_id, presence: true
    belongs_to :user
    has_many :posts
end
