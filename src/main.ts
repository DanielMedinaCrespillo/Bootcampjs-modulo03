interface Groups {
  namegroup: string;
  age: number;
  active: Boolean;
  gender: string;
}

const popRock = "🎵 Pop Rock";
const rock = "Rock";
const hardRock = "🤘 Hard Rock";
const classic = "🎼 Clásica";

const beatles: Groups = {
  namegroup: "The Beatles",
  age: 1960,
  active: true,
  gender: popRock,
};

const queen: Groups = {
  namegroup: "Queen",
  age: 1970,
  active: false,
  gender: rock,
};

const acdc: Groups = {
  namegroup: "ACDC",
  age: 1973,
  active: true,
  gender: hardRock,
};

const beethoven: Groups = {
  namegroup: "Ludwig van Beethoven",
  age: 1770,
  active: false,
  gender: classic,
};

const rolling: Groups = {
  namegroup: "The Rolling Stones",
  age: 1962,
  active: true,
  gender: rock,
};

const titlestyle =
  "background-color: green; font-weight: bold; font-size:larger; color: black";

console.log(
  `%cNombre: ${beatles.namegroup}`,
  titlestyle,
  `/ Año de fundación: ${beatles.age} / Activo: ${beatles.active} / Genero: ${beatles.gender}`
);

console.log(
  `%cNombre: ${queen.namegroup}`,
  titlestyle,
  `/ Año de fundación: ${queen.age} / Activo: ${queen.active} / Genero: ${queen.gender}`
);

console.log(
  `%cNombre: ${acdc.namegroup}`,
  titlestyle,
  `/ Año de fundación: ${acdc.age} / Activo: ${acdc.active} / Genero: ${acdc.gender}`
);

console.log(
  `%cNombre: ${beethoven.namegroup}`,
  titlestyle,
  `/ Año de fundación: ${beethoven.age} / Activo: ${beethoven.active} / Genero: ${beethoven.gender}`
);

console.log(
  `%cNombre: ${rolling.namegroup}`,
  titlestyle,
  `/ Año de fundación: ${rolling.age} / Activo: ${rolling.active} / Genero: ${rolling.gender}`
);
