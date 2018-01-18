class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :tweets

  validates :username, presence: :true, uniqueness: { case_sensitive: false }

  # Only allow letter, number, underscore and punctuation.
  validates_format_of :username, with: /^[a-zA-Z0-9_\.]*$/, :multiline => true
  validate :validate_username

  attr_accessor :login
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
        

  def self.find_for_database_authentication(warden_conditions)
  conditions = warden_conditions.dup
  
  if login = conditions.delete(:login)
    where(conditions).where(["username = :value OR lower(email) = lower(:value)", { :value => login }]).first
  elsif conditions.has_key?(:username) || conditions.has_key?(:email)
    where(conditions.to_h).first
  end
  conditions[:email].downcase! if conditions[:email]
  where(conditions.to_h).first

  end

def validate_username
  if User.where(email: username).exists?
    errors.add(:username, :invalid)
  end
end
  
end
