Rails.application.routes.draw do
  devise_for :users
  root to: "home#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :tweets

  get ':username' => 'tweets#user_show', as: 'users_show'
  get ':username' => 'tweets#tweets_user', as: 'username_tweets'
  get '/:id' => "shortener/shortened_urls#show"
  get '/404' => 'tweets#not_found';
end
