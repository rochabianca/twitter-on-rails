# Application controller
class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!
  before_action :load_image

  protected
  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, 
                   :password_confirmation, :remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end

  def load_image
    @rand_profile = "profile-#{rand(4)}.png"
  end
end
