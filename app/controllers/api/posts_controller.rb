class Api::PostsController < ApplicationController


    def show
        @post = Post.find(params[:id])
        if @post
            render json: @post, status: 200
        else
            render json: @post.errors.full_messages, status: 404
        end

    end


    def index
        
        @blog = Blog.find(params[:blog_id])
        @posts = @blog.posts
        render json: @posts, status: 200
    end
    
    def create
        @post = Post.new(post_params)
        if @post.save
            render json: @post, status: 200
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
      
        @post = Post.find(params[:id])
      
        if @post.destroy
          
            render json: @post, status: 200
        else

            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render json: @post, status: 200
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private

    def post_params
        params.require(:post).permit(:blog_id, :title, :body)
    end

end