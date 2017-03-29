class Beer < ActiveRecord::Base
  validates :name, presence: true
  validates :imgUrl, presence: true
  validates :blurb, presence: true
  validates :description, presence: true
  validates :growlers, inclusion: { in: [true, false] }
  validates :cans, inclusion: { in: [true, false] }
end
