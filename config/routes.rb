Rails.application.routes.draw do
  devise_for :users
  root to: "home#index"
  resources :tweets

  get '/search' => "home#search"
  
  get '/tweets/user/:username' => 'tweets#tweets_user', as: 'username_tweets'
  get '/:username' => 'users#show', as: :user
  get '/:id' => "shortener/shortened_urls#show"
end