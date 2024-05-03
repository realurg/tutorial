import { Player, Servers } from 'ddnet';

const Cor = await Player.new('Cor');

const allMapStats = Cor.allMapStats.filter(val => val.finishCount);

const ranks = allMapStats;

// const ranks = [ranks_novice, ranks_moderate, ranks_brutal, ranks_insane, ranks_dummy, ranks_race, ranks_solo, ranks_oldschool, ranks_ddmaxEasy, ranks_ddmaxPro, ranks_ddmaxNext, ranks_ddmaxNut, ranks_fun];

console.log(ranks);
