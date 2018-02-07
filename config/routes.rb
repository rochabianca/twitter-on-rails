Rails.application.routes.draw do
  devise_for :users
  root to: "home#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :tweets

  get ':username' => 'tweets#index', as: 'username_tweets'
  get '/:id' => "shortener/shortened_urls#show"
  get '/404' => 'tweets#not_found';
end
