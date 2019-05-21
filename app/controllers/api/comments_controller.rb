class Api::CommentsController < ApplicationController
    
    before_action :logged_in?

    def create
        @comment = Comment.new(comment_params)
        
        if @comment.save
            render json: {message: "Comment saved!"}
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
        @comment.delete
    end

    def comment_params
        debugger
        params.require(:comment).permit(:track_id, :author_id, :body)
        
    end

end