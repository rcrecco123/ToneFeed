class Api::TracksController < ApplicationController
    
    def create
        debugger
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
        render "api/tracks/show"
    end

    def index
        @tracks = Track.all
        render "api/tracks/index"
    end


    def track_params
        params.require(:track).permit(:id, :title, :track, :user_id, :image)
    end
end