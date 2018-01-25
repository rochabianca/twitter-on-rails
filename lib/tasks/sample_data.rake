require 'faker'

namespace :sample_data do
  desc "This task create new users"
  task users: :environment do
     100.times do |i|
      username = "#{Faker::Name.first_name}_#{i}"
       User.create!(
         :email => Faker::Internet.email,
         :password => "123456",
         :username => username
       )
        puts "User #{username} Created"
    end
  end
end


namespace :sample_data do
  desc "This task make users follow randow users"
  task followers: :environment do
    100.times do |i|
      user = User.connection.select_values(User.select("id").to_sql)
      # puts user[1]
      id_user = 1 + rand(98)
      randow_user = user[id_user]
      
      Follow.create!(
        user_id: user[i],
        follower_id: randow_user
      )
      puts "User #{i} Followed user #{randow_user}"
    end
  end
end



namespace :sample_data do
  desc "This task create new tweets"
  task tweets: :environment do
    100.times do |f|
      user = User.connection.select_values(User.select("id").to_sql)

      Tweet.create!(
        :content => Faker::TheFreshPrinceOfBelAir.quote, #Faker::WorldOfWarcraft.quote,
        :user_id => user[f]
      )

      puts "tweet from user #{user[f]} created"
      
    end
  end
end