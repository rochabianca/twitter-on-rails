# Application controller
class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!
  before_action :load_image

  protected
  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, 
                   :password_confirmation, :remember_me]
    update_attrs = [:username, :email, :password, 
                    :password_confirmation, :remember_me,
                    :name, :bio]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: update_attrs
  end

  def load_image
    @rand_profile = "profile-#{rand(4)}.png"
  end
end
