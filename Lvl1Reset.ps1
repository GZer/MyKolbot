$origin="C:\Users\gmcdo\Documents\MyKolbot\Lvl1Reset"
$destination="C:\Users\gmcdo\Saved Games\Diablo II\"
$logs="C:\Users\gmcdo\Documents\MyKolbot\d2bs\kolbot\logs\*"
$baselogs="C:\Users\gmcdo\Documents\MyKolbot\d2bs\logs\*"
foreach($file in $destination){Remove-Item -Path $file -Force -Recurse}
foreach($file in $logs){Remove-Item -Path $file -Force -Recurse}
foreach($file in $baselogs){Remove-Item -Path $file -Force -Recurse}
foreach($file in $origin){Copy-Item -Path $file -Destination $Destination -Force -Recurse}