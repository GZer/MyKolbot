/**
*	@filename	MFHelper.js
*	@author		kolton
*	@desc		help another player kill bosses or clear areas
*/

function MFHelper() {
	var i, player, playerAct, split,
		oldCommand = "",
		command = "";

	function ChatEvent(name, msg) {
		if (!player) {
			var i,
				match = ["kill", "clearlevel", "clear", "quit", "cows", "council", "goto"];

			if (msg) {
				for (i = 0; i < match.length; i += 1) {
					if (msg.match(match[i])) {
						player = Misc.findPlayer(name);

						break;
					}
				}
			}
		}

		if (player && name === player.name) {
			command = msg;
		}
	}

	this.buildCowRooms = function () {
		var i, j, room, kingPreset, badRooms, badRooms2,
			finalRooms = [],
			indexes = [];

		kingPreset = getPresetUnit(me.area, 1, 773);
		badRooms = getRoom(kingPreset.roomx * 5 + kingPreset.x, kingPreset.roomy * 5 + kingPreset.y).getNearby();

		for (i = 0; i < badRooms.length; i += 1) {
			badRooms2 = badRooms[i].getNearby();

			for (j = 0; j < badRooms2.length; j += 1) {
				if (indexes.indexOf(badRooms2[j].x.toString() + badRooms2[j].y.toString()) === -1) {
					indexes.push(badRooms2[j].x.toString() + badRooms2[j].y.toString());
				}
			}
		}

		room = getRoom();

		do {
			if (indexes.indexOf(room.x.toString() + room.y.toString()) === -1) {
				finalRooms.push([room.x * 5 + room.xsize / 2, room.y * 5 + room.ysize / 2]);
			}
		} while (room.getNext());

		return finalRooms;
	};

	this.clearCowLevel = function () {
		var room, result, myRoom,
			rooms = this.buildCowRooms();

		function RoomSort(a, b) {
			return getDistance(myRoom[0], myRoom[1], a[0], a[1]) - getDistance(myRoom[0], myRoom[1], b[0], b[1]);
		}

		while (rooms.length > 0) {
			// get the first room + initialize myRoom var
			if (!myRoom) {
				room = getRoom(me.x, me.y);
			}

			if (room) {
				if (room instanceof Array) { // use previous room to calculate distance
					myRoom = [room[0], room[1]];
				} else { // create a new room to calculate distance (first room, done only once)
					myRoom = [room.x * 5 + room.xsize / 2, room.y * 5 + room.ysize / 2];
				}
			}

			rooms.sort(RoomSort);
			room = rooms.shift();

			result = Pather.getNearestWalkable(room[0], room[1], 10, 2);

			if (result) {
				Pather.moveTo(result[0], result[1], 3);

				if (!Attack.clear(30)) {
					return false;
				}
			}
		}

		return true;
	};

	addEventListener("chatmsg", ChatEvent);
	Town.doChores();
	Town.move("portalspot");

	if (Config.Leader) {
		for (i = 0; i < 30; i += 1) {
			if (Misc.inMyParty(Config.Leader)) {
				break;
			}

			delay(1000);
		}

		if (i === 30) {
			throw new Error("MFHelper: Leader not partied");
		}

		player = Misc.findPlayer(Config.Leader);
	}

	if (player) {
		if (!Misc.poll(() => player.area, 120*60, 100 + me.ping)) {
			throw new Error('Failed to wait for player area');
		}

		playerAct = Misc.getPlayerAct(Config.Leader);

		if (playerAct && playerAct !== me.act) {
			Town.goToTown(playerAct);
			Town.move("portalspot");
		}
	}

	// START
MainLoop:
	while (true) {
		if (me.playertype != 1 && me.mode === 17) {
			while (!me.inTown) {
				me.revive();
				delay(1000);
			}

			Town.move("portalspot");
			print("revived!");
		}

		if (player) {

			if (Config.LifeChicken > 0 && me.hp <= Math.floor(me.hpmax * Config.LifeChicken / 100)) {
				Town.heal();
				Town.move("portalspot");
			}

			// Finish MFHelper script if leader is in Chaos or Throne
			if ([108, 131].indexOf(player.area) > -1) {
				break MainLoop;
			}

			if (command !== oldCommand) {
				oldCommand = command;
				
				if (command.indexOf("quit") > -1) {
					break MainLoop;
				} else if (command.indexOf("goto") > -1) {
					print("ÿc4MFHelperÿc0: Goto");
					split = command.substr(6);

					try {
						if (!!parseInt(split, 10)) {
								split = parseInt(split, 10);
							}

						Town.goToTown(split, true);
						Town.move("portalspot");
					} catch (townerror) {
						print(townerror);
					}

					delay(500 + me.ping);
				} else if (command.indexOf("cows") > -1) {
					print("ÿc4MFHelperÿc0: Clear Cows");

					for (i = 0; i < 5; i += 1) {
						if (Town.goToTown(1) && Pather.usePortal(39)) {
							break;
						}

						delay(500 + me.ping);
					}

					if (me.area === 39) {
						Precast.doPrecast(false);
						this.clearCowLevel();
						delay(1000);

						if (!Pather.getPortal(null, player.name) || !Pather.usePortal(null, player.name)) {
							Town.goToTown();
						}
					} else {
						print("Failed to use portal.");
					}
				} else {
					for (i = 0; i < 5; i += 1) {
						if (Pather.usePortal(player.area, player.name)) {
							break;
						}

						delay(500 + me.ping);
					}

					delay(1000); // delay to make sure leader's area is accurate

					if (!me.inTown && me.area === player.area) {
						Precast.doPrecast(true);

						if (command.indexOf("kill") > -1) {
							print("ÿc4MFHelperÿc0: Kill");
							split = command.split("kill ")[1];

							try {
								if (!!parseInt(split, 10)) {
									split = parseInt(split, 10);
								}

								Attack.kill(split);
								Pickit.pickItems();
							} catch (killerror) {
								print(killerror);
							}
						} else if (command.indexOf("clearlevel") > -1) {
							print("ÿc4MFHelperÿc0: Clear Level " + getArea().name);
							Precast.doPrecast(true);
							Attack.clearLevel(Config.ClearType);
						} else if (command.indexOf("clear") > -1) {
							print("ÿc4MFHelperÿc0: Clear");
							split = command.split("clear ")[1];

							try {
								if (!!parseInt(split, 10)) {
									split = parseInt(split, 10);
								}

								Attack.clear(15, 0, split);
							} catch (killerror2) {
								print(killerror2);
							}
						} else if (command.indexOf("council") > -1) {
							print("ÿc4MFHelperÿc0: Kill Council");
							Attack.clearList(Attack.getMob([345, 346, 347], 0, 40));
						}

						delay(100);

						if (!Pather.getPortal(null, player.name) || !Pather.usePortal(null, player.name)) {
							Town.goToTown();
						}
					}
				}
			}
		}

		delay(100);
	}

	return true;
}
