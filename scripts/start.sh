# Check if __build/__ exists
if [ ! -d build ]; then
	echo "You haven't built the project idiot"
	exit
fi

# Run
cd build
firefox localhost:8000/build
python3 -m http.server