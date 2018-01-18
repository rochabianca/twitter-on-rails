require 'faker'

namespace :sample_data do
  desc "This task create new users"
  task users: :environment do
    100.times do
      User.create(
        email: Faker::Internet.email,
        password: Faker::Number.number(6),
        username: Faker::Name.unique.name,
      )
    end
  end
end

namespace :sample_data do
  desc "This task create new tweets"
  task tweets: :environment do
    30.times do
      i = 0;
      while i > 100 do
        Tweet.create(
        content: Faker::WorldOfWarcraft.quote,
        user_id: i
        )
        i=+1;
      end
      
    end
  end
end