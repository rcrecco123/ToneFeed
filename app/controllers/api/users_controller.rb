class Api::UsersController < ApplicationController

    def new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render '/api/users/show'
            #THE USERS SHOW PAGE WILL BE MY FEED
        else
            render json: @user.errors, status: 501
        end
    end

    def show
        @user = User.find(params[:id])

        @tracks = @user.tracks

        render '/api/users/show'
    end
    
    def update
        @user = User.find(params[:id])
        
        if @user.update(user_params)
            render '/api/users/show'
        else
            render json: @user.errors.full_messages
        end
    end

    def index
        @users = User.all
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :image, :banner_image, :name, :location)
    end

end