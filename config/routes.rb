Rails.application.routes.draw do
  devise_for :users
  root to: "home#index"
  resources :tweets

  get '/:username' => 'users#show', as: :user
  get '/tweets/user/:username' => 'tweets#tweets_user', as: 'username_tweets'
  get '/:id' => "shortener/shortened_urls#show"
end