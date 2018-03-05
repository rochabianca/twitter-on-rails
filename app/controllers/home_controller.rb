require 'rails_autolink'
class HomeController < ApplicationController
  before_action :load_widget_data

  def index
    @tweets =  Tweet.where(user_id: @following.pluck(:follower_id)).includes(:user).ordered.page(params[:page]).per(20)
    @follow_user = User.where(id: @following.pluck(:follower_id))
    @followed_user = Follow.all.where(follower_id: current_user.id)
  end

  def search

  end
  
  protected
  def load_widget_data
    return true if !user_signed_in?
    @followers = current_user.followers_links
    @following = current_user.following_links
  end  
end