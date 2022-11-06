CREATE TABLE `users` (
    `id` INT PRIMARY KEY
    , `name` VARCHAR(50) NOT NULL
    , `age` INT NOT NULL
);

REPLACE INTO `users` (
    `id`, `name`, `age`
) VALUES 
    (1, 'aaaa', 10)
    , (2, 'bbbb', 15)
    , (3, 'cccc', 21)
    , (4, 'dddd', 23)
;
