// Central configuration and content file for Project Srushti
// Edit texts, photo paths, and memories here easily!

export const siteContent = {
  meta: {
    title: "For Srushti ❤️ | A Little World of Love",
    description: "A personal love story created with love by Chaitanya for Srushti.",
    author: "Chaitanya",
    recipient: "Srushti",
  },

  welcomeScreen: {
    greeting: "Hey, Srushti ❤️",
    subGreetingMarathi: "Ek choti si website… fakt tuzyasathi.",
    description:
      "This little corner of the internet holds a lot of love, a few beautiful memories, and words that my heart sometimes struggles to say.",
    buttonText: "Open Your Little World 💌",
  },

  hero: {
    tagline: "Dedicated to Srushti • From Chaitanya",
    mainHeading: "Some people become a part of your heart… and stay there.",
    supportingText:
      "Srushti, no matter how ordinary a day feels, the memories connected to you make it special.",
    buttonStoryText: "Our Little Story ❤️",
    buttonLetterText: "Read My Letter 📜",
    // Hero photo path - replace with actual photo in /public/images/hero-srushti.jpg or /images/srushti-1.jpg
    heroPhoto: "/images/hero-srushti.jpg",
    heroPhotoAlt: "A cherished portrait of Srushti",
    heroPhotoCaption: "The smile that brightens up my whole universe ✨",
  },

  memories: {
    sectionTag: "Captured Moments",
    heading: "Our Memories",
    subheading: "A quiet gallery of little moments, laughter, and timeless feelings.",
    photos: [
      {
        id: 1,
        src: "/images/srushti-1.jpg",
        alt: "Srushti - A memory I wish I could pause",
        title: "Timeless Moments",
        caption: "A memory I wish I could pause.",
        date: "Special Day",
      },
      {
        id: 2,
        src: "/images/srushti-2.jpg",
        alt: "Srushti - Your smile has its own place in my heart",
        title: "That Radiant Smile",
        caption: "Your smile has its own little place in my heart.",
        date: "Golden Hour",
      },
      {
        id: 3,
        src: "/images/srushti-3.jpg",
        alt: "Srushti - Some moments stay beautiful forever",
        title: "Forever Cherished",
        caption: "Some moments stay beautiful forever.",
        date: "Sweet Memory",
      },
      {
        id: 4,
        src: "/images/srushti-4.jpg",
        alt: "Srushti - Little quiet conversations",
        title: "Unspoken Comfort",
        caption: "In the quietest moments, your presence always brought peace.",
        date: "Gentle Breeze",
      },
      {
        id: 5,
        src: "/images/srushti-5.jpg",
        alt: "Srushti - Pure joy and laughter",
        title: "Pure Warmth",
        caption: "Laughter looks so effortless and radiant on you.",
        date: "Carefree Days",
      },
      {
        id: 6,
        src: "/images/srushti-6.jpg",
        alt: "Srushti - A page I always revisit",
        title: "Treasured Chapter",
        caption: "A photograph is a pause button on life's sweetest seconds.",
        date: "Heartfelt Memory",
      },
    ],
  },

  letter: {
    sectionTag: "From the Heart",
    heading: "A Letter From Chaitanya",
    subheading: "Honest words, written gently and without any expectations.",
    salutation: "My dearest Srushti,",
    paragraphs: [
      "I don't always know how to put everything in my heart into words, but there is something I want you to know.",
      "You have been a beautiful part of my life, and the memories we have made together mean more to me than I can explain.",
      "I miss our little conversations, our smiles, and the simple moments that became special just because they were shared with you.",
      "I know that sometimes life gets complicated, and feelings need time and space. I don't want this website to make you feel pressured or obligated to respond in any particular way. I simply wanted to create something beautiful for you and express what you mean to me.",
      "I wish you happiness, peace, confidence, and beautiful days ahead. Whatever conversations we still need to have, I hope we can approach them with honesty, patience, kindness, and understanding.",
      "Thank you for being a part of my story.",
    ],
    closing: "With love,",
    signature: "Chaitanya ❤️",
  },

  reasons: {
    sectionTag: "Why You Matter",
    heading: "Reasons You Are Special",
    subheading: "Click each card to unfold a gentle thought I hold close to my heart.",
    cards: [
      {
        id: "smile",
        icon: "Sparkles",
        title: "Your smile.",
        subtitle: "A light that softens everything",
        description:
          "It has this effortless warmth that can instantly turn a dull, exhausting day into something soft, calm, and full of hope.",
      },
      {
        id: "expressions",
        icon: "HeartHandshake",
        title: "Your little expressions.",
        subtitle: "The sweetest unsaid words",
        description:
          "The way your eyes light up when you speak of things you care about, the little nods, and every subtle expression that is uniquely you.",
      },
      {
        id: "memories",
        icon: "Camera",
        title: "The memories we share.",
        subtitle: "Chapters etched in gold",
        description:
          "From silly conversations to deep quiet reflections, every single second spent listening to you remains a treasure in my life.",
      },
      {
        id: "ordinary",
        icon: "Sun",
        title: "The way ordinary moments can feel special.",
        subtitle: "Magic in the simplest things",
        description:
          "Just knowing you were there could turn an everyday routine into something memorable and tender. You make simple moments glow.",
      },
      {
        id: "dreams",
        icon: "Compass",
        title: "Your dreams and the person you are becoming.",
        subtitle: "Strength, grace, and ambition",
        description:
          "Your resilience, your kindness, and the quiet determination you carry as you navigate life inspire me deeply every single day.",
      },
      {
        id: "happiness",
        icon: "Flower2",
        title: "The happiness I wish for you.",
        subtitle: "Always in my prayers",
        description:
          "Above all else, I genuinely want you to experience peace in your heart, confidence in your steps, and all the true joy you deserve in this world.",
      },
    ],
  },

  timeline: {
    sectionTag: "Our Journey",
    heading: "Our Story Timeline",
    subheading: "Gentle milestones along the path we walked together.",
    milestones: [
      {
        id: 1,
        title: "The beginning of our story.",
        badge: "Chapter 1",
        description:
          "When our worlds crossed paths, and what started as a simple connection turned into a bond I cherish deeply.",
        photo: "/images/srushti-1.jpg",
      },
      {
        id: 2,
        title: "A beautiful memory.",
        badge: "Chapter 2",
        description:
          "A day filled with genuine laughter and comfort, where time seemed to slow down just for a little while.",
        photo: "/images/srushti-2.jpg",
      },
      {
        id: 3,
        title: "A moment that made me smile.",
        badge: "Chapter 3",
        description:
          "An unexpected little conversation or shared glance that reminded me how lucky I was to know your heart.",
        photo: "/images/srushti-3.jpg",
      },
      {
        id: 4,
        title: "Things I learned about love.",
        badge: "Chapter 4",
        description:
          "That real love is gentle, patient, respectful of space, and rooted in wanting the other person's true peace and happiness.",
        photo: "/images/srushti-4.jpg",
      },
      {
        id: 5,
        title: "Today — another page in our story.",
        badge: "Present & Ahead",
        description:
          "Whatever tomorrow brings, gratitude for your presence in my life remains unshakeable and heartfelt.",
        photo: "/images/srushti-5.jpg",
      },
    ],
  },

  kissVideo: {
    sectionTag: "Sent With Love",
    heading: "A Flying Kiss Just For You 💋",
    subheading:
      "Whenever you need a little smile, feel tired, or miss me, here is a flying kiss from me to you, Srushti.",
    videoSrc: "/videos/chaitanya-kiss.mp4",
    poster: "/images/hero-srushti.jpg",
    caption:
      "A little flying kiss sent with all my heart, always reminding you how special you are to me ❤️",
    dateBadge: "Just For You",
    buttonLabel: "Play Chaitanya's Kiss 💋",
  },

  interactive: {
    sectionTag: "Gentle Touches",
    heading: "A Little Interactive Moment",
    subheading: "Tap a button whenever you need a soft reminder of warmth.",
    hugButtonText: "A Little Hug for You 🤗",
    hugMessage:
      "Sending you a warm hug, a little peace, and a reminder that you deserve happiness. ❤️",
    kissButtonText: "A Flying Kiss from Chaitanya 💋",
    kissMessage:
      "Catch my flying kiss and keep it safe in your heart, Srushti! 😘❤️",
    noteButtonText: "Read One More Note 💌",
    additionalNotes: [
      {
        title: "A Gentle Whisper",
        content:
          "If ever you feel overwhelmed or tired, remember to take a deep breath. You are stronger than you realize, and you are deeply appreciated just for being yourself.",
      },
      {
        title: "A Quiet Wish",
        content:
          "I hope today brings you a reason to smile genuinely, even if it's over something as small as a warm cup of chai or a pretty sunset.",
      },
      {
        title: "A Sincere Thought",
        content:
          "No matter what distance, time, or circumstances lie between any two paths, the gratitude I have for knowing you will always remain intact.",
      },
    ],
  },

  ending: {
    quote:
      "Srushti, you are a beautiful chapter in my life, and the memories we share will always mean something to me.",
    subtext: "Take your time, keep smiling, and take care of yourself.",
    signature: "Made with love, by Chaitanya ❤️",
    repeatLetterButton: "Read My Letter Again 📜",
    scrollTopButton: "Back to the Top 🌸",
  },

  audio: {
    title: "Romantic Ambient Piano",
    src: "/audio/romantic-melody.mp3",
    labelOff: "Play Romantic Melody 🎵",
    labelOn: "Pause Music ⏸️",
  },
};
