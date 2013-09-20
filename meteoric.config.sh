# IP or URL of the server you want to deploy to
APP_HOST=3dcum.co

# Comment this if your host is not an EC2 instance
EC2_PEM_FILE=~/.ssh/mac-linux.pem

# What's your project's Git repo?
GIT_URL=https://github.com/abartholome2/3dcum.git

# Does your project use meteorite, or plain meteor?
METEORITE=false

# If not using Meteorite, you need to specify this
METEOR_RELEASE=0.6.4

# What's your app name?
APP_NAME=3dcum

# If your app is not on the repository root, set this
APP_PATH=.

# If you would like to use a different branch, set it here
GIT_BRANCH=master

# Kill the forever and node processes, and deletes the bundle directory and tar file prior to deploying
FORCE_CLEAN=false
