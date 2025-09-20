// Complete disaster safety data for SafeSteps educational app
// Easy to read content for school students

export interface SafetyTip {
  id: string;
  title: string;
  category: 'natural' | 'manmade' | 'personal';
  icon: string;
  keepSafe: string[];
  helpOthers: string[];
  funFact: string;
}

export const disasters: SafetyTip[] = [
  // NATURAL DISASTERS
  {
    id: 'earthquake',
    title: 'Earthquake',
    category: 'natural',
    icon: '🏠',
    keepSafe: [
      'Drop down on your hands and knees right away',
      'Take cover under a strong desk or table',
      'Hold on tight and protect your head and neck',
      'Stay away from windows and tall furniture',
      'If outside, move away from buildings and power lines',
      'Never run during shaking - crawl to safety',
      'Stay calm and count to 60 after shaking stops',
      'Check yourself for injuries before helping others',
      'Turn off gas and water if you smell gas',
      'Have an emergency kit ready with water and snacks'
    ],
    helpOthers: [
      'Look for people who might be trapped or hurt',
      'Call for adult help if someone is injured',
      'Comfort scared friends with calm words',
      'Share your emergency supplies if others need them',
      'Help younger kids find safe spots',
      'Never move someone who might have broken bones',
      'Guide people away from damaged buildings',
      'Listen for people calling for help',
      'Stay together as a group for safety',
      'Tell adults about any gas smells or sparks'
    ],
    funFact: 'Earthquakes happen about 500,000 times per year around the world!'
  },
  {
    id: 'tsunami',
    title: 'Tsunami',
    category: 'natural',
    icon: '🌊',
    keepSafe: [
      'If you feel an earthquake near the ocean, move inland fast',
      'Go to the highest ground you can find quickly',
      'Never go to the beach to watch big waves',
      'Listen for tsunami warning sirens',
      'Grab your emergency bag if you have time',
      'Stay away from rivers and streams near the coast',
      'Follow evacuation signs to safe zones',
      'Keep moving inland until adults say it\'s safe',
      'Stay on high ground for several hours',
      'Never surf or swim when warnings are active'
    ],
    helpOthers: [
      'Warn others about tsunami danger if you see signs',
      'Help elderly people and small children evacuate',
      'Share tsunami warning information with neighbors',
      'Guide tourists who don\'t know the area',
      'Call emergency services if you can do it safely',
      'Help carry supplies for families with babies',
      'Stay with people who are scared or confused',
      'Point others toward evacuation routes',
      'Share your phone to let others call families',
      'Never leave anyone behind during evacuation'
    ],
    funFact: 'Tsunamis can travel as fast as a jet airplane across the ocean!'
  },
  {
    id: 'flood',
    title: 'Flood',
    category: 'natural',
    icon: '🏘️',
    keepSafe: [
      'Get to higher ground immediately when water rises',
      'Never walk through moving water deeper than your ankles',
      'Stay away from storm drains and ditches',
      'Don\'t drive or bike through flooded roads',
      'Turn off electricity if water is near outlets',
      'Fill bathtubs and containers with clean water',
      'Move important things to upper floors',
      'Listen to weather radio for updates',
      'Wear shoes to protect your feet from debris',
      'Stay inside until authorities say it\'s safe'
    ],
    helpOthers: [
      'Help neighbors move belongings to safety',
      'Check on elderly neighbors before floods get bad',
      'Share sandbags with families who need them',
      'Help rescue pets that might be stuck',
      'Call emergency services for people in danger',
      'Share clean water with others',
      'Help younger children stay calm during scary weather',
      'Guide people away from dangerous flood areas',
      'Share your emergency radio for weather updates',
      'Help families with small children evacuate safely'
    ],
    funFact: 'Just 6 inches of moving water can knock over an adult!'
  },
  {
    id: 'cyclone',
    title: 'Cyclone',
    category: 'natural',
    icon: '🌀',
    keepSafe: [
      'Stay inside a strong building away from windows',
      'Go to the lowest floor or basement if possible',
      'Stay in an interior room like a bathroom or closet',
      'Have flashlights ready in case power goes out',
      'Fill bathtubs with water before the storm hits',
      'Charge all devices while power is still on',
      'Tape windows to prevent glass from flying',
      'Bring outdoor furniture inside so it won\'t blow away',
      'Stay away from doors and windows during the storm',
      'Don\'t go outside until authorities say it\'s completely safe'
    ],
    helpOthers: [
      'Help neighbors board up windows before the storm',
      'Check on elderly people who live alone',
      'Help families with small children prepare',
      'Share supplies like batteries and water',
      'Call emergency services for people who need rescue',
      'Stay with neighbors who are scared',
      'Help clear debris after the storm passes safely',
      'Share your emergency radio for weather updates',
      'Help look for missing pets after it\'s safe',
      'Give comfort items to children who are frightened'
    ],
    funFact: 'The eye of a cyclone can be 20-40 miles wide and completely calm!'
  },
  {
    id: 'cloudburst',
    title: 'Cloudburst',
    category: 'natural',
    icon: '☔',
    keepSafe: [
      'Seek shelter in a strong building immediately',
      'Stay away from valleys and low-lying areas',
      'Don\'t try to cross streams or rushing water',
      'Move to higher ground if water starts rising',
      'Avoid areas with loose soil that might slide',
      'Stay indoors until the heavy rain completely stops',
      'Don\'t use electrical appliances during heavy rain',
      'Keep emergency supplies like food and water ready',
      'Listen for flash flood warnings on radio',
      'Wear raincoats and boots if you must go outside'
    ],
    helpOthers: [
      'Warn others about rising water levels',
      'Help elderly neighbors get to safety',
      'Guide people away from dangerous water',
      'Share umbrellas and rain gear with others',
      'Call for help if someone gets swept away',
      'Help children stay calm during loud thunder',
      'Share weather updates with neighbors',
      'Help rescue pets caught in the rain',
      'Offer shelter to people caught outside',
      'Help clear blocked drains after it\'s safe'
    ],
    funFact: 'A cloudburst can drop more than 4 inches of rain in just one hour!'
  },
  {
    id: 'landslide',
    title: 'Landslide',
    category: 'natural',
    icon: '⛰️',
    keepSafe: [
      'Watch for signs like cracking ground or tilting trees',
      'Move away from steep slopes during heavy rain',
      'Listen for rumbling sounds that might mean sliding',
      'Get out of the path of moving rocks and mud',
      'Go to sturdy ground away from hillsides',
      'Don\'t build or play near steep slopes',
      'Report cracks in roads or ground to adults',
      'Stay alert during storms in hilly areas',
      'Keep emergency supplies ready in mountain areas',
      'Never try to outrun a landslide - move sideways'
    ],
    helpOthers: [
      'Warn people below about sliding rocks or mud',
      'Help others spot dangerous cracks in the ground',
      'Guide people away from unstable slopes',
      'Call emergency services if you see people in danger',
      'Help elderly people evacuate from risky areas',
      'Share information about safe routes',
      'Help look for missing people after slides stop',
      'Assist in carrying emergency supplies',
      'Stay calm and help others not to panic',
      'Point out safe areas for others to gather'
    ],
    funFact: 'Landslides can travel faster than a person can run!'
  },
  {
    id: 'tornado',
    title: 'Tornado',
    category: 'natural',
    icon: '🌪️',
    keepSafe: [
      'Go to the lowest floor of the building right away',
      'Get into a small interior room like a bathroom',
      'Stay away from windows and doors',
      'Get under a sturdy table and protect your head',
      'If outside, lie flat in a low ditch',
      'Never try to outrun a tornado in a car',
      'Listen for tornado sirens and weather alerts',
      'Don\'t open windows - it won\'t help the pressure',
      'Stay in your safe spot until the tornado passes',
      'Have a flashlight ready in case power goes out'
    ],
    helpOthers: [
      'Help others get to the safest room quickly',
      'Guide younger children to safety',
      'Share space in your safe room with neighbors',
      'Call out tornado warnings to people outside',
      'Help elderly or disabled people get to shelter',
      'Comfort scared friends during the storm',
      'Share your emergency radio for weather updates',
      'Help look for injured people after it passes',
      'Share first aid supplies if someone is hurt',
      'Help clear debris to rescue trapped people'
    ],
    funFact: 'Tornado winds can spin faster than 300 miles per hour!'
  },
  {
    id: 'volcanic-eruption',
    title: 'Volcanic Eruption',
    category: 'natural',
    icon: '🌋',
    keepSafe: [
      'Follow evacuation orders immediately',
      'Cover your nose and mouth with cloth',
      'Wear long sleeves to protect from ash',
      'Stay indoors if you can\'t evacuate',
      'Close all windows and doors',
      'Don\'t drive through thick ash clouds',
      'Drink bottled water - not tap water',
      'Clean ash off roofs so they don\'t collapse',
      'Stay away from river valleys where lava might flow',
      'Listen to emergency radio for evacuation updates'
    ],
    helpOthers: [
      'Help neighbors pack emergency supplies quickly',
      'Share masks or cloth to cover faces',
      'Help elderly people evacuate safely',
      'Guide others to evacuation centers',
      'Share clean water with families',
      'Help clear ash from community buildings',
      'Assist families with small children',
      'Share evacuation transportation',
      'Help rescue animals left behind',
      'Comfort people who are scared about losing homes'
    ],
    funFact: 'Volcanic ash can travel hundreds of miles through the air!'
  },
  {
    id: 'drought',
    title: 'Drought',
    category: 'natural',
    icon: '🏜️',
    keepSafe: [
      'Save water by taking shorter showers',
      'Don\'t water lawns or wash cars during drought',
      'Fix leaky faucets and pipes right away',
      'Collect rainwater in buckets for plants',
      'Use a cup of water when brushing teeth',
      'Eat foods that need less water to grow',
      'Plant gardens with plants that need little water',
      'Take baths instead of long showers',
      'Turn off water when soaping dishes',
      'Report water waste to local authorities'
    ],
    helpOthers: [
      'Teach friends how to save water at home',
      'Share water-saving tips with neighbors',
      'Help elderly neighbors with water-efficient gardens',
      'Organize community water collection drives',
      'Help families learn about drought-resistant plants',
      'Share rain collection containers with others',
      'Help fix community water leaks',
      'Teach younger kids why saving water matters',
      'Help distribute water during severe shortages',
      'Start school projects about water conservation'
    ],
    funFact: 'It takes 1,800 gallons of water to grow the cotton for one pair of jeans!'
  },
  {
    id: 'wildfire',
    title: 'Wildfire',
    category: 'natural',
    icon: '🔥',
    keepSafe: [
      'Evacuate immediately when authorities tell you to',
      'Pack emergency supplies in advance',
      'Close all windows and doors before leaving',
      'Turn on lights so firefighters can see your house',
      'Remove flammable things from around your home',
      'Have multiple escape routes planned',
      'Keep cars gassed up during fire season',
      'Stay low if there\'s smoke - clean air is near the ground',
      'Don\'t go back for forgotten items',
      'Monitor emergency radio for updates'
    ],
    helpOthers: [
      'Help neighbors pack and evacuate quickly',
      'Share evacuation transportation with families',
      'Help elderly or disabled people get to safety',
      'Call emergency services if you see people in danger',
      'Help rescue pets and farm animals',
      'Share emergency supplies with evacuating families',
      'Help younger children stay calm during evacuation',
      'Guide lost people to safety',
      'Share your phone for emergency calls',
      'Help clear brush to protect community buildings'
    ],
    funFact: 'Wildfires can move faster than 14 miles per hour!'
  },

  // MAN-MADE DISASTERS
  {
    id: 'war',
    title: 'War',
    category: 'manmade',
    icon: '🕊️',
    keepSafe: [
      'Stay inside safe buildings during dangerous times',
      'Keep emergency supplies like food and water ready',
      'Stay with your family and trusted adults',
      'Learn about safe places in your community',
      'Don\'t touch strange objects you find',
      'Stay away from windows during loud noises',
      'Have a communication plan with your family',
      'Keep important documents in a safe place',
      'Know where the nearest shelters are located',
      'Stay calm and listen to trusted adults'
    ],
    helpOthers: [
      'Comfort friends who are scared or worried',
      'Share food and supplies with neighbors in need',
      'Help younger children feel safe and protected',
      'Be kind to people who had to leave their homes',
      'Help elderly neighbors with daily tasks',
      'Share information about safe places',
      'Help families stay together',
      'Be a good friend to kids who seem sad',
      'Help deliver messages between separated families',
      'Show kindness to everyone regardless of differences'
    ],
    funFact: 'The white dove is a universal symbol of peace recognized worldwide!'
  },
  {
    id: 'industrial-accident',
    title: 'Industrial Accident',
    category: 'manmade',
    icon: '🏭',
    keepSafe: [
      'Move away from the accident area immediately',
      'Get upwind from smoke or chemical clouds',
      'Go inside and close all windows and doors',
      'Turn off air conditioning and fans',
      'Cover your nose and mouth with cloth',
      'Don\'t eat or drink anything that might be contaminated',
      'Listen to emergency radio for safety instructions',
      'Don\'t go near the accident to look',
      'Take a shower if you think you touched chemicals',
      'Follow evacuation orders if authorities give them'
    ],
    helpOthers: [
      'Warn others to stay away from the danger area',
      'Help elderly neighbors seal their homes',
      'Share clean water with families who need it',
      'Help parents find their children',
      'Call emergency services for people who are hurt',
      'Guide people away from dangerous smoke',
      'Share emergency radio information',
      'Help families evacuate safely',
      'Offer clean clothes to people who got contaminated',
      'Stay calm to help others not panic'
    ],
    funFact: 'Industrial safety rules exist because smart people learned from past mistakes!'
  },
  {
    id: 'chemical-leak',
    title: 'Chemical Leak',
    category: 'manmade',
    icon: '☣️',
    keepSafe: [
      'Leave the area immediately if you smell strange odors',
      'Hold a cloth over your nose and mouth',
      'Don\'t touch any spilled liquids or powders',
      'Move upwind and uphill from the spill',
      'Go inside and seal doors and windows',
      'Change clothes if you think they got contaminated',
      'Wash hands and face with soap and water',
      'Don\'t eat food that might have been exposed',
      'Listen for emergency announcements',
      'Stay inside until authorities say it\'s safe'
    ],
    helpOthers: [
      'Warn people to stay away from strange smells',
      'Help others seal their homes from chemicals',
      'Share clean water for washing',
      'Help elderly people evacuate if needed',
      'Call poison control if someone feels sick',
      'Share clean clothes with contaminated people',
      'Help parents find children',
      'Guide people to safety',
      'Stay calm to help others make good decisions',
      'Help distribute safety information'
    ],
    funFact: 'Your nose can detect some chemicals even in tiny amounts!'
  },
  {
    id: 'oil-spill',
    title: 'Oil Spill',
    category: 'manmade',
    icon: '🛢️',
    keepSafe: [
      'Stay away from beaches and water with oil',
      'Don\'t touch oil with your bare hands',
      'Keep pets away from oily areas',
      'Don\'t eat fish or seafood from affected areas',
      'Wear protective clothing if helping with cleanup',
      'Don\'t swim in water that has oil',
      'Report oily animals to wildlife rescuers',
      'Stay upwind from oil fires or fumes',
      'Wash thoroughly if you accidentally touch oil',
      'Follow local health warnings about contaminated areas'
    ],
    helpOthers: [
      'Help rescue oily birds and sea animals safely',
      'Volunteer for organized beach cleanup efforts',
      'Share information about which areas to avoid',
      'Help wildlife rescuers by reporting oily animals',
      'Donate supplies for cleanup volunteers',
      'Help elderly people avoid contaminated areas',
      'Share alternative places for fishing and swimming',
      'Help spread awareness about oil spill impacts',
      'Support local fishermen affected by the spill',
      'Help younger kids understand why they can\'t play in oily areas'
    ],
    funFact: 'One gallon of oil can contaminate up to one million gallons of water!'
  },
  {
    id: 'nuclear-accident',
    title: 'Nuclear Accident',
    category: 'manmade',
    icon: '☢️',
    keepSafe: [
      'Go inside immediately and stay there',
      'Close and lock all windows and doors',
      'Turn off air conditioning and heating systems',
      'Go to the center of the building, away from windows',
      'Listen to emergency radio for instructions',
      'Don\'t go outside unless authorities say it\'s safe',
      'Take potassium iodide only if authorities tell you to',
      'Don\'t eat fresh vegetables or drink milk from local areas',
      'Take a shower if you were outside during the accident',
      'Stay inside for as long as authorities recommend'
    ],
    helpOthers: [
      'Help elderly neighbors seal their homes',
      'Share emergency radio information with others',
      'Help families with small children stay calm',
      'Share stored food and water with neighbors',
      'Help people understand emergency instructions',
      'Assist in distributing potassium iodide if officials provide it',
      'Help keep pets inside and safe',
      'Support scared friends with calm words',
      'Help pass messages between separated families',
      'Share batteries and flashlights'
    ],
    funFact: 'Nuclear power plants have many safety systems to prevent accidents!'
  },
  {
    id: 'stampede',
    title: 'Large Protest/Stampede',
    category: 'manmade',
    icon: '👥',
    keepSafe: [
      'Stay calm and don\'t push people around you',
      'Move with the crowd, not against it',
      'Try to move toward the edge of the crowd',
      'Keep your arms up to protect your chest',
      'If you fall, curl up in a ball and protect your head',
      'Look for exits and safe areas',
      'Don\'t bend down to pick up dropped items',
      'Stay on your feet if possible',
      'Follow instructions from police and security',
      'Don\'t run - walk quickly but carefully'
    ],
    helpOthers: [
      'Help people who fall get back up quickly',
      'Guide younger children to safety',
      'Point out exits to confused people',
      'Help elderly people move with the crowd',
      'Stay calm to help others not panic',
      'Share information about safe areas',
      'Help disabled people evacuate',
      'Call out warnings about dangers ahead',
      'Help families stay together',
      'Assist people who are hurt once it\'s safe'
    ],
    funFact: 'The safest place in a crowd is usually at the edges, not the center!'
  },
  {
    id: 'terror-attack',
    title: 'Terror Attack',
    category: 'manmade',
    icon: '🚨',
    keepSafe: [
      'Run to safety if you can do it safely',
      'Hide in a safe place if you can\'t run',
      'Turn off lights and lock doors if hiding',
      'Stay quiet and turn off your phone\'s sound',
      'Call 911 only when it\'s safe to do so',
      'Follow instructions from police and security',
      'Don\'t go toward danger to see what\'s happening',
      'Help others escape only if you can do it safely',
      'Stay low and use cover if there\'s shooting',
      'Wait for police to say it\'s all clear'
    ],
    helpOthers: [
      'Help others find safe exits',
      'Guide scared people to hiding places',
      'Help elderly and disabled people evacuate',
      'Keep children calm and quiet',
      'Share hiding spaces with others',
      'Help injured people if it\'s safe',
      'Follow police instructions to help others',
      'Point out safe areas to confused people',
      'Help families stay together during evacuation',
      'Comfort people who are scared'
    ],
    funFact: 'Emergency responders train regularly to keep everyone safe during crises!'
  },
  {
    id: 'major-fire',
    title: 'Major Fire',
    category: 'manmade',
    icon: '🚒',
    keepSafe: [
      'Get out of the building immediately',
      'Crawl under smoke to breathe cleaner air',
      'Feel doors before opening - don\'t open hot doors',
      'Use stairs, never elevators during fires',
      'Stop, drop, and roll if your clothes catch fire',
      'Stay out once you\'re out - don\'t go back',
      'Meet at your family\'s planned meeting place',
      'Call 911 from a safe location outside',
      'Cover your nose and mouth with cloth',
      'Help others evacuate if you can do it safely'
    ],
    helpOthers: [
      'Alert others about the fire',
      'Help elderly and disabled people evacuate',
      'Guide younger children to safety',
      'Call 911 for people who are trapped',
      'Help carry small children or babies',
      'Point out safe exits to others',
      'Help people stay low under smoke',
      'Assist firefighters by staying out of their way',
      'Help account for all people once outside',
      'Comfort people who are scared or hurt'
    ],
    funFact: 'Smoke detectors save thousands of lives every year!'
  },
  {
    id: 'dam-failure',
    title: 'Dam Failure',
    category: 'manmade',
    icon: '🌊',
    keepSafe: [
      'Move to higher ground immediately',
      'Don\'t wait for official warnings if you see dam problems',
      'Evacuate downstream areas as fast as possible',
      'Take emergency supplies if you have time',
      'Stay away from river valleys below dams',
      'Listen for evacuation sirens and warnings',
      'Don\'t try to cross rising water',
      'Stay on high ground until it\'s officially safe',
      'Follow marked evacuation routes',
      'Help others evacuate if you can do it safely'
    ],
    helpOthers: [
      'Warn neighbors about rising water danger',
      'Help elderly people evacuate quickly',
      'Assist families with small children',
      'Share evacuation transportation',
      'Help carry emergency supplies for others',
      'Guide people to higher ground',
      'Call emergency services for trapped people',
      'Help account for all community members',
      'Share information about safe areas',
      'Help comfort scared evacuees'
    ],
    funFact: 'Dams are checked regularly by engineers to make sure they\'re safe!'
  },
  {
    id: 'transport-accident',
    title: 'Transport Accident',
    category: 'manmade',
    icon: '🚗',
    keepSafe: [
      'Stay calm and check if you\'re hurt',
      'Move away from vehicles if you can walk',
      'Call 911 or ask someone else to call',
      'Don\'t move people who might be badly hurt',
      'Turn off car engines to prevent fires',
      'Use hazard lights and flares to warn other drivers',
      'Stay visible by wearing bright clothes',
      'Don\'t smoke or use lighters near accidents',
      'Wait for emergency responders to arrive',
      'Follow instructions from police and paramedics'
    ],
    helpOthers: [
      'Call 911 immediately for injured people',
      'Direct traffic around the accident safely',
      'Comfort scared or injured people',
      'Help people get out of damaged vehicles safely',
      'Share your phone for emergency calls',
      'Help stop bleeding with clean cloth',
      'Keep injured people warm with blankets',
      'Help emergency responders by staying out of their way',
      'Guide other cars away from danger',
      'Help contact families of people involved'
    ],
    funFact: 'Wearing seatbelts reduces the chance of serious injury by 50%!'
  },

  // PERSONAL / EVERYDAY EMERGENCIES
  {
    id: 'heart-attack',
    title: 'Heart Attack',
    category: 'personal',
    icon: '❤️',
    keepSafe: [
      'Call 911 immediately if you have chest pain',
      'Sit down and rest right away',
      'Chew an aspirin if an adult says it\'s okay',
      'Stay calm and breathe slowly',
      'Don\'t drive yourself to the hospital',
      'Tell someone near you what\'s happening',
      'Loosen tight clothing around your chest',
      'Don\'t eat or drink anything',
      'Wait for paramedics to arrive',
      'Try to stay awake and alert'
    ],
    helpOthers: [
      'Call 911 immediately for someone having chest pain',
      'Help them sit in a comfortable position',
      'Ask if they have heart medicine to take',
      'Stay with them and keep them calm',
      'Loosen their tight clothing',
      'Be ready to do CPR if they become unconscious',
      'Don\'t give them food or water',
      'Help them contact their family',
      'Meet the paramedics and guide them',
      'Learn CPR so you can help in emergencies'
    ],
    funFact: 'Quick action during a heart attack can save lives - every minute counts!'
  },
  {
    id: 'severe-injury',
    title: 'Severe Injury',
    category: 'personal',
    icon: '🩹',
    keepSafe: [
      'Stay calm and don\'t panic',
      'Call 911 for serious cuts or broken bones',
      'Press clean cloth on bleeding wounds',
      'Don\'t move if you might have broken bones',
      'Keep injured body parts still',
      'Stay awake and alert if possible',
      'Don\'t eat or drink anything before medical help',
      'Tell someone what happened',
      'Don\'t remove objects stuck in wounds',
      'Keep warm with blankets while waiting for help'
    ],
    helpOthers: [
      'Call 911 immediately for severe injuries',
      'Apply pressure to stop heavy bleeding',
      'Don\'t move people with possible broken bones',
      'Keep injured people warm and comfortable',
      'Talk calmly to keep them awake',
      'Don\'t give them food or water',
      'Help control crowds around injured person',
      'Guide paramedics to the injured person',
      'Help contact their family',
      'Learn basic first aid to help others'
    ],
    funFact: 'Knowing basic first aid can help you save lives every day!'
  },
  {
    id: 'electric-shock',
    title: 'Electric Shock',
    category: 'personal',
    icon: '⚡',
    keepSafe: [
      'Turn off the power source if you can do it safely',
      'Don\'t touch electrical outlets with wet hands',
      'Unplug devices that are sparking',
      'Stay away from downed power lines',
      'Don\'t use electrical devices near water',
      'Call 911 if the shock was severe',
      'Check for burns where electricity entered your body',
      'Sit down if you feel dizzy after a shock',
      'Don\'t touch metal objects after getting shocked',
      'Tell an adult about any electrical problems'
    ],
    helpOthers: [
      'Turn off power before touching someone who\'s being shocked',
      'Use a wooden stick to move them away from electricity',
      'Never touch someone who\'s still being shocked',
      'Call 911 for anyone who was shocked badly',
      'Check if they\'re breathing and conscious',
      'Look for burns on their skin',
      'Keep them warm while waiting for help',
      'Don\'t give them water or food',
      'Help them stay calm and still',
      'Learn about electrical safety to prevent accidents'
    ],
    funFact: 'Your body is mostly water, which conducts electricity very well!'
  },
  {
    id: 'kitchen-fire',
    title: 'Kitchen Fire',
    category: 'personal',
    icon: '🔥',
    keepSafe: [
      'Turn off the stove or oven if it\'s safe to do so',
      'Put a lid on burning pans to smother flames',
      'Never use water on grease fires',
      'Use baking soda on small grease fires',
      'Get out if the fire is too big to control',
      'Call 911 if you can\'t put the fire out quickly',
      'Don\'t open the oven door if there\'s fire inside',
      'Stay low under smoke',
      'Never leave cooking food unattended',
      'Have a fire extinguisher in the kitchen'
    ],
    helpOthers: [
      'Help others evacuate if the fire spreads',
      'Call 911 for kitchen fires that are spreading',
      'Turn off gas valves if it\'s safe',
      'Help people get low under smoke',
      'Guide others to safe exits',
      'Help elderly neighbors with kitchen safety',
      'Teach others about grease fire safety',
      'Help check that everyone got out safely',
      'Assist firefighters by staying out of their way',
      'Help comfort people whose homes are damaged'
    ],
    funFact: 'Most house fires start in the kitchen - cooking safety is super important!'
  },
  {
    id: 'snake-bite',
    title: 'Snake Bite',
    category: 'personal',
    icon: '🐍',
    keepSafe: [
      'Stay calm and don\'t panic',
      'Call 911 immediately for any snake bite',
      'Keep the bitten area lower than your heart',
      'Remove jewelry before swelling starts',
      'Don\'t cut the bite or suck out venom',
      'Don\'t apply ice to the bite',
      'Mark the swelling with a pen to track it',
      'Don\'t take pain medicine',
      'Try to remember what the snake looked like',
      'Get to a hospital as fast as possible'
    ],
    helpOthers: [
      'Call 911 immediately for snake bite victims',
      'Help them stay calm and still',
      'Help remove tight clothing and jewelry',
      'Don\'t let them walk if possible',
      'Mark the swelling progression with a pen',
      'Help describe the snake to medical responders',
      'Don\'t apply ice or cut the wound',
      'Keep them awake and talking',
      'Help carry them to safety',
      'Learn which snakes in your area are dangerous'
    ],
    funFact: 'Most snakes are not dangerous, but it\'s always best to stay away from them!'
  },
  {
    id: 'heatstroke',
    title: 'Heatstroke',
    category: 'personal',
    icon: '🌡️',
    keepSafe: [
      'Get out of the sun into a cool place immediately',
      'Drink cool water slowly',
      'Take off extra clothing',
      'Put cool wet cloths on your skin',
      'Fan yourself to help cool down',
      'Don\'t drink sports drinks if you\'re nauseous',
      'Sit or lie down in the shade',
      'Call 911 if you feel confused or very sick',
      'Don\'t exercise when it\'s very hot',
      'Wear light-colored, loose clothing in heat'
    ],
    helpOthers: [
      'Move overheated people to cool shade',
      'Give them cool water to sip slowly',
      'Help remove their extra clothing',
      'Fan them or provide cool wet cloths',
      'Call 911 if they\'re confused or unconscious',
      'Don\'t give them salt tablets',
      'Help them lie down with feet slightly raised',
      'Monitor their temperature and breathing',
      'Stay with them until help arrives',
      'Teach others about preventing heat illness'
    ],
    funFact: 'Your body cools itself by sweating - drink water to help this process!'
  },
  {
    id: 'allergic-reaction',
    title: 'Allergic Reaction',
    category: 'personal',
    icon: '🤧',
    keepSafe: [
      'Use your EpiPen immediately if you have one',
      'Call 911 for severe allergic reactions',
      'Take antihistamines for mild reactions',
      'Stay away from what caused the reaction',
      'Don\'t lie down if you\'re having trouble breathing',
      'Tell others about your allergies',
      'Wear medical alert jewelry',
      'Always carry allergy medicine with you',
      'Don\'t eat foods you\'re allergic to',
      'Read food labels carefully'
    ],
    helpOthers: [
      'Call 911 for severe allergic reactions',
      'Help them use their EpiPen if they have one',
      'Help them sit up if they\'re breathing hard',
      'Remove the allergen if you know what it is',
      'Stay calm and keep them calm',
      'Don\'t give them food or drinks',
      'Help them contact their parents or doctor',
      'Be ready to do CPR if they stop breathing',
      'Learn about common allergies',
      'Help create allergy-safe spaces for friends'
    ],
    funFact: 'Allergies are your body\'s way of protecting itself, but sometimes it overreacts!'
  },
  {
    id: 'choking',
    title: 'Choking',
    category: 'personal',
    icon: '🫁',
    keepSafe: [
      'Try to cough forcefully to clear your throat',
      'Lean forward and hit your back between shoulder blades',
      'Don\'t drink water if you\'re choking',
      'Signal for help by pointing to your throat',
      'Don\'t panic - stay as calm as possible',
      'If alone, do abdominal thrusts on yourself',
      'Call 911 if you can\'t clear your airway',
      'Chew food slowly and take small bites',
      'Don\'t talk while eating large bites',
      'Be careful with hard candies and nuts'
    ],
    helpOthers: [
      'Ask "Are you choking?" to confirm',
      'Do back blows between their shoulder blades',
      'Perform abdominal thrusts (Heimlich maneuver)',
      'Call 911 if back blows and thrusts don\'t work',
      'Don\'t hit them on the back if they can cough',
      'For babies, use back blows and chest thrusts',
      'Keep trying until the object comes out',
      'Be ready to do CPR if they become unconscious',
      'Learn the Heimlich maneuver properly',
      'Stay calm so you can think clearly'
    ],
    funFact: 'The Heimlich maneuver has saved thousands of lives since it was invented!'
  },
  {
    id: 'drowning',
    title: 'Drowning',
    category: 'personal',
    icon: '🏊',
    keepSafe: [
      'Stay calm and try to float on your back',
      'Wave your arms and call for help loudly',
      'Don\'t panic - it wastes energy',
      'Try to grab onto something that floats',
      'Kick your legs to stay at the surface',
      'Always swim with a buddy',
      'Learn to swim properly',
      'Wear life jackets in boats and deep water',
      'Don\'t swim in areas without lifeguards',
      'Know your swimming limits'
    ],
    helpOthers: [
      'Call for lifeguard help immediately',
      'Throw them something that floats',
      'Don\'t jump in unless you\'re a strong swimmer',
      'Call 911 while someone else helps',
      'Use a long stick or rope to pull them out',
      'Be ready to do CPR once they\'re out of water',
      'Keep them warm after rescue',
      'Don\'t leave them alone even if they seem okay',
      'Learn water rescue techniques',
      'Always watch swimmers carefully'
    ],
    funFact: 'Learning to float can save your life - it takes much less energy than swimming!'
  },
  {
    id: 'road-accident',
    title: 'Road Accident',
    category: 'personal',
    icon: '🚑',
    keepSafe: [
      'Check if you\'re hurt before moving',
      'Get out of traffic if you can walk',
      'Call 911 or ask someone to call for you',
      'Turn on hazard lights to warn other cars',
      'Don\'t remove your helmet if you wear one',
      'Exchange information with other drivers',
      'Take photos of damage if it\'s safe',
      'Don\'t admit fault or blame others',
      'Wait for police if someone is hurt',
      'Always wear your seatbelt and helmet'
    ],
    helpOthers: [
      'Call 911 immediately for injured people',
      'Help direct traffic around the accident',
      'Turn on hazard lights on involved vehicles',
      'Comfort scared or hurt people',
      'Don\'t move seriously injured people',
      'Help exchange contact information',
      'Be a witness if you saw what happened',
      'Help contact families of involved people',
      'Stay until police and paramedics arrive',
      'Learn basic first aid for emergencies'
    ],
    funFact: 'Most accidents happen close to home where people feel most comfortable driving!'
  }
];

export const disasterCategories = [
  {
    id: 'natural',
    title: 'Natural Disasters',
    description: 'Learn to stay safe during earthquakes, floods, storms, and other natural events',
    color: 'from-secondary to-green-400'
  },
  {
    id: 'manmade', 
    title: 'Man-Made Disasters',
    description: 'Know what to do during accidents, spills, and other human-caused emergencies',
    color: 'from-accent to-destructive'
  },
  {
    id: 'personal',
    title: 'Personal Emergencies',
    description: 'Handle everyday emergencies like injuries, medical issues, and household accidents',
    color: 'from-purple-500 to-primary'
  }
];