class AddGrowlerAndCanToBeers < ActiveRecord::Migration[5.0]
  def change
    add_column :beers, :growlers, :boolean, default: false
    add_column :beers, :cans, :boolean, default: false
  end
end
