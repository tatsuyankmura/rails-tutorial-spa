class Api::UsersController < ApplicationController

  def show
    user = User.find(params[:id])
    render :json => user.to_json
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user.to_json, status: 200
    else
      render json: user.errors.full_messages.to_json, status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end