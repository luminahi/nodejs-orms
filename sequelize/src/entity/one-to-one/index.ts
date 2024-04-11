import { TeacherRegistryCode } from "./TeacherRegistryCode.js";
import { Teacher } from "./Teacher.js";

Teacher.hasOne(TeacherRegistryCode, {
    foreignKey: {
        name: "teacher_id",
        allowNull: false,
    },
});

TeacherRegistryCode.belongsTo(Teacher, {
    foreignKey: {
        name: "teacher_id",
        allowNull: false,
    },
});

await TeacherRegistryCode.sync({ force: true });
await Teacher.sync({ force: true });

const teacher1 = await Teacher.create({ name: "Lucas Neto" });
const teacher2 = await Teacher.create({ name: "Alex Lima" });
const teacher3 = await Teacher.create({ name: "Karen Souza" });

console.log(teacher1.toJSON());
console.log(teacher2.toJSON());
console.log(teacher3.toJSON());

const reg1 = await TeacherRegistryCode.create({
    identifier: "AA000011BBCC",
    teacher_id: 1,
});
const reg2 = await TeacherRegistryCode.create({
    identifier: "AA000011BBBB",
    teacher_id: 2,
});
const reg3 = await TeacherRegistryCode.create({
    identifier: "AA000011BBEE",
    teacher_id: 3,
});

console.log(reg1.toJSON());
console.log(reg2.toJSON());
console.log(reg3.toJSON());

const teachers = await Teacher.findAll();
const registries = await TeacherRegistryCode.findAll({
    attributes: ["identifier"],
});

teachers.forEach((value) => console.log(value.toJSON()));
console.log("================================");
registries.forEach((value) => console.log(value.toJSON()));
