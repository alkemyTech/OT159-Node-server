module.exports = (sequelize, dataTypes) => {

    let alias = 'Organization'; 

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(50), 
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        phone: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        welcome: {
            type: dataTypes.STRING,
            allowNull: false
        },
        aboutUsText: {
            type: dataTypes.STRING,
            allowNull: true
        }

    };

    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Organization = sequelize.define(alias,cols,config);

    return Organization
};