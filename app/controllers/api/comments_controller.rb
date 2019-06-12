class Api::CommentsController < ApplicationController
    
    before_action :logged_in?

    def create
        
        @comment = Comment.new(comment_params)
        
        if @comment.save
            #"render show" is what is returned to frontend
            render :show 
        else
            render json: @comment.errors.full_messages
        end
    end

    def index
        @comments = Comment.all

       render 'api/comments/index'

    end

    def destroy
        @comment = Comment.find(params[:id])
        render :show
        @comment.delete
    end


    def comment_params
      
        params.require(:comment).permit(:track_id, :author_id, :body)
        
    end

end