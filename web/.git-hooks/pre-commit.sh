#!/usr/bin/env sh

set -e

command cd client/web
yarn lint-staged
yarn pin-deps
command cd -
