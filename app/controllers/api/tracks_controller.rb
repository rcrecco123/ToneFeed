class Api::TracksController < ApplicationController
    def show
        @track = Track.find(params[:id])
    end

    def index
        @tracks = Track.all
        render :index
    end


    def track_params
        
    end
end