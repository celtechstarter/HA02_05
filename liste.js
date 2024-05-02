let leereliste = [];
console.log("Die Liste ist noch leer!");

console.log("---------------------------------");

leereliste.push("Auto");
leereliste.push("Ufo");
leereliste.push("Stein");
leereliste.push("Pistole");
leereliste.push("Brille");
console.log("Diese Dinge wurde der Liste hinzugefügt: " + leereliste);

console.log("---------------------------------");

console.log("Meine neuen Items in der Liste sind nun:");
for (let i = 0; i < leereliste.length; i++) {
  console.log(leereliste[i]);
}
