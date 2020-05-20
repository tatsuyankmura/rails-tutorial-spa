module SessionsHelper
  # include ActionController::Cookies

  # def login(user)
  #   session[:user_id] = user.id
  # end

  # def current_user
  #   pp session[:user_id]
  #   pp cookies.signed[:user_id]
  #   if (user_id = session[:user_id])
  #     @current_user ||= User.find_by(id: user_id)
  #   elsif (user_id = cookies.signed[:user_id])
  #     user = User.find_by(id: user_id)
  #     if user && user.authenticated?(cookies[:remember_token])
  #       log_in user
  #       @current_user = user
  #     end
  #   end
  # end

  # def remember(user)
  #   user.remember!
  #   cookies.signed[:user_id] = { value: user.id, expires: 2.week }
  #   cookies[:remember_token] = { value: user.remember_token, expires: 2.week }
  # end

  # def forget(user)
  #   user.forget
  #   cookies.delete(:user_id)
  #   cookies.delete(:remember_token)
  # end

  # def logout
  #   forget(current_user)
  #   session.delete(:user_id)
  #   @current_user = nil
  # end
  
end