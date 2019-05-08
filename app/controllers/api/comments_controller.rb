class Api::CommentsController < ApplicationController
    
    def create
        @comment = Comment.new
    end

    def destroy
    end

end