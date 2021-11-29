echo off
title Send CMD MSG Countdown With a Final Message
set /P target=Enter Target PC:
set /P len=Enter Countdown Length:
set /P message=Enter Final Message:
for /l %%x in (%len%, -1, 1) do (
msg * /server:%target% /time:1 "%%x"
)
msg * /server:%target% /time:1000 "%message%"
