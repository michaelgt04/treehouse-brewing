class AddDescriptionColumns < ActiveRecord::Migration[5.0]
  def change
    add_column :beers, :blurb, :string, null: false
    add_column :beers, :description, :text, null: false
  end
end
