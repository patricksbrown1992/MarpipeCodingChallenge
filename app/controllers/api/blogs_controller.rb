class Api::BlogsController < ApplicationController

    def create
        @blog = Blog.new(blog_params)
        if @blog.save
            render json: @blog, status: 200
        else    
            render json: @blog.errors.full_messages, status: 422
        end
    end

    def show
        @blog = Blog.find(params[:id])
        if @blog
            render json: @blog, status: 200
        else
            render json: @blog.errors.full_messages, status: 404
        end
    end

    def index
        @user = User.find(params[:user_id])

        @blogs = @user.blogs
        render json: @blogs, status: 200
    end

    def destroy
        @blog = Blog.find(params[:id])
        if @blog.destroy
            render json: @blog, status: 200
        else
            render json: @blog.errors.full_messages, status: 422
        end
    end

    def update
        @blog = Blog.find(params[:id])
        if @blog.update(blog_params)
            render json: @blog, status: 200
        else
            render json: @blog.errors.full_messages, status: 422
        end
    end


    private

    def blog_params
        params.require(:blog).permit(:title, :user_id)
    end

end