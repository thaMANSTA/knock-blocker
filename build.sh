#!/bin/sh

mkdir build;

cp -r src/* README.md LICENSE img ./build;

cd build/;

zip -r ../dist/knock-blocker-chrome-extension.zip *;