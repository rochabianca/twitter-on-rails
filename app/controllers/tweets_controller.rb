class TweetsController < ApplicationController

  def index
    if params[:username]
      @user = User.where(username: params[:username]).first
      @tweets_user = @user.tweets.order(:created_at).reverse_order.page(params[:page]).per(10);
    else
      @tweets_user = Tweet.all
    end
    @rand_profile = "profile-#{rand(4)}.png" # Neste caso eu copiei a mesma variável usada no home_controller. Como aproveitar variáveis entre mais de um controller ou model?
    
    @following_user = (@user.following_links.count - 1) # follow id where user id = @user
    @followers_user = Follow.all.where(follower_id: @user.id).count

  end

  def create
    @tweet = Tweet.new(resource_params)
    @tweet.user_id = current_user.id
    @tweet.save
  end

  def destroy
    Tweet.find(params[:id]).destroy
  end

  protected

  def resource_params
    params.require(:tweet).permit([:content])
  end

end
