$origin="C:\Users\Geoffrey\Documents\GitHub\MyKolbot\Lvl1 Reset"
$destination="C:\Users\Geoffrey\Saved Games\Diablo II\"
$logs="C:\Users\Geoffrey\Documents\GitHub\MyKolbot\d2bs\kolbot\logs\*"
foreach($file in $destination){Remove-Item -Path $file -Force -Recurse}
foreach($file in $logs){Remove-Item -Path $file -Force -Recurse}
foreach($file in $origin){Copy-Item -Path $file -Destination $Destination -Force -Recurse}