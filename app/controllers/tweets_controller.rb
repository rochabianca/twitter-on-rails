class TweetsController < ApplicationController

  def index
    if params[:username]
      @user = User.where(username: params[:username]).first
      @tweets = @user.tweets;
    else
      @tweets = Tweet.all
    end

  end

  def create
    @tweet = Tweet.new(params[:content])
    @tweet.user_id = current_user.id
    @tweet.save
  end
  
end
