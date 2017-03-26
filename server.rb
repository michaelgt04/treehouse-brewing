require 'sinatra'
require 'sinatra/activerecord'
require 'dotenv/load'
require 'json'
require 'zlib'

current_dir = Dir.pwd
Dir["#{current_dir}/models/*.rb"].each { |file| require file }

get '/' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/beers' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/on-tap' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/retail-shop' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/blog' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/team' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/api/v1/beers' do
  beers = Beer.all

  content_type :json
  beers.to_json
end
