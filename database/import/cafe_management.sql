-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 11, 2022 at 08:18 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cafe_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `chef`
--

CREATE TABLE `chef` (
  `chef_id` bigint(5) NOT NULL,
  `chef_name` varchar(50) NOT NULL,
  `chef_contact` varchar(50) NOT NULL,
  `chef_brigade` varchar(30) NOT NULL,
  `chef_number` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chef`
--

INSERT INTO `chef` (`chef_id`, `chef_name`, `chef_contact`, `chef_brigade`, `chef_number`) VALUES
(62361, 'Gordon Ramsay', 'Gordon@Gordonramsay.com', 'Kitchen Chef', 9567638708),
(98574, 'Knox Allen', 'KnoxAllen@Gordonramsay.com', 'Under-Cheif', 4864342405),
(90879, 'Brody Morgan', 'qcrona@labadie.com', 'Sauté Cook', 3416082919),
(96470, 'Charlie Watts', 'kadin09@Gordonramsay.com', 'Senior Chef', 9109819973),
(29622, 'Brantley Hall', 'rhalvorson@hotmail.com', 'Cook', 6977498285),
(95339, 'Erik Mills', 'jast.mitchel@kohler.com', 'Cook', 2863459282),
(66975, 'Jaylen Patterson', 'kasey07@gmail.com', 'Cook', 9088232657),
(91821, 'Conor Turner', 'cecil.pouros@gmail.com', 'Assistant Cook', 2099126313),
(65653, 'Ian Ross', 'reichel.judah@yahoo.com', 'Apprentice', 9472402924),
(47605, 'Pablo Ramos', 'schumm.eldon@kling.com', 'Grill Cook', 3872194001),
(93559, 'Aiden Floyd', 'ebony.heaney@gmail.com', 'Pantry Supervisor', 2903010178),
(76479, 'Grant Watkins', 'anika.rodriguez@gmail.com', 'Butcher and Baker', 8096625331);

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `item_id` bigint(10) NOT NULL,
  `item_name` varchar(50) NOT NULL,
  `item_availability` text NOT NULL,
  `item_price` int(11) NOT NULL,
  `item_long_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`item_id`, `item_name`, `item_availability`, `item_price`, `item_long_description`) VALUES
(77616, 'Caprese Pizza', 'Available', 1499, 'This is a variety of Italian pizza that is traditionally topped with cherry tomatoes, mozzarella di bufala, olive oil, and fresh basil leaves. It provides a great way to use up leftover tomatoes, and some cooks like to finish it off with a drizzle of balsamic reduction on top.'),
(15908, 'Ciabatta', 'Available', 849, 'Literally translated to a slipper, as a reference to its shape, ciabatta is an Italian type of white bread made with yeast and wheat flour. It is characterized by numerous air pockets on the interior and a crispy crust. The first ciabatta was made in 1982 by a Veronese miller and baker named Arnaldo Cavallari.\r\n\r\nThe bread was invented as a response to the rising popularity of French baguette, as the bakers were worried that it might endanger their business. Ciabatta is considered an ideal choice for sandwiches because the crumb absorbs liquids very well. Today, many regions in Italy have their own variations of the original recipe, producing ciabattas with olive oil, whole wheat flour, marjoram, and milk.'),
(91698, ' Key lime pie', 'Available', 499, 'If life gives you limes, don\'t make limeade, make a Key lime pie. The official state pie of Florida, this sassy tart has made herself a worldwide reputation, which started in -- where else? -- the Florida Keys, from whence come the tiny limes that gave the pie its name.\r\nAunt Sally, a cook for Florida\'s first self-made millionaire, ship salvager William Curry, gets the credit for making the first Key lime pie in the late 1800s. But you might also thank Florida sponge fisherman for likely originating the concoction of key lime juice, sweetened condensed milk, and egg yolks, which could be \"cooked\" (by a thickening chemical reaction of the ingredients) at sea.'),
(25469, 'Tater tots', 'Available', 749, 'We love French fries, but for an American food variation on the potato theme, one beloved at Sonic drive-ins and school cafeterias everywhere, consider the Tater Tot.\r\nNotice it often has the registered trademark -- these commercial hash brown cylinders are indeed proprietary to the Ore-Ida company. If you\'d been one of the Grigg brothers who founded Ore-Ida, you\'d have wanted to come up with something to do with leftover slivers of cut-up potatoes, too. They added some flour and seasoning and shaped the mash into tiny tots and put them on the market in 1956. A little more than 50 years later, America is eating about 32 million kilos of these taters annually.'),
(32360, 'San Francisco sourdough bread', 'Available', 129, 'Sourdough is as old as the pyramids and not coincidentally was eaten in ancient Egypt. But the hands-down American favorite, and the sourest variety, comes from San Francisco.\r\nAs much a part of NoCal culinary culture as Napa Valley wine, sourdough bread has been a staple since Gold Rush days. Once upon a frontier time, miners (called \"sourdoughs\" for surviving on the stuff) and settlers carried sourdough starter (more reliable than other leavening) in pouches around their necks or on their belts.\r\nThank goodness that\'s not the way they do it at Boudin Bakery, which has been turning out the bread that bites back in the City by the Bay since 1849.'),
(25843, ' Cobb salad', 'Available', 249, 'The chef\'s salad originated back East, but American food innovators working with lettuce out West weren\'t going to be outdone.\r\nIn 1937, Bob Cobb, the owner of The Brown Derby, was scrounging around at the restaurant\'s North Vine location for a meal for Sid Grauman of Grauman\'s Theater when he put together a salad with what he found in the fridge: a head of lettuce, an avocado, some romaine, watercress, tomatoes, some cold chicken breast, a hard-boiled egg, chives, cheese, and some old-fashioned French dressing.\r\nBrown Derby lore says, \"He started chopping. Added some crisp bacon, swiped from a busy chef.\" The salad went onto the menu and straight into the heart of Hollywood.'),
(22732, ' Fajitas', 'Available', 999, 'Take some vaqueros working on the range and the cattle slaughtered to feed them. Throw in the throwaway cuts of meat as part of the hands\' take-home pay, and let cowboy ingenuity go to work.\r\nGrill skirt steak (faja in Spanish) over the campfire, wrap in a tortilla, and you\'ve got the beginning of a Rio Grande region tradition. The fajita is thought to have come off the range and into popular culture when a certain Sonny Falcon began operating fajita taco stands at outdoor events and rodeos in Texas beginning in 1969.\r\nIt wasn\'t long before the dish was making its way onto menus in the Lone Star State and spreading with its beloved array of condiments -- grilled onions and green pepper, pico de gallo, shredded cheese, and sour cream -- across the country. Don\'t forget the Altoids.'),
(35136, 'Banana split', 'Available', 319, 'Like the banana makes it good for you. Still, kudos to whoever invented the variation of the sundae known as the banana split. There\'s the 1904 Latrobe, Pennsylvania, story, in which future optometrist David Strickler was experimenting with sundaes at a pharmacy soda fountain, split a banana lengthwise, and put it in a long boat dish.\r\nAnd the 1907 Wilmington, Ohio, story, wherein restaurant owner Ernest Hazard came up with it to draw students from a nearby college. Fame spread after a Walgreens in Chicago made the split its signature dessert in the 1920s. Whatever the history, you\'ll find plenty food for thought at the annual Banana Split Festival, which takes place on the second weekend in June in Wilmington.'),
(91428, 'Cornbread', 'Available', 99, 'It\'s one of the pillars of Southern cooking, but cornbread is the soul food of many a culture -- black, white, and Native American -- and not just south of the Mason-Dixon. Grind corn coarsely and you\'ve got grits; soak kernels in alkali, and you\'ve got hominy (which we encourage you to cook up into posole). Leaven finely ground cornmeal with baking powder, and you\'ve got cornbread.\r\nSouthern hushpuppies and corn pone, New England johnnycakes; cooked in a skillet or in muffin tins; flavored with cheese, herbs, or jalapenos -- cornbread in any incarnation remains the quick and easy go-to bread that historically made it a favorite of Native American and pioneer mothers and keeps it on tables across the country today.'),
(68269, 'GORP', 'Available', 400, '\"Good Old Raisins and Peanuts,\" GORP is the energy salvation of backpackers everywhere.\r\nCenturies before trail mix came by the bag and the bin, it was eaten in Europe, where hiking is practically a national pastime.\r\nThe thing to remember here is that the stuff is American food rocket fuel. Add all the granola, seeds, nuts, dried fruit, candied ginger, and M&Ms you want. Just be sure to store in a bear-proof canister because suspending from a branch in a nylon sack isn\'t going to do it.');

-- --------------------------------------------------------

--
-- Table structure for table `order_table`
--

CREATE TABLE `order_table` (
  `order_id` int(10) NOT NULL,
  `order_name` varchar(50) NOT NULL,
  `order_price` int(11) NOT NULL,
  `order_chef` varchar(50) NOT NULL,
  `order_prescription` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_table`
--

INSERT INTO `order_table` (`order_id`, `order_name`, `order_price`, `order_chef`, `order_prescription`) VALUES
(95483, 'San Francisco sourdough bread', 129, 'Conor Turner', 'No Advises'),
(41829, 'Banana split', 319, 'Gordon Ramsay', 'Serve it Chilled'),
(62344, ' Key lime pie', 499, 'Ian Ross', 'Add Chilli Flakes and Pepperoni');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` bigint(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `phone`) VALUES
(2110520062, 'Bharath', 'Kumar', '2110520062@klh.edu.in', 8247228027);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
