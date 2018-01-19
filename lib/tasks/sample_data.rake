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
  desc "This task create new tweets"
  task tweets: :environment do
    100.times do |f|
      $i = 1;
      until $i == 100 do
        Tweet.create!(
        :content => Faker::WorldOfWarcraft.quote,
        :user_id => $i
        )
        i=+1;
        puts "tweet from user #{$i} created"
      end
      
    end
  end
end