import { Mapper, Player } from 'ddnet';

const Aoe = new Mapper({ name: 'Aoe' });

const maps = await Aoe.getMaps();

const filteredMaps = maps.filter(val => val.releasedTimestamp !== null);

const sortedMaps = filteredMaps.sort((a, b) => (b.releasedTimestamp as number) - (a.releasedTimestamp as number));

console.log(
  sortedMaps.map(map => {
    const releaseDate = new Date(map.releasedTimestamp as number);

    const day = releaseDate.getDate();
    const month = releaseDate.getMonth() + 1;
    const year = releaseDate.getFullYear();

    return `${map.name} ${day}/${month}/${year}`;
  })
);

// "Planet Mars 22/03/2021"
