class HomeController < ApplicationController
  before_action :load_widget_data

  def index
    @tweets =  Tweet.where(user_id: @following.pluck(:follower_id)).includes(:user).order(:created_at).reverse_order.page(params[:page]).per(10)
    respond_to do |format|
      format.html
      format.js
    end

    @tweets.each do |tweet|
      tweet.content = tweet.content.split.map { |x| x =~ URI::regexp ? makelink(x) : x }.join(" ")
    end 


    @follow_user = User.where(id: @following.pluck(:follower_id))
    @followed_user = Follow.all.where(follower_id: current_user.id)

    @rand_profile = "profile-#{rand(4)}.png"

    @user_username = current_user.username
    @user_following = @follow_user.count - 1
    @user_followers = @followed_user.count
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

  def makelink(url)
    '<a class="timeline--link" href="' + short_url("#{url}") + '"target="_blank">' + short_url("#{url}") + '</a>'
  end

  
end
