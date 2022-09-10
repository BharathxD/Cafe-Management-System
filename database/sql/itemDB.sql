CREATE TABLE `cafe_management`.`item` 
    (`item_id` BIGINT(10) NOT NULL , 
        `item_name` VARCHAR(50) NOT NULL , 
            `item_availability` TEXT NOT NULL , 
                `item_price` INT(11) NOT NULL , 
                    `item_long_description` TEXT NOT NULL ) ENGINE = InnoDB;