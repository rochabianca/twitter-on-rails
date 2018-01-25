# Tweet Model
class Tweet < ApplicationRecord
  belongs_to :user
  validates :content, length: {minimum: 1, maximum: 140}
end
