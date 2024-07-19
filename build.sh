#!/bin/bash

set -e

mkdir -p output/bin

# setup bvc
BVC_INSTALL_DIR=$HOME/.bytebm/bvc bash <(curl -s 'http://bvc-cdn.byted.org/install_bvc.sh')

# setup bytebm
$HOME/.bytebm/bvc/bvc clone byteapi/command/bytebm /tmp/bytebm -f && /tmp/bytebm/install

npm i && npm run pkg
