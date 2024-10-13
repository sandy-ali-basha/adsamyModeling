const { createApp, ref } = Vue;

createApp({
  setup() {
    const message = ref("Hello vue!");
    return {
      message,
    };
  },
  data() {
    return {
      items: [
        { image: "./imgs/image11.png", text: "Item 11" },
        { image: "./imgs/image10.png", text: "Item 10" },
        { image: "./imgs/image12.png", text: "Item 12" },
        { image: "./imgs/image8.png", text: "Item 8" },
        { image: "./imgs/image7.png", text: "Item 7" },
        { image: "./imgs/image6.png", text: "Item 6" },
        { image: "./imgs/image5.png", text: "Item 5" },
        { image: "./imgs/image4.png", text: "Item 4" },
        { image: "./imgs/image3.png", text: "Item 3" },
        { image: "./imgs/image2.png", text: "Item 2" },
        { image: "./imgs/image1.png", text: "Item 1" },
        { image: "./imgs/image.png", text: "Item " },
      ],
      TopModels: [
        { image: "./imgs/image11.png", text: "Item 11" },
        { image: "./imgs/image10.png", text: "Item 10" },
        { image: "./imgs/image12.png", text: "Item 12" },
        { image: "./imgs/image8.png", text: "Item 8" },
        { image: "./imgs/image7.png", text: "Item 7" },
        { image: "./imgs/image6.png", text: "Item 6" },
        { image: "./imgs/image5.png", text: "Item 5" },
        { image: "./imgs/image4.png", text: "Item 4" },
        { image: "./imgs/image3.png", text: "Item 3" },
        { image: "./imgs/image2.png", text: "Item 2" },
        { image: "./imgs/image1.png", text: "Item 1" },
        { image: "./imgs/image.png", text: "Item " },
      ],
      swiperItems: [
        {
          image: "./imgs/image12.png",
          title: "Dana Johnson",
          text: " One of the best modeling agencies in Dubai, Very professional agency with high profile clients, they know how to treat customers. I highly recommend them.",
        },
        {
          image: "./imgs/image1.png",
          title: "Dana Johnson",
          text: " One of the best modeling agencies in Dubai, Very professional agency with high profile clients, they know how to treat customers. I highly recommend them.",
        },
      ],
      radioInputs: [
        {
          id: "crew",
          for: "crew",
          label: " other film & stage crew",
        },
        {
          id: "Writers",
          for: "Writers",
          label: "Writers / Directors",
        },
        {
          id: "Sound",
          for: "Sound",
          label: "Sound Crew",
        },
        {
          id: "Runners",
          for: "Runners",
          label: "Runners / Assistants",
        },
        {
          id: "Lighting",
          for: "Lighting",
          label: "Lighting Crew",
        },
        {
          id: "Film",
          for: "Film",
          label: "Film Producer / Managers",
        },
        {
          id: "Editors",
          for: "Editors",
          label: "Editors or Post Production Staff",
        },
        {
          id: "Camera",
          for: "Camera",
          label: "Camera Crew",
        },
        {
          id: "Art",
          for: "Art",
          label: "Art or costume department crew",
        },
      ],
      makeup: [
        {
          id: "makeup",
          for: "makeup",
          label: "Makeup artists",
        },
        {
          id: "makeup",
          for: "makeup",
          label: "hair stylists",
        },
        {
          id: "makeup",
          for: "makeup",
          label: "fashion stylists",
        },
      ],
      photographers: [
        {
          id: "fashion",
          for: "fashion",
          label: "fashion",
        },
        {
          id: "events",
          for: "events",
          label: "events",
        },
        {
          id: "wedding",
          for: "wedding",
          label: "wedding",
        },
        {
          id: "food",
          for: "food",
          label: "food",
        },
        {
          id: "product",
          for: "product",
          label: "product",
        },
        {
          id: "lifestyle",
          for: "lifestyle",
          label: "lifestyle",
        },
      ],
      extras: [
        {
          id: "extra",
          for: "extra",
          label: "extras for other work",
        },
        {
          id: "seeking",
          for: "seeking",
          label: "extras seeking and Agent",
        },
        {
          id: "tvcs",
          for: "tvcs",
          label: "extras for TVCs",
        },
        {
          id: "tv",
          for: "tv",
          label: "extras for TV series",
        },
        {
          id: "short",
          for: "short",
          label: "extras for Short Films",
        },
        {
          id: "online",
          for: "online",
          label: "extras for online content",
        },
        {
          id: "music",
          for: "music",
          label: "extras for music videos ",
        },
        {
          id: "films",
          for: "films",
          label: "extras for Feature Films ",
        },
      ],
      Influencers: [
        {
          id: "Other",
          for: "Other",
          label: "Other Influencers",
        },
        {
          id: "Parenting",
          for: "Parenting",
          label: "Parenting Influencers",
        },
        {
          id: "MensProducts",
          for: "MensProducts",
          label: "Men's Products Influencers",
        },
        {
          id: "SeekingAgent",
          for: "SeekingAgent",
          label: "Influencers Seeking an Agent",
        },
        {
          id: "GamingTech",
          for: "GamingTech",
          label: "Gaming & Tech Influencers",
        },
        {
          id: "Fitness",
          for: "Fitness",
          label: "Fitness Influencers",
        },
        {
          id: "Beauty",
          for: "Beauty",
          label: "Beauty Influencers",
        },
        {
          id: "Travel",
          for: "Travel",
          label: "Travel Influencers",
        },
        {
          id: "Music",
          for: "Music",
          label: "Music Influencers",
        },
        {
          id: "AttendEvents",
          for: "AttendEvents",
          label: "Influencers to Attend Events",
        },
        {
          id: "Health",
          for: "Health",
          label: "Health Influencers",
        },
        {
          id: "Food",
          for: "Food",
          label: "Food Influencers",
        },
        {
          id: "Fashion",
          for: "Fashion",
          label: "Fashion Influencers",
        },
      ],
      MediaCategories: [
        {
          id: "TVChannels",
          for: "TVChannels",
          label: "TV Channels",
        },
        {
          id: "GameShows",
          for: "GameShows",
          label: "Game Shows",
        },
        {
          id: "TVShows",
          for: "TVShows",
          label: "TV Shows",
        },
        {
          id: "RealityTV",
          for: "RealityTV",
          label: "Reality TV",
        },
        {
          id: "DocumentariesFactual",
          for: "DocumentariesFactual",
          label: "Documentaries & Factual",
        },
      ],
      presentors: [
        {
          id: "other",
          for: "other",
          label: "other",
        },
        {
          id: "voice acting",
          for: "voice acting",
          label: "voice  acting",
        },
        {
          id: "Emcee",
          for: "Emcee",
          label: "Emcee",
        },
        {
          id: "voiceover",
          for: "voiceover",
          label: "voice over",
        },
      ],
      models: [
        {
          id: "Other",
          for: "Other",
          label: "Other",
        },
        {
          id: "TimeForPrints",
          for: "TimeForPrints",
          label: "Time for Prints",
        },
        {
          id: "Presenters",
          for: "Presenters",
          label: "Presenters",
        },
        {
          id: "HairModels",
          for: "HairModels",
          label: "Hair Models",
        },
        {
          id: "EventsPromotions",
          for: "EventsPromotions",
          label: "Events & Promotions",
        },
        {
          id: "Catwalk",
          for: "Catwalk",
          label: "Catwalk",
        },
        {
          id: "TVCommercials",
          for: "TVCommercials",
          label: "TV Commercials",
        },
        {
          id: "Print",
          for: "Print",
          label: "Print",
        },
        {
          id: "MusicVideos",
          for: "MusicVideos",
          label: "Music Videos",
        },
        {
          id: "Fitting",
          for: "Fitting",
          label: "Fitting",
        },
        {
          id: "CompetitionsPageants",
          for: "CompetitionsPageants",
          label: "Competitions & Pageants",
        },
      ],
      HighRatedModels: [
        {
          image: "./imgs/topModals/image0.jpeg",
          title: "Natacha",
        },
        {
          image: "./imgs/topModals/image1.jpeg",
          title: "Selim",
        },
        {
          image: "./imgs/topModals/image0.jpeg",
          title: "Natacha",
        },
        {
          image: "./imgs/topModals/image1.jpeg",
          title: "Selim",
        },
        {
          image: "./imgs/topModals/image0.jpeg",
          title: "Natacha",
        },
        {
          image: "./imgs/topModals/image1.jpeg",
          title: "Selim",
        },
        {
          image: "./imgs/topModals/image0.jpeg",
          title: "Natacha",
        },
        {
          image: "./imgs/topModals/image1.jpeg",
          title: "Selim",
        },
      ],
      events: [
        {
          id: "Other",
          for: "Other",
          label: "Other",
        },
        {
          id: "BrandAmbassador",
          for: "BrandAmbassador",
          label: "Brand Ambassador",
        },
        {
          id: "EventsOutdoor",
          for: "EventsOutdoor",
          label: "Events Outdoor",
        },
        {
          id: "EventsIndoor",
          for: "EventsIndoor",
          label: "Events Indoor",
        },
        {
          id: "HostHostess",
          for: "HostHostess",
          label: "Host / Hostess",
        },
        {
          id: "OtherPromotionsJobs",
          for: "OtherPromotionsJobs",
          label: "Other Promotions Jobs",
        },
        {
          id: "Promotional",
          for: "Promotional",
          label: "Promotional",
        },
      ],
      TeachersChoreographers: [
        {
          id: "TeachersChoreographers",
          for: "TeachersChoreographers",
          label: "Teachers / Choreographers",
        },
        {
          id: "Dancers",
          for: "Dancers",
          label: "Dancers",
        },
        {
          id: "Other",
          for: "Other",
          label: "Other",
        },
        {
          id: "TVFilm",
          for: "TVFilm",
          label: "TV & Film",
        },
        {
          id: "TeachersInstructors",
          for: "TeachersInstructors",
          label: "Teachers / Instructors",
        },
        {
          id: "PhotoShoots",
          for: "PhotoShoots",
          label: "Photo Shoots",
        },
        {
          id: "MusicVideos",
          for: "MusicVideos",
          label: "Music Videos",
        },
        {
          id: "LivePerformance",
          for: "LivePerformance",
          label: "Live Performance",
        },
        {
          id: "Competitions",
          for: "Competitions",
          label: "Competitions",
        },
        {
          id: "Companies",
          for: "Companies",
          label: "Companies",
        },
        {
          id: "Choreographers",
          for: "Choreographers",
          label: "Choreographers",
        },
      ],
      corporate: [
        {
          id: "CorporateVideos",
          for: "CorporateVideos",
          label: "Corporate Videos",
        },
        {
          id: "VoiceoverRadio",
          for: "VoiceoverRadio",
          label: "Voiceover & Radio",
        },
        {
          id: "TVCommercials",
          for: "TVCommercials",
          label: "TV Commercials",
        },
        {
          id: "ShortFilms",
          for: "ShortFilms",
          label: "Short Films",
        },
        {
          id: "MusicVideos",
          for: "MusicVideos",
          label: "Music Videos",
        },
        {
          id: "EventsPromotions",
          for: "EventsPromotions",
          label: "Events & Promotions",
        },
        {
          id: "Web",
          for: "Web",
          label: "Web",
        },
        {
          id: "TVSeries",
          for: "TVSeries",
          label: "TV Series",
        },
        {
          id: "TheatreMusicals",
          for: "TheatreMusicals",
          label: "Theatre & Musicals",
        },
        {
          id: "Presenters",
          for: "Presenters",
          label: "Presenters",
        },
        {
          id: "FeatureFilms",
          for: "FeatureFilms",
          label: "Feature Films",
        },
        {
          id: "Entertainers",
          for: "Entertainers",
          label: "Entertainers",
        },
      ],
    };
  },
}).mount("#app");
