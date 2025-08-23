const causes = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    description:
      'Help provide clean and safe drinking water to communities facing water scarcity by building sustainable wells, filtration systems, and sanitation facilities.',
    amountNeeded: 25000,
    currentAmount: 12550,
    category: 'Environment',
    trending: false,
    featured: true,
    imageUrl:
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
    longDescription: `
      ## Clean Water Initiative 💧

      Access to clean water is a fundamental human right, yet **1 in 3 people worldwide** lack safe drinking water.  
      With your support, we aim to:

      - Build **sustainable wells** in rural areas  
      - Provide **filtration systems** for schools and villages  
      - Train communities on **hygiene and sanitation**  

      ![Clean Water Project](https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80)

      Every contribution ensures fewer families suffer from preventable waterborne diseases. Together, we can bring hope and health to thousands.  
    `,
  },
  {
    id: 2,
    title: 'Education for All',
    description:
      'Support access to quality education for children in underserved communities by funding schools, providing learning materials, and training teachers.',
    amountNeeded: 5000,
    currentAmount: 3500,
    category: 'Education',
    trending: true,
    featured: false,
    imageUrl:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    longDescription: `
      ## Education for All 📚

      Education transforms lives. Our program focuses on:  

      - Building **safe schools** in rural and urban poor areas  
      - Distributing **books and digital learning tools**  
      - Training **teachers** to inspire the next generation  

      ![Classroom](https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80)

      By contributing, you empower children to break the cycle of poverty and unlock brighter futures.  
    `,
  },
  {
    id: 3,
    title: 'Food Security Program',
    description:
      'Help provide nutritious meals and food packages to families facing hunger and food insecurity, ensuring children and adults get the nourishment they need.',
    amountNeeded: 15000,
    currentAmount: 8000,
    category: 'Hunger',
    trending: true,
    featured: true,
    imageUrl:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    longDescription:
      'Our **Food Security Program** works to combat hunger and food insecurity by providing nutritious meals and food packages to families in crisis. We believe that no one should go to bed hungry. We operate community kitchens, distribute emergency food boxes, and support local farmers to create sustainable food systems. Your support directly helps us purchase fresh produce, staple goods, and hygiene products for those in need. By ensuring families have access to consistent, healthy meals, we are improving health outcomes and giving them the stability they need to focus on building a better future.',
  },
  {
    id: 4,
    title: 'Healthcare for All',
    description:
      'Support healthcare services for vulnerable populations by funding clinics, providing medical supplies, and expanding access to life-saving treatments.',
    amountNeeded: 30000,
    currentAmount: 24001,
    category: 'Health',
    trending: false,
    featured: false,
    imageUrl:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    longDescription:
      'The **Healthcare for All** fund is dedicated to providing essential medical care to vulnerable and underserved populations. We work to establish mobile clinics, stock community health centers with life-saving medicines and equipment, and fund critical medical treatments that are otherwise out of reach. Your donation helps us provide check-ups, vaccinations, and emergency care to those who need it most. We believe that access to quality healthcare is a fundamental human right, and with your help, we can expand our reach and save more lives every day.',
  },
  {
    id: 5,
    title: 'Animal Welfare Initiative',
    description:
      'Help protect and care for animals in need by supporting shelters, rescuing endangered species, and promoting animal rights awareness campaigns.',
    amountNeeded: 10000,
    currentAmount: 5000,
    category: 'Animals',
    trending: true,
    featured: true,
    imageUrl:
      'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
    longDescription:
      'Our **Animal Welfare Initiative** works tirelessly to protect and care for animals in need, from domestic pets to endangered wildlife. We support local animal shelters by providing food, medical care, and safe housing for neglected and abandoned animals. In the wild, we partner with conservation groups to protect habitats and rescue endangered species. Your support helps us fund critical veterinary treatments, promote spaying and neutering programs, and raise awareness about animal rights. By working together, we can ensure a safer and more compassionate world for our animal friends.',
  },
  {
    id: 6,
    title: 'Gender Equality Campaign',
    description:
      'Support initiatives that promote gender equality and empower women by funding education, leadership training, and economic opportunities.',
    amountNeeded: 20000,
    currentAmount: 15000,
    category: 'Social Justice',
    trending: false,
    featured: false,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
    longDescription:
      'The **Gender Equality Campaign** is dedicated to empowering women and girls by breaking down systemic barriers and creating opportunities for success. We fund scholarships for female students, provide leadership training workshops, and support economic initiatives that help women start and grow their own businesses. We believe that a more equitable society benefits everyone. Your contribution helps us advocate for policy changes, run awareness campaigns, and provide safe spaces for women to learn and lead. Join us in building a world where every individual, regardless of gender, has the chance to thrive.',
  },
  {
    id: 7,
    title: 'Disaster Relief Fund',
    description:
      'Provide immediate assistance to communities affected by natural disasters by delivering emergency supplies, shelter, and long-term rebuilding support.',
    amountNeeded: 50000,
    currentAmount: 40000,
    category: 'Disaster Relief',
    trending: true,
    featured: true,
    imageUrl:
      'https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    longDescription:
      'Our **Disaster Relief Fund** provides rapid and effective aid to communities devastated by natural disasters like floods, hurricanes, and earthquakes. When disaster strikes, we are on the ground delivering critical supplies such as clean water, food, and medical kits. Beyond immediate relief, we stay to help with long-term recovery and rebuilding efforts, assisting families in rebuilding their homes and lives. Your donation helps us maintain a state of readiness so we can respond quickly and efficiently when it matters most, providing hope and a path forward for those who have lost everything.',
  },
  {
    id: 8,
    title: 'Youth Mentoring Program',
    description:
      'Support mentorship programs for at-risk youth by funding after-school programs, providing career guidance, and creating safe spaces for growth.',
    amountNeeded: 8000,
    currentAmount: 6000,
    category: 'Youth Development',
    trending: false,
    featured: false,
    imageUrl:
      'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    longDescription:
      'The **Youth Mentoring Program** is dedicated to guiding at-risk youth toward a brighter future by connecting them with caring and knowledgeable mentors. We provide a safe and supportive environment through after-school programs, career guidance workshops, and life skills training. Our mentors help young people build confidence, set academic goals, and explore career paths. Your contribution funds these essential programs, ensuring that every young person has access to the guidance they need to succeed and become positive, contributing members of their communities. Help us build the next generation of leaders.',
  },
  {
    id: 9,
    title: 'Arts and Culture Preservation',
    description:
      'Help preserve and promote arts and cultural heritage by supporting local artists, restoring historical sites, and funding cultural education programs.',
    amountNeeded: 12000,
    currentAmount: 10000,
    category: 'Arts and Culture',
    trending: true,
    featured: true,
    imageUrl: 'https://www.culturepartnership.eu/upload/news/55b4aac99df36.jpg',
    longDescription:
      'Our **Arts and Culture Preservation** fund is committed to protecting and celebrating the rich diversity of human creativity. We support local artists by funding exhibitions and studios, restore historical buildings and landmarks, and develop cultural education programs for all ages. We believe that art and culture are vital to a vibrant society, and your donation helps us keep these traditions alive. By investing in the arts, we are not only preserving history but also fostering a new generation of creative minds and ensuring that our shared heritage can be enjoyed for years to come.',
  },
]

export default causes
