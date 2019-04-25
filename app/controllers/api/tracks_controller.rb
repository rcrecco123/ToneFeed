class Api::TracksController < ApplicationController
    
    def create
        @track = Track.new(track_params)
        debugger
        if @track.save
            render json: {message: "File successfully uploaded"}
        else
            render json: @track.errors.full_messages
        end
    end
    
    def show
        @track = Track.find(params[:id])
    end

    def index
        @tracks = Track.all
        render :index
    end


    def track_params
        params.require(:track).permit(:title, :track, :user_id)
    end
end