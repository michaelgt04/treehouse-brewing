class Beer < ActiveRecord::Base
  validates :name, presence: true
  validates :imgUrl, presence: true
end
