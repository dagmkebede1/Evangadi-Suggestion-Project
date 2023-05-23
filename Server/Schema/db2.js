let fromStudent =`CREATE TABLE if not exists studentInfo(
    question int auto_increment,
    sforwarded_from varchar(255) not null,
    sphase varchar(255) not null,
    stitle_of_the_course varchar(255) not null,
    scorrection_is_on varchar(255) not null,
    snote_on_correction varchar(255) not null,
    screenshot2 varchar(255) ,
    statuscheck  BOOLEAN , 
    PRIMARY KEY (question)
    )`

    export default fromStudent