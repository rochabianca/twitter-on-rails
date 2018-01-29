class TweetsController < ApplicationController

  def index
    if params[:username]
      @user = User.where(username: params[:username]).first
      @tweets = @user.tweets;
    else
      @tweets = Tweet.all
    end

  end
end
