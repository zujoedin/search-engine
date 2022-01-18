<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Actor;
use App\Models\Content;
class AddSeed extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {



            $actors = [                
                [
                    'first_name' => "robin" ,
                    'last_name' => "williams", 
                ], 
                [
                    'first_name' => "Bryan" ,
                    'last_name' => "Cranston", 
                ],   
                [
                    'first_name' => "Jared" ,
                    'last_name' => "Harris", 
                ],
                [
                    'first_name' => "Ryan" ,
                    'last_name' => "Reynolds", 
                ],  
                [
                    'first_name' => "Brad" ,
                    'last_name' => "Pitt", 
                ],  
                [
                    'first_name' => "Nathan" ,
                    'last_name' => "Fillion", 
                ],  
                [
                    'first_name' => "Tom" ,
                    'last_name' => "Hanks", 
                ],  
                [
                    'first_name' => "Jenifer" ,
                    'last_name' => "Aniston", 
                ],  
                [
                    'first_name' => "Leonardo" ,
                    'last_name' => "Dicaprio", 
                ],  
                [
                    'first_name' => "Matthew" ,
                    'last_name' => "McConaughey", 
                ],  
                [
                    'first_name' => "Uma" ,
                    'last_name' => "Turman", 
                ],  
                [
                    'first_name' => "Nicolas" ,
                    'last_name' => "Cage", 
                ],  
                [
                    'first_name' => "Keanu" ,
                    'last_name' => "Reeves", 
                ],  
                [
                    'first_name' => "Steve" ,
                    'last_name' => "Carell", 
                ],  
                [
                    'first_name' => "David" ,
                    'last_name' => "Attenborough", 
                ],  
                [
                    'first_name' => "Justin" ,
                    'last_name' => "Roiland", 
                ],  
                [
                    'first_name' => "Silvester" ,
                    'last_name' => "Stallone", 
                ],  
                [
                    'first_name' => "Morgan" ,
                    'last_name' => "Freeman", 
                ],  
                [
                    'first_name' => "Benedict" ,
                    'last_name' => "Cumberbatch", 
                ],
                [
                    'first_name' => "James" ,
                    'last_name' => "Gandolfini", 
                ],
                [
                    'first_name' => "Tom" ,
                    'last_name' => "Holland", 
                ],
                [
                    'first_name' => "Mark" ,
                    'last_name' => "Hamill", 
                ],
                [
                    'first_name' => "Natalie" ,
                    'last_name' => "Portman", 
                ],
                [
                    'first_name' => "Dominic" ,
                    'last_name' => "West", 
                ],
               
            ];

            foreach ($actors as $actor) {
                $newActor = Actor::create($actor);
                $newActor->save();
            }

        
            $contents = [                
                [
                    'type_id' => 1,
                    'genre_id' => 1, 
                    'title' => "Aladdin",   
                    'cover_image' => "aladdin.jpg", 
                    'description' => "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Breaking Bad",   
                    'cover_image' => "breaking_bad.jpg", 
                    'description' => "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Chernobyl",   
                    'cover_image' => "chernobyl.jpg", 
                    'description' => "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Catch Me if You Can",   
                    'cover_image' => "catch_me.jpg", 
                    'description' => "Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Deadpool",   
                    'cover_image' => "deadpool.jpg", 
                    'description' => "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Fight Club",   
                    'cover_image' => "fight_club.jpg", 
                    'description' => "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 2,
                    'genre_id' => rand(1, 7), 
                    'title' => "Firefly",   
                    'cover_image' => "firefly.jpg", 
                    'description' => "Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them.",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Forrest Gump",   
                    'cover_image' => "forrest_gump.jpg", 
                    'description' => "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 2,
                    'genre_id' => rand(1, 7), 
                    'title' => "Friends",   
                    'cover_image' => "friends.jpg", 
                    'description' => "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.
                    ",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Green Mile",   
                    'cover_image' => "green_mile.jpg", 
                    'description' => "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Inception",   
                    'cover_image' => "inception.jpg", 
                    'description' => "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Interstellar",   
                    'cover_image' => "interstellar.jpg", 
                    'description' => "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.
                    ",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],               
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Kill Bill",   
                    'cover_image' => "kill_bill.jpg", 
                    'description' => "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.
                    ",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Matrix",   
                    'cover_image' => "matrix.jpg", 
                    'description' => "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose.",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 2,
                    'genre_id' => rand(1, 7), 
                    'title' => "Office",   
                    'cover_image' => "office.jpg", 
                    'description' => "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 2,
                    'genre_id' => rand(1, 7), 
                    'title' => "Planet Earth",   
                    'cover_image' => "planet_earth.jpg", 
                    'description' => "David Attenborough returns with a new wildlife documentary that shows life in a variety of habitats.
                    ",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Pulp Fiction",   
                    'cover_image' => "pulp_fiction.jpg", 
                    'description' => "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.
                    ",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 2,
                    'genre_id' => rand(1, 7), 
                    'title' => "rick_morty",   
                    'cover_image' => "rick_morty.jpg", 
                    'description' => "An animated series that follows the exploits of a super scientist and his not-so-bright grandson.
                    ",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Rocky",   
                    'cover_image' => "rocky.jpg", 
                    'description' => "A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect.
                    ",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Shawshank Redemption",   
                    'cover_image' => "shawshank_redemption.jpg", 
                    'description' => "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.
                    ",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Sherlock",   
                    'cover_image' => "sherlock.jpg", 
                    'description' => "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.
                    ",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Snatch",   
                    'cover_image' => "snatch.jpg", 
                    'description' => "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.
                    ",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Spider Man",   
                    'cover_image' => "spider_man.jpg", 
                    'description' => "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help.",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 2,
                    'genre_id' => rand(1, 7), 
                    'title' => "Sopranos",   
                    'cover_image' => "sopranos.jpg", 
                    'description' => "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Star Trek",   
                    'cover_image' => "star_trek.jpg", 
                    'description' => "Ten years before Kirk, Spock, and the Enterprise, the USS Discovery discovers new worlds and lifeforms as one Starfleet officer learns to understand all things alien.",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Star Wars",   
                    'cover_image' => "star_wars.jpg", 
                    'description' => "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids.",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 1,
                    'genre_id' => rand(1, 7), 
                    'title' => "Terminal",   
                    'cover_image' => "terminal.jpg", 
                    'description' => "An Eastern European tourist unexpectedly finds himself stranded in JFK airport, and must take up temporary residence there.
                    ",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 2,
                    'genre_id' => rand(1, 7), 
                    'title' => "True Detective",   
                    'cover_image' => "true_detective.jpg", 
                    'description' => "Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 2,
                    'genre_id' => rand(1, 7), 
                    'title' => "V for Vendetta",   
                    'cover_image' => "vendeta.jpg", 
                    'description' => "In a future British tyranny, a shadowy freedom fighter, known only by the alias of V, plots to overthrow it with the help of a young woman.
                    ",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ],
                [
                    'type_id' => 2,
                    'genre_id' => rand(1, 7), 
                    'title' => "Wire",   
                    'cover_image' => "wire.jpg", 
                    'description' => "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.
                    ",
                    'release_date' => date('Y-m-d', strtotime( '+'.mt_rand(0,50).' years', strtotime('1970-05-12')))
                ]
            ];   
    
            
    
            foreach ($contents as $content) {
                $newContent = Content::create($content);
                $newContent->save();
            }
       
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
