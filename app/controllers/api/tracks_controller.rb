class Api::TracksController < ApplicationController
    
    def create
        
        @track = Track.new(track_params)
        
        if @track.save
            render '/api/tracks/show'
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

    def destroy
        @track = Track.find(params[:id])
        @track.delete
    end

    def discover
        @tracks = Track.all.sample(8)
        render "api/tracks/discover"
    end

    def update

        @track = Track.find(params[:id])

        if @track.update_attributes(track_params)
            @track.save
        else
            render '/api/tracks/show'
        end
    end

    # def update
    #     @track = Track.find(params[:id])

    #     if @track.update_attributes(track_params)
    #         @track.save
    #         render '/api/tracks/:id'
    #     else

    # end


    def track_params
        params.require(:track).permit(:id, :title, :track, :user_id, :image)
    end
end