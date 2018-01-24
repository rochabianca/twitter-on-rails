class HomeController < ApplicationController
  before_action :load_widget_data

  def index
    @tweets =  Tweet.where(user_id: @following.pluck(:follower_id)).includes(:user)
    @follow_user = User.where(id: @following.pluck(:follower_id))
    
  end

  def show_username(id)
    @user = User.where(id: id)

    for user in @user
      @user = user.username
    end
    return @user
  end

  helper_method :show_username
  
  
  protected

  def load_widget_data
    return true if !user_signed_in?
    
    @followers = current_user.followers_links
    @following = current_user.following_links
  end

  
end
