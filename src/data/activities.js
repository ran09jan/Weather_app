// Activities database organized by weather conditions and temperature
export const activities = {
  sunny: {
    icon: '☀️',
    title: 'Perfect Sunny Day',
    activities: [
      { 
        name: 'Beach Day', 
        icon: '🏖️', 
        description: 'Enjoy the sun and waves',
        links: [
          { text: 'Find Beaches', url: 'https://www.tripadvisor.com/Attractions-g1-Activities-c61-t52.html' },
          { text: 'Beach Safety Tips', url: 'https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/water-safety/beach-safety' }
        ]
      },
      { 
        name: 'Hiking', 
        icon: '🥾', 
        description: 'Explore nature trails',
        links: [
          { text: 'AllTrails', url: 'https://www.alltrails.com/' },
          { text: 'Hiking Tips', url: 'https://www.rei.com/learn/expert-advice/hiking-for-beginners.html' }
        ]
      },
      { 
        name: 'Picnic in the Park', 
        icon: '🧺', 
        description: 'Outdoor dining with friends',
        links: [
          { text: 'Park Finder', url: 'https://www.recreation.gov/' },
          { text: 'Picnic Ideas', url: 'https://www.foodnetwork.com/topics/picnic' }
        ]
      },
      { 
        name: 'Cycling', 
        icon: '🚴‍♂️', 
        description: 'Bike ride through the city',
        links: [
          { text: 'Bike Routes', url: 'https://www.komoot.com/' },
          { text: 'Cycling Safety', url: 'https://www.nhtsa.gov/road-safety/bicycle-safety' }
        ]
      },
      { 
        name: 'Outdoor Photography', 
        icon: '📸', 
        description: 'Capture beautiful moments',
        links: [
          { text: 'Photography Tips', url: 'https://www.nationalgeographic.com/photography/article/outdoor-photography-tips' },
          { text: 'Photo Spots', url: 'https://www.instagram.com/explore/tags/outdoorphotography/' }
        ]
      },
      { 
        name: 'BBQ Party', 
        icon: '🔥', 
        description: 'Grill with family and friends',
        links: [
          { text: 'BBQ Recipes', url: 'https://www.foodnetwork.com/topics/grilling-and-barbecue' },
          { text: 'Grilling Tips', url: 'https://www.weber.com/US/en/grill-skills/' }
        ]
      },
      { 
        name: 'Swimming', 
        icon: '🏊‍♀️', 
        description: 'Cool off in the pool',
        links: [
          { text: 'Public Pools', url: 'https://www.yelp.com/nearme/swimming-pools' },
          { text: 'Swimming Safety', url: 'https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/water-safety' }
        ]
      },
      { 
        name: 'Gardening', 
        icon: '🌱', 
        description: 'Tend to your plants',
        links: [
          { text: 'Gardening Guide', url: 'https://www.almanac.com/gardening' },
          { text: 'Plant Care Tips', url: 'https://www.gardeningknowhow.com/' }
        ]
      }
    ]
  },
  
  partlyCloudy: {
    icon: '⛅',
    title: 'Pleasant Partly Cloudy',
    activities: [
      { 
        name: 'Outdoor Sports', 
        icon: '⚽', 
        description: 'Perfect for football or tennis',
        links: [
          { text: 'Find Courts', url: 'https://www.tennisround.com/' },
          { text: 'Sports Meetups', url: 'https://www.meetup.com/topics/sports-fitness/' }
        ]
      },
      { 
        name: 'Walking Tour', 
        icon: '🚶‍♀️', 
        description: 'Explore the neighborhood',
        links: [
          { text: 'Free Walking Tours', url: 'https://www.freetour.com/' },
          { text: 'Self-Guided Tours', url: 'https://www.gpsmycity.com/' }
        ]
      },
      { 
        name: 'Outdoor Market', 
        icon: '🛒', 
        description: 'Browse local farmers markets',
        links: [
          { text: 'Farmers Markets', url: 'https://www.localharvest.org/farmers-markets/' },
          { text: 'Market Guide', url: 'https://www.usda.gov/media/blog/2018/08/02/farmers-markets-101' }
        ]
      },
      { 
        name: 'Jogging', 
        icon: '🏃‍♂️', 
        description: 'Go for a refreshing run',
        links: [
          { text: 'Running Routes', url: 'https://www.strava.com/' },
          { text: 'Running Tips', url: 'https://www.runnersworld.com/beginner/' }
        ]
      },
      { 
        name: 'Playground Fun', 
        icon: '🎠', 
        description: 'Great for kids to play outside',
        links: [
          { text: 'Find Playgrounds', url: 'https://www.yelp.com/nearme/playgrounds' },
          { text: 'Playground Safety', url: 'https://www.cdc.gov/healthyschools/physicalactivity/playground_safety.htm' }
        ]
      },
      { 
        name: 'Fishing', 
        icon: '🎣', 
        description: 'Try your luck at the lake',
        links: [
          { text: 'Fishing Spots', url: 'https://www.fishbrain.com/' },
          { text: 'Fishing License', url: 'https://www.takemefishing.org/fishing/fishing-licenses/' }
        ]
      },
      { 
        name: 'Outdoor Yoga', 
        icon: '🧘‍♀️', 
        description: 'Practice mindfulness in nature',
        links: [
          { text: 'Outdoor Yoga Classes', url: 'https://www.classpass.com/' },
          { text: 'Free Yoga Videos', url: 'https://www.yogawithadriene.com/' }
        ]
      }
    ]
  },

  cloudy: {
    icon: '☁️',
    title: 'Comfortable Cloudy Day',
    activities: [
      { 
        name: 'Museum Visit', 
        icon: '🏛️', 
        description: 'Explore art and history indoors',
        links: [
          { text: 'Find Museums', url: 'https://www.tripadvisor.com/Attractions-g1-Activities-c49.html' },
          { text: 'Virtual Tours', url: 'https://artsandculture.google.com/' }
        ]
      },
      { 
        name: 'Shopping', 
        icon: '🛍️', 
        description: 'Browse your favorite stores',
        links: [
          { text: 'Mall Directory', url: 'https://www.simon.com/' },
          { text: 'Local Shopping', url: 'https://www.yelp.com/nearme/shopping' }
        ]
      },
      { 
        name: 'Coffee Shop', 
        icon: '☕', 
        description: 'Cozy up with a warm drink',
        links: [
          { text: 'Find Coffee Shops', url: 'https://foursquare.com/' },
          { text: 'Coffee Recipes', url: 'https://www.coffeebrewguides.com/' }
        ]
      },
      { 
        name: 'Reading', 
        icon: '📚', 
        description: 'Enjoy a good book',
        links: [
          { text: 'Goodreads', url: 'https://www.goodreads.com/' },
          { text: 'Free eBooks', url: 'https://www.gutenberg.org/' }
        ]
      },
      { 
        name: 'City Walk', 
        icon: '🏙️', 
        description: 'Stroll through urban areas',
        links: [
          { text: 'Walking Routes', url: 'https://www.komoot.com/' },
          { text: 'City Guides', url: 'https://www.lonelyplanet.com/' }
        ]
      },
      { 
        name: 'Indoor Rock Climbing', 
        icon: '🧗‍♀️', 
        description: 'Challenge yourself indoors',
        links: [
          { text: 'Climbing Gyms', url: 'https://www.mountainproject.com/gym-guide' },
          { text: 'Climbing Basics', url: 'https://www.rei.com/learn/expert-advice/indoor-rock-climbing-basics.html' }
        ]
      },
      { 
        name: 'Cooking', 
        icon: '👨‍🍳', 
        description: 'Try a new recipe at home',
        links: [
          { text: 'Recipe Ideas', url: 'https://www.allrecipes.com/' },
          { text: 'Cooking Classes', url: 'https://www.cozymeal.com/' }
        ]
      }
    ]
  },

  rainy: {
    icon: '🌧️',
    title: 'Cozy Rainy Day',
    activities: [
      { 
        name: 'Movie Marathon', 
        icon: '🍿', 
        description: 'Perfect day for films',
        links: [
          { text: 'Netflix', url: 'https://www.netflix.com/' },
          { text: 'Movie Lists', url: 'https://www.imdb.com/chart/top/' }
        ]
      },
      { 
        name: 'Board Games', 
        icon: '🎲', 
        description: 'Fun family activities',
        links: [
          { text: 'Board Game Geek', url: 'https://boardgamegeek.com/' },
          { text: 'Game Rules', url: 'https://www.ultraboardgames.com/' }
        ]
      },
      { 
        name: 'Spa Day', 
        icon: '🛁', 
        description: 'Relax and pamper yourself',
        links: [
          { text: 'DIY Spa Ideas', url: 'https://www.byrdie.com/diy-spa-day-at-home' },
          { text: 'Find Spas', url: 'https://www.spafinder.com/' }
        ]
      },
      { 
        name: 'Baking', 
        icon: '🧁', 
        description: 'Make delicious treats',
        links: [
          { text: 'Baking Recipes', url: 'https://www.kingarthurbaking.com/' },
          { text: 'Baking Tips', url: 'https://www.foodnetwork.com/topics/baking' }
        ]
      },
      { 
        name: 'Indoor Crafts', 
        icon: '🎨', 
        description: 'Get creative with DIY projects',
        links: [
          { text: 'Pinterest Crafts', url: 'https://www.pinterest.com/search/pins/?q=diy%20crafts' },
          { text: 'Craft Tutorials', url: 'https://www.craftsy.com/' }
        ]
      },
      { 
        name: 'Video Games', 
        icon: '🎮', 
        description: 'Gaming session with friends',
        links: [
          { text: 'Steam', url: 'https://store.steampowered.com/' },
          { text: 'Game Reviews', url: 'https://www.metacritic.com/game' }
        ]
      },
      { 
        name: 'Puzzles', 
        icon: '🧩', 
        description: 'Challenge your mind',
        links: [
          { text: 'Online Puzzles', url: 'https://www.jigidi.com/' },
          { text: 'Brain Teasers', url: 'https://www.braingle.com/' }
        ]
      },
      { 
        name: 'Write in Journal', 
        icon: '📝', 
        description: 'Reflect on your thoughts',
        links: [
          { text: 'Journaling Tips', url: 'https://www.headspace.com/meditation/journaling' },
          { text: 'Writing Prompts', url: 'https://www.writingprompts.com/' }
        ]
      }
    ]
  },

  thunderstorm: {
    icon: '⛈️',
    title: 'Stay Safe Indoors',
    activities: [
      { 
        name: 'Indoor Workout', 
        icon: '💪', 
        description: 'Exercise safely at home',
        links: [
          { text: 'Fitness Blender', url: 'https://www.fitnessblender.com/' },
          { text: 'Nike Training', url: 'https://www.nike.com/ntc-app' }
        ]
      },
      { 
        name: 'Online Learning', 
        icon: '💻', 
        description: 'Take a course or tutorial',
        links: [
          { text: 'Coursera', url: 'https://www.coursera.org/' },
          { text: 'Khan Academy', url: 'https://www.khanacademy.org/' }
        ]
      },
      { 
        name: 'Meditation', 
        icon: '🧘‍♂️', 
        description: 'Find inner peace',
        links: [
          { text: 'Headspace', url: 'https://www.headspace.com/' },
          { text: 'Calm', url: 'https://www.calm.com/' }
        ]
      },
      { 
        name: 'Organize Home', 
        icon: '🏠', 
        description: 'Declutter and organize',
        links: [
          { text: 'Organization Tips', url: 'https://www.realsimple.com/home-organizing' },
          { text: 'Marie Kondo Method', url: 'https://konmari.com/' }
        ]
      },
      { 
        name: 'Call Friends', 
        icon: '📞', 
        description: 'Catch up with loved ones',
        links: [
          { text: 'Zoom', url: 'https://zoom.us/' },
          { text: 'Skype', url: 'https://www.skype.com/' }
        ]
      },
      { 
        name: 'Listen to Music', 
        icon: '🎵', 
        description: 'Enjoy your favorite songs',
        links: [
          { text: 'Spotify', url: 'https://www.spotify.com/' },
          { text: 'Apple Music', url: 'https://music.apple.com/' }
        ]
      },
      { 
        name: 'Indoor Photography', 
        icon: '📷', 
        description: 'Practice portrait photography',
        links: [
          { text: 'Photography Tips', url: 'https://www.petapixel.com/' },
          { text: 'Portrait Tutorials', url: 'https://www.youtube.com/results?search_query=indoor+portrait+photography' }
        ]
      }
    ]
  },

  snowy: {
    icon: '❄️',
    title: 'Winter Wonderland',
    activities: [
      { 
        name: 'Skiing', 
        icon: '⛷️', 
        description: 'Hit the slopes',
        links: [
          { text: 'Ski Resorts', url: 'https://www.snow.com/' },
          { text: 'Skiing Tips', url: 'https://www.ski.com/ski-lessons' }
        ]
      },
      { 
        name: 'Snowball Fight', 
        icon: '⛄', 
        description: 'Fun snow activities',
        links: [
          { text: 'Snow Games', url: 'https://www.parents.com/fun/activities/outdoor/snow-day-activities/' },
          { text: 'Winter Safety', url: 'https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/winter-storm' }
        ]
      },
      { 
        name: 'Ice Skating', 
        icon: '⛸️', 
        description: 'Glide on ice',
        links: [
          { text: 'Ice Rinks', url: 'https://www.yelp.com/nearme/ice-skating-rinks' },
          { text: 'Skating Basics', url: 'https://www.usfsa.org/participate/basic-skills' }
        ]
      },
      { 
        name: 'Hot Chocolate', 
        icon: '🍫', 
        description: 'Warm up with cocoa',
        links: [
          { text: 'Hot Chocolate Recipes', url: 'https://www.foodnetwork.com/topics/hot-chocolate' },
          { text: 'Cozy Cafes', url: 'https://foursquare.com/' }
        ]
      },
      { 
        name: 'Sledding', 
        icon: '🛷', 
        description: 'Thrilling downhill rides',
        links: [
          { text: 'Sledding Hills', url: 'https://www.yelp.com/nearme/sledding' },
          { text: 'Winter Safety', url: 'https://www.safekids.org/safetytips/field_age/little-kids-5-9/field_activity/winter-sports' }
        ]
      },
      { 
        name: 'Build Snowman', 
        icon: '☃️', 
        description: 'Create snow sculptures',
        links: [
          { text: 'Snowman Ideas', url: 'https://www.parents.com/fun/activities/outdoor/how-to-build-a-snowman/' },
          { text: 'Snow Sculpture Tips', url: 'https://www.familyhandyman.com/article/how-to-build-a-snowman/' }
        ]
      },
      { 
        name: 'Cozy Fireplace', 
        icon: '🔥', 
        description: 'Warm up by the fire',
        links: [
          { text: 'Fireplace Safety', url: 'https://www.redcross.org/get-help/how-to-prepare-for-emergencies/home-fire-safety/fireplace-safety' },
          { text: 'Virtual Fireplace', url: 'https://www.youtube.com/results?search_query=fireplace+video' }
        ]
      },
      { 
        name: 'Winter Photography', 
        icon: '📸', 
        description: 'Capture snowy landscapes',
        links: [
          { text: 'Winter Photo Tips', url: 'https://www.nationalgeographic.com/photography/article/winter-photography-tips' },
          { text: 'Cold Weather Camera Care', url: 'https://www.bhphotovideo.com/explora/photography/tips-and-solutions/cold-weather-photography-tips' }
        ]
      }
    ]
  },

  foggy: {
    icon: '🌫️',
    title: 'Mysterious Foggy Day',
    activities: [
      { 
        name: 'Indoor Cafe', 
        icon: '☕', 
        description: 'Cozy atmosphere perfect for cafes',
        links: [
          { text: 'Find Cafes', url: 'https://foursquare.com/' },
          { text: 'Coffee Culture', url: 'https://www.perfectdailygrind.com/' }
        ]
      },
      { 
        name: 'Library Visit', 
        icon: '📖', 
        description: 'Quiet reading time',
        links: [
          { text: 'Find Libraries', url: 'https://www.worldcat.org/' },
          { text: 'Digital Books', url: 'https://www.overdrive.com/' }
        ]
      },
      { 
        name: 'Art Gallery', 
        icon: '🖼️', 
        description: 'Appreciate art indoors',
        links: [
          { text: 'Find Galleries', url: 'https://www.artsy.net/' },
          { text: 'Virtual Galleries', url: 'https://artsandculture.google.com/' }
        ]
      },
      { 
        name: 'Cooking Class', 
        icon: '👩‍🍳', 
        description: 'Learn new culinary skills',
        links: [
          { text: 'Cooking Classes', url: 'https://www.cozymeal.com/' },
          { text: 'Online Tutorials', url: 'https://www.masterclass.com/categories/culinary-arts' }
        ]
      },
      { 
        name: 'Indoor Games', 
        icon: '🎯', 
        description: 'Darts, pool, or arcade games',
        links: [
          { text: 'Game Centers', url: 'https://www.yelp.com/nearme/arcades' },
          { text: 'Pool Rules', url: 'https://www.poolplayers.com/8-ball-rules/' }
        ]
      },
      { 
        name: 'Knitting/Crafts', 
        icon: '🧶', 
        description: 'Create something beautiful',
        links: [
          { text: 'Knitting Patterns', url: 'https://www.ravelry.com/' },
          { text: 'Craft Ideas', url: 'https://www.pinterest.com/search/pins/?q=crafts' }
        ]
      },
      { 
        name: 'Podcast Listening', 
        icon: '🎧', 
        description: 'Catch up on favorite shows',
        links: [
          { text: 'Spotify Podcasts', url: 'https://open.spotify.com/browse/podcasts' },
          { text: 'Apple Podcasts', url: 'https://podcasts.apple.com/' }
        ]
      }
    ]
  },

  hot: {
    icon: '🌡️',
    title: 'Beat the Heat',
    activities: [
      { 
        name: 'Swimming Pool', 
        icon: '🏊‍♀️', 
        description: 'Cool off in the water',
        links: [
          { text: 'Public Pools', url: 'https://www.yelp.com/nearme/swimming-pools' },
          { text: 'Water Safety', url: 'https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/water-safety' }
        ]
      },
      { 
        name: 'Ice Cream Shop', 
        icon: '🍦', 
        description: 'Treat yourself to something cold',
        links: [
          { text: 'Ice Cream Shops', url: 'https://www.yelp.com/nearme/ice-cream' },
          { text: 'Homemade Ice Cream', url: 'https://www.foodnetwork.com/topics/ice-cream' }
        ]
      },
      { 
        name: 'Mall Shopping', 
        icon: '🏬', 
        description: 'Stay cool in AC',
        links: [
          { text: 'Shopping Centers', url: 'https://www.simon.com/' },
          { text: 'Online Shopping', url: 'https://www.amazon.com/' }
        ]
      },
      { 
        name: 'Water Park', 
        icon: '🌊', 
        description: 'Fun water activities',
        links: [
          { text: 'Water Parks', url: 'https://www.tripadvisor.com/Attractions-g1-Activities-c61-t154.html' },
          { text: 'Water Safety Tips', url: 'https://www.cdc.gov/drowning/prevention/index.html' }
        ]
      },
      { 
        name: 'Early Morning Walk', 
        icon: '🌅', 
        description: 'Exercise before it gets too hot',
        links: [
          { text: 'Walking Routes', url: 'https://www.alltrails.com/' },
          { text: 'Heat Safety', url: 'https://www.cdc.gov/disasters/extremeheat/warning.html' }
        ]
      },
      { 
        name: 'Indoor Bowling', 
        icon: '🎳', 
        description: 'Stay cool while having fun',
        links: [
          { text: 'Bowling Alleys', url: 'https://www.yelp.com/nearme/bowling' },
          { text: 'Bowling Tips', url: 'https://www.bowl.com/Welcome/' }
        ]
      },
      { 
        name: 'Movie Theater', 
        icon: '🎬', 
        description: 'Enjoy AC and entertainment',
        links: [
          { text: 'Movie Times', url: 'https://www.fandango.com/' },
          { text: 'Theater Finder', url: 'https://www.movietickets.com/' }
        ]
      }
    ]
  },

  cold: {
    icon: '🥶',
    title: 'Stay Warm Activities',
    activities: [
      { 
        name: 'Indoor Rock Climbing', 
        icon: '🧗‍♀️', 
        description: 'Active indoor fun',
        links: [
          { text: 'Climbing Gyms', url: 'https://www.mountainproject.com/gym-guide' },
          { text: 'Climbing Basics', url: 'https://www.rei.com/learn/expert-advice/indoor-rock-climbing-basics.html' }
        ]
      },
      { 
        name: 'Sauna/Spa', 
        icon: '🧖‍♀️', 
        description: 'Warm up and relax',
        links: [
          { text: 'Find Spas', url: 'https://www.spafinder.com/' },
          { text: 'Sauna Benefits', url: 'https://www.healthline.com/health/sauna-benefits' }
        ]
      },
      { 
        name: 'Hot Soup', 
        icon: '🍲', 
        description: 'Warm comfort food',
        links: [
          { text: 'Soup Recipes', url: 'https://www.allrecipes.com/recipes/94/soups-stews-and-chili/' },
          { text: 'Soup Restaurants', url: 'https://www.yelp.com/nearme/soup' }
        ]
      },
      { 
        name: 'Gym Workout', 
        icon: '🏋️‍♂️', 
        description: 'Stay active indoors',
        links: [
          { text: 'Find Gyms', url: 'https://www.planetfitness.com/' },
          { text: 'Home Workouts', url: 'https://www.fitnessblender.com/' }
        ]
      },
      { 
        name: 'Bookstore Browse', 
        icon: '📚', 
        description: 'Cozy indoor exploration',
        links: [
          { text: 'Barnes & Noble', url: 'https://www.barnesandnoble.com/' },
          { text: 'Independent Bookstores', url: 'https://www.indiebound.org/' }
        ]
      },
      { 
        name: 'Tea Tasting', 
        icon: '🍵', 
        description: 'Warm drinks to heat up',
        links: [
          { text: 'Tea Shops', url: 'https://www.teavana.com/' },
          { text: 'Tea Guide', url: 'https://www.teatulia.com/tea-101/' }
        ]
      },
      { 
        name: 'Indoor Climbing', 
        icon: '🏔️', 
        description: 'Adventure sports indoors',
        links: [
          { text: 'Climbing Centers', url: 'https://www.climbing.com/places/gyms/' },
          { text: 'Bouldering Guide', url: 'https://www.outsideonline.com/outdoor-adventure/climbing/beginners-guide-bouldering/' }
        ]
      }
    ]
  },

  windy: {
    icon: '💨',
    title: 'Breezy Day Fun',
    activities: [
      { 
        name: 'Kite Flying', 
        icon: '🪁', 
        description: 'Perfect wind conditions',
        links: [
          { text: 'Kite Flying Tips', url: 'https://www.americankitefliers.org/' },
          { text: 'Buy Kites', url: 'https://www.amazon.com/s?k=kites' }
        ]
      },
      { 
        name: 'Sailing', 
        icon: '⛵', 
        description: 'Harness the wind power',
        links: [
          { text: 'Sailing Lessons', url: 'https://www.ussailing.org/' },
          { text: 'Sailing Clubs', url: 'https://www.sailingworld.com/' }
        ]
      },
      { 
        name: 'Windmill Tour', 
        icon: '🌪️', 
        description: 'See wind power in action',
        links: [
          { text: 'Wind Farm Tours', url: 'https://www.energy.gov/eere/wind' },
          { text: 'Renewable Energy Info', url: 'https://www.nrel.gov/wind/' }
        ]
      },
      { 
        name: 'Indoor Activities', 
        icon: '🏠', 
        description: 'Stay sheltered from strong winds',
        links: [
          { text: 'Indoor Entertainment', url: 'https://www.yelp.com/nearme/entertainment' },
          { text: 'Wind Safety', url: 'https://www.ready.gov/severe-weather' }
        ]
      },
      { 
        name: 'Photography', 
        icon: '📸', 
        description: 'Capture dramatic wind effects',
        links: [
          { text: 'Wind Photography Tips', url: 'https://www.petapixel.com/' },
          { text: 'Weather Photography', url: 'https://www.nationalgeographic.com/photography/article/weather-photography-tips' }
        ]
      },
      { 
        name: 'Surfing', 
        icon: '🏄‍♂️', 
        description: 'Wind creates great waves',
        links: [
          { text: 'Surf Reports', url: 'https://www.surfline.com/' },
          { text: 'Surfing Lessons', url: 'https://www.surfrider.org/' }
        ]
      },
      { 
        name: 'Indoor Sports', 
        icon: '🏓', 
        description: 'Avoid outdoor wind interference',
        links: [
          { text: 'Sports Centers', url: 'https://www.yelp.com/nearme/recreation-centers' },
          { text: 'Table Tennis Rules', url: 'https://www.ittf.com/' }
        ]
      }
    ]
  }
};

// Function to determine activity suggestions based on weather data
export const getSuggestedActivities = (weatherData) => {
  if (!weatherData || !weatherData.current) {
    return activities.sunny; // Default fallback
  }

  const { current } = weatherData;
  const condition = current.condition.text.toLowerCase();
  const temperature = current.temp_c;
  const windSpeed = current.wind_kph;

  // Determine primary weather condition
  let weatherType = 'sunny'; // default

  if (condition.includes('snow') || condition.includes('blizzard')) {
    weatherType = 'snowy';
  } else if (condition.includes('thunder') || condition.includes('storm')) {
    weatherType = 'thunderstorm';
  } else if (condition.includes('rain') || condition.includes('drizzle') || condition.includes('shower')) {
    weatherType = 'rainy';
  } else if (condition.includes('fog') || condition.includes('mist')) {
    weatherType = 'foggy';
  } else if (condition.includes('cloudy') || condition.includes('overcast')) {
    weatherType = 'cloudy';
  } else if (condition.includes('partly') || condition.includes('few clouds')) {
    weatherType = 'partlyCloudy';
  } else if (condition.includes('clear') || condition.includes('sunny')) {
    weatherType = 'sunny';
  }

  // Override with temperature-based suggestions for extreme temperatures
  if (temperature >= 30) {
    weatherType = 'hot';
  } else if (temperature <= 5) {
    weatherType = 'cold';
  }

  // Override with wind-based suggestions for very windy conditions
  if (windSpeed >= 25) {
    weatherType = 'windy';
  }

  return activities[weatherType] || activities.sunny;
}; 