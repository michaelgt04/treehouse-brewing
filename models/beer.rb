class Beer < ActiveRecord::Base
  validates :name, presence: true
  validates :imgUrl, presence: true
  validates :blurb, presence: true
  validates :description, presence: true
end
