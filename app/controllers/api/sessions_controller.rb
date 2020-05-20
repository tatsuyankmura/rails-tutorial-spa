class Api::SessionsController < ApplicationController

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      login(user) 
      params[:session][:isRemember] == true ? remember(user) : forget(user)
      render json: user.to_json, status: 200
    else
      render json: user.errors.full_messages.to_json, status: 400
    end
  end

  def show
    user = current_user
    if user.present?
      render json: user.to_json, status: 200
    else
      render json: { message: "認証されていません" }, status: 401
    end 
  end

  def destroy
    logout
    render json: {}, status: 200
  end

end
