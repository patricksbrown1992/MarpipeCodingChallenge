# == Schema Information
#
# Table name: taggings
#
#  id         :bigint           not null, primary key
#  tag_id     :integer          not null
#  post_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
    validates_uniqueness_of :post_id, scope: [:tag_id]
    belongs_to :user
    belongs_to :post
    belongs_to :tag
end
