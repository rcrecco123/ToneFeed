class FixTracks < ActiveRecord::Migration[5.2]
  def change
    drop_table :tracks

    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      
      t.timestamps
    end

  end
end
