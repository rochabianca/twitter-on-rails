class TweetsController < ApplicationController

  def index
    if params[:username]
      @user = User.where(username: params[:username]).first
      @tweets_user = @user.tweets;
    else
      @tweets_user = Tweet.all
    end

  end

  def create
    @tweet = Tweet.new(resource_params)
    @tweet.user_id = current_user.id
    @tweet.save
    redirect_to root_path
  end

  protected

  def resource_params
    params.require(:tweet).permit([:content])
  end
  
end
