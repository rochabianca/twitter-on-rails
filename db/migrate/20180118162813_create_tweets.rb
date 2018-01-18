class CreateTweets < ActiveRecord::Migration[5.1]
  def change
    create_table :tweets do |t|
      t.string :content

      t.timestamps
      t.belongs_to :user, index: true
    end
  end
end
