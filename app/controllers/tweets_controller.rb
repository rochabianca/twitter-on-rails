class TweetsController < ApplicationController

  def index
    if User.exists?(username: params[:username])
      @user = User.where(username: params[:username]).first
      @tweets_user = @user.tweets.order(:created_at).reverse_order.page(params[:page]).per(10);
      @count_tweets_user = @user.tweets.count;
      @following_user = (@user.following_links.count - 1) # follow id where user id = @user
      @followers_user = Follow.all.where(follower_id: @user.id).count
    else
      redirect_to not_found_path
      @tweets_user = Tweet.all
      @user = User.all
    end
    @rand_profile = "profile-#{rand(4)}.png" # Neste caso eu copiei a mesma variável usada no home_controller. Como aproveitar variáveis entre mais de um controller ou model?
  end

  def create
    @tweet = Tweet.new(resource_params)
    @tweet.user_id = current_user.id
    @tweet.save
  end

  def destroy
    Tweet.find(params[:id]).destroy
  end

  def not_found
  end

  protected

  def resource_params
    params.require(:tweet).permit([:content])
  end

end
