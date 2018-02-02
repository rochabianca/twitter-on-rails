#Application Record
class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  paginates_per 10
end
