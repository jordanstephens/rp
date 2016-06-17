npm install && npm run build
cp -r build /tmp/rp-build
git checkout gh-pages
cp -r /tmp/rp-build/* .
git add .
git commit -am "deploy - $(date)"
