import {
    Model,
    DataType,
    Table,
    Column,
    PrimaryKey,
    Unique,
    AutoIncrement
} from "sequelize-typescript";

@Table({
    tableName: "users",
    timestamps: true,
})

export class User extends Model<User> {

    @Unique @AutoIncrement @PrimaryKey
    @Column({
        allowNull: false,
        type: DataType.INTEGER.UNSIGNED
    })
    id: number

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    role: string

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    name: string

    @Unique
    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    email: string

    @Unique
    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    phoneNumber: string

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    password: string
}
