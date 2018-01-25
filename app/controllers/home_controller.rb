class HomeController < ApplicationController
  before_action :load_widget_data

  def index
    @tweets =  Tweet.where(user_id: @following.pluck(:follower_id)).includes(:user).order(:created_at).reverse_order
    @follow_user = User.where(id: @following.pluck(:follower_id))  
    @user_username = current_user.username
    @user_following = @follow_user.count
    current_user.tweets.destroy_all
    # Tweet.
    # where(user_id: current_user).destroy_all
  end
  
  protected

  def load_widget_data
    return true if !user_signed_in?
    
    @followers = current_user.followers_links
    @following = current_user.following_links
  end

  def crud  
    @create_tweet = Tweet.create(content: "", user_id: current_user.id)
  end

  
end
