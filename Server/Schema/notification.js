let notification =`CREATE TABLE if not exists notification(
    notification_id int auto_increment,
    assigned_to varchar(255) not null,
    message varchar(255) not null,
    PRIMARY KEY (notification_id)
    )`

    export default notification