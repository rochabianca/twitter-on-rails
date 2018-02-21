class TweetsController < ApplicationController
  def index
  end

  def tweets_user
    @user = User.find_by_username(params[:username])
    @tweets = @user.tweets.ordered.page(params[:page]).per(25);
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