function GetKeys() {
	Town.doChores();

	if (!me.findItems("pk1") || me.findItems("pk1").length < 3) {
		try {
			print("Countess");
			Pather.useWaypoint(6);
			Precast.doPrecast(true);
			Pather.journeyTo(25);
			Pather.moveToPreset(me.area, 2, 580);
			Attack.kill(getLocaleString(2875));
			Pickit.pickItems();
		} catch (countessError) {
			print("Countess failed");
		}
	}

	if (!me.findItems("pk2") || me.findItems("pk2").length < 3) {
		try {
			print("Summoner");
			Town.goToTown();
			Town.doChores();
			Pather.useWaypoint(74);
			Precast.doPrecast(true);
			Pather.moveToPreset(me.area, 2, 357, -3, -3);
			Attack.kill(250);
			Pickit.pickItems();
		} catch (summonerError) {
			print("Summoner failed");
		}
	}

	if (!me.findItems("pk3") || me.findItems("pk3").length < 3) {
		try {
			print("Nihlathak");
			Town.goToTown();
			Town.doChores();
			Pather.useWaypoint(123);
			Precast.doPrecast(true);
			Pather.moveToExit(124, true);
			Pather.moveToPreset(me.area, 2, 462);
			Attack.kill(526);
			Pickit.pickItems();
		} catch (nihlathakError) {
			print("Nihlathak failed");
		}
	}
}