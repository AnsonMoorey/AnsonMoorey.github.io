:: Created by Anson M.
:: My discord: Drifter#1403

@echo off
title Send CMD Message to Target
set /P target=Enter Target PC:
set /P sec=Enter Display Time (secs):
msg * /server:%target% /time:%sec%
set /P exit=...End Process...
