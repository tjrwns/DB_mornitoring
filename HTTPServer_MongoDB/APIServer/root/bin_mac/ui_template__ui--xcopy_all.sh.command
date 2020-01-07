#!/bin/sh
cd $(dirname $0)

rsync -aruv ../ui_template/ ../ui/