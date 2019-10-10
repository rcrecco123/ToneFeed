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
        if @track
            render "api/tracks/show"
        end
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

    def search

        debugger
       
        @params = params

        @search_string = params[:search]

        debugger

        search = params[:search].downcase

        @tracks = Track.where("title LIKE ?", "#{search}") #GET THAT FROM PARAMS params[:search].to_s
        
        debugger

        if @tracks
            render "api/tracks/search"
        end

    end


    def track_params
        params.require(:track).permit(:id, :title, :track, :user_id, :image)
    end
end