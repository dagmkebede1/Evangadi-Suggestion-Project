let userInfo =`CREATE TABLE if not exists userInfo(
    userInfo_ID int auto_increment,
    user_first_name varchar(255) not null,
    user_name varchar(255) not null,
    user_last_name varchar(255) not null,
    user_email varchar(255) not null,
    user_password varchar(255) not null,
    user_role varchar(255),
    PRIMARY KEY (userInfo_ID)
    )`

    export default userInfo;