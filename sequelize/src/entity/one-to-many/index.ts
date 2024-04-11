import { Player } from "./Player.js";
import { Team } from "./Team.js";

Team.hasMany(Player, {
    foreignKey: {
        allowNull: false,
        name: "team_id",
    },
});

Player.belongsTo(Team, {
    foreignKey: {
        allowNull: false,
        name: "team_id",
    },
});

await Player.sync({ force: true });
await Team.sync({ force: true });

const teams = await Team.bulkCreate([
    { name: "Fluminense" },
    { name: "Real Madrid" },
]);

const players = await Player.bulkCreate([
    { name: "German Cano", team_id: 1 },
    { name: "Marcelo", team_id: 1 },
    { name: "Vini Jr", team_id: 2 },
    { name: "Rodrygo", team_id: 2 },
]);

teams.forEach((team) => {
    console.log(team.toJSON());
});

console.log("=========================");

players.forEach((player) => {
    console.log(player.toJSON());
});

const response = await Player.findAll({
    include: { model: Team },
});

response.forEach((value) => {
    console.log(value.toJSON());
});
