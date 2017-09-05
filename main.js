var igrac = prompt("Izaberi papir, kamen ili makaze.").toLowerCase();
while (igrac !== "papir" &&  igrac !== "kamen" &&  igrac !== "makaze") {
		igrac = prompt("Izaberi neko od ponuđenih reči.");
	} 
var racunar = Math.random();

if (racunar < 0.34) {
	racunar = "papir";
}
else if (racunar <= 0.67) {
	racunar = "kamen";
}
else	{
	racunar = "makaze";
}
console.log("Računar: " + racunar);
console.log("Igrač: " + igrac);


if (igrac === racunar) {
	console.log("Nereseno");
}
else if (igrac === "papir") {
	if (racunar ==="kamen") {
		console.log("Igrač je pobedio.");
	}
	else	{
		console.log("Računar je pobedio.");
	
	}
}


if (igrac === "kamen") {
	if (racunar ==="makaze") {
		console.log("Igrač je pobedio.");
	}
	else	{
		console.log("Računar je pobedio.");
	}
}


if (igrac === "makaze") {
	if (racunar ==="papir") {
		console.log("Igrač je pobedio.");
	}
	else	{
		console.log("Računar je pobedio.");
	}
}


