class Tweet < ApplicationRecord
  belongs_to :user
  validates :content, length: {minimum: 1, maximum: 141}
  scope :ordered, ->{ order('tweets.created_at desc') }
  include PgSearch
end
