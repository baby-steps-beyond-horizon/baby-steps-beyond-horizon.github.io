#!/bin/bash

info=$( git status | grep -i 'nothing to commit' )

if [ -z $info ]
then
  git add -A
  git commit -m 'automatic commit message'
  git push
fi
