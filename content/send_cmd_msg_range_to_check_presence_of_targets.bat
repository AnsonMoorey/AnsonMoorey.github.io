@echo off
title Check Presence of a Range of PCs

set /P name_prefix=Enter PC name prefix (Comes before the PC id):
set /P range_start=Enter PC id range start:
set /P range_end=Enter PC id range end:
set /P message=Enter Message:

echo.
echo Beginning PC Presence Check
echo An error signifies that the specified PC is offline or does not exist.
echo.

for /l %%x in (%range_start%, 1, %range_end%) do (
echo %name_prefix%%%x
msg * /server:%name_prefix%%%x /time:1 "%message%"
echo.
)

set /P exit=...End Process...