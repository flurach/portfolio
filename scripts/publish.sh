# Clean the workspace
bash scripts/clean.sh

# Build the project
bash scripts/build.sh

# Pack the project files
bash scripts/pack.sh

# Cleanup again
mv build/packet.zip .
rm -rf build/*
mv packet.zip build