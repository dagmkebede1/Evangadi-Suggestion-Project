let createqueryTable = `CREATE TABLE if not exists forQuery(
    forQuery int auto_increment,
    forwarded_from varchar(255) not null,
    phase varchar(255) not null,
    title_of_the_course varchar(255) not null,
    correction_is_on varchar(255) not null,
    note_on_correction varchar(255) not null,
    screenshot1 varchar(255),
    statuscheck  BOOLEAN  , 
    PRIMARY KEY (forQuery)
    )`

    export default createqueryTable
