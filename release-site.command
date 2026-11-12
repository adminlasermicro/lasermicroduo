#!/bin/zsh -l
# Builds and releases LaserMicroDuo.com to Wix. Double-click to run.
cd "$(dirname "$0")" || exit 1
[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh" && nvm use >/dev/null 2>&1
echo "Building the site..."
npm run build || { echo; echo "Build failed. Nothing was released."; read -k1 "?Press any key to close."; exit 1; }
echo; echo "Releasing to Wix..."
npx wix release -c "Ink & Copper palette and Sunrise Seal logo" && echo && echo "Released." || echo "Release failed."
echo; read -k1 "?Press any key to close."
