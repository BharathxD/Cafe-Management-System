#!/bin/bash

ENV="touch .env"
OPEN_ENV="code .env"
echo Fill The Environment Variables...
START="npm start"
NPM_INSTALL="npm install"

$ENV
$OPEN_ENV
$NPM_INSTALL
$START