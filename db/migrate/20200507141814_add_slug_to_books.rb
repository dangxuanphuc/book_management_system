class AddSlugToBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :slug, :string
    add_index :books, :slug
  end
end