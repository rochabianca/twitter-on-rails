class UsersController < ApplicationController
  def show 
    @user = User.find_by_username(params[:username])
    @tweets = @user.tweets.ordered.page(params[:page]).per(25)
  end
end