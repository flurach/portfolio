# Check if __build/__ exists
if [ ! -d build ]; then
	echo "You haven't built the project idiot"
	exit
fi

# Copy files to a temporary directory
mkdir -p temp
cp -r build/* temp
cp -r icons temp
cp -r images temp

# Pack stuff
cd temp
zip -r packet.zip *

# Delete temp
mv packet.zip ..
cd ..
rm -rf temp

# Put it into __build/__
mv packet.zip build
echo "Are we cool yet?"