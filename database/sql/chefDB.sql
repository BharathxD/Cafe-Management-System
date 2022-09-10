
CREATE TABLE `cafe_management`.`chef` 
    (`chef_id` BIGINT(5) NOT NULL , 
        `chef_name` VARCHAR(50) NOT NULL , 
            `chef_contact` VARCHAR(50) NOT NULL , 
                `chef_brigade` VARCHAR(30) NOT NULL , 
                    `chef_number` BIGINT(20) NOT NULL ) ENGINE = InnoDB;