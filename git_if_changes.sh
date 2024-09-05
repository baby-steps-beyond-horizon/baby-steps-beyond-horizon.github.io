#!/bin/bash

info=$( git status | grep -i 'nothing to commit' )
echo $info
