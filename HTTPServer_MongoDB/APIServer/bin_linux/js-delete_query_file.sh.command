#!/bin/sh
cd $(dirname $0)

find ../js -name '*.query' -type f -delete;
find ../js__b2link__b2ker -name '*.query' -type f -delete;
find ../js__b2link__b2ker-excel -name '*.query' -type f -delete;
find ../js__b2link__fileServer -name '*.query' -type f -delete;
find ../js__b2link__sessionServer -name '*.query' -type f -delete;
find ../js__b2link__webHookServer -name '*.query' -type f -delete;

find ../js__b2link__SYS0037 -name '*.query' -type f -delete;