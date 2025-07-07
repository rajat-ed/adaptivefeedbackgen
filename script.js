const feedbackFragments = {
  // Overall Introduction based on general performance
  overall_intro: {
    high: [
      "It's truly inspiring to reflect on [Name]'s exceptional journey in [Subject] this period. ",
      "As we look back at [Name]'s engagement with [Subject], [pronoun]'s outstanding progress is clear. ",
      "[Name] has truly excelled in [Subject] this term, demonstrating remarkable dedication. ",
      "This term, [Name]'s performance in [Subject] has been nothing short of exemplary. ",
      "Observing [Name]'s command of [Subject] has been a highlight this period. "
    ],
    medium: [
      "Reflecting on [Name]'s progress in [Subject] this term, we've observed significant growth and development. ",
      "This period, [Name] has been building solid foundations in [Subject] with consistent effort. ",
      "We've seen [Name] engage thoughtfully with [Subject] content, making steady strides. ",
      "[Name] has shown commendable dedication to [Subject] learning throughout this period. ",
      "It's clear [Name] is developing a strong understanding of [Subject] concepts. "
    ],
    low: [
      "Considering [Name]'s work in [Subject] this period, there are clear opportunities to enhance [pronoun]'s learning journey. ",
      "As [Name] continues to develop in [Subject], focusing on specific areas will greatly support [pronoun]'s growth. ",
      "This term in [Subject] presents a chance for [Name] to build foundational skills and cultivate new habits. ",
      "[Name] is encouraged to embrace strategies to strengthen [pronoun]'s engagement with [Subject] material. ",
      "For [Name] to thrive further in [Subject], a renewed focus on core areas will be beneficial. "
    ]
  },

  // Category-specific 'observations' (strengths or areas of development)
  observations: {
    Reasoning: {
      excellent: [
        "[Pronoun]'s **analytical depth** in [Subject] is exceptional, often leading to innovative solutions.",
        "[Name] consistently demonstrates **profound understanding** of complex [Subject] concepts, applying them creatively.",
        "The **clarity of [pronoun's] logical thought** in [Subject] problem-solving is truly outstanding.",
        "[Pronoun]'s ability to dissect and interpret information in [Subject] is highly advanced.",
        "[Name] effortlessly makes insightful connections within the challenging scope of [Subject]."
      ],
      strong: [
        "[Pronoun] shows a **solid grasp of core [Subject] concepts**, applying them effectively.",
        "[Name]'s **analytical skills** in [Subject] are well-developed, allowing [pronoun] to make strong connections.",
        "In [Subject], [pronoun] is **quick to comprehend new ideas** and reason through challenges.",
        "[Pronoun] consistently demonstrates strong critical thinking when engaging with [Subject] topics.",
        "[Name] can reliably interpret and apply [Subject] principles."
      ],
      developing: [
        "[Name] is actively **developing [pronoun]'s reasoning** in [Subject], becoming more comfortable with complex ideas.",
        "To strengthen [pronoun]'s **conceptual understanding** in [Subject], [Name] could benefit from deeper exploration.",
        "[Pronoun] shows **potential in analytical tasks** within [Subject], but sometimes seeks more guidance.",
        "Consolidating foundational reasoning in [Subject] is an area [Name] is working on.",
        "[Name]'s understanding of [Subject] concepts is progressing, though deeper analysis is an ongoing goal."
      ],
      needs_support: [
        "Building a **stronger foundation in [Subject] concepts** is a key area for [Name] to focus on.",
        "Encouraging [Name] to **ask clarifying questions** in [Subject] will enhance [pronoun]'s comprehension.",
        "[Pronoun] would benefit from dedicated practice to **solidify [pronoun]'s reasoning** skills in [Subject] areas.",
        "[Name] needs to prioritize developing basic analytical approaches to [Subject] material.",
        "Further effort in understanding the 'why' behind [Subject] solutions will support [Name]'s growth."
      ]
    },
    Respect: {
      excellent: [
        "[Name]'s **empathy and respect** create an incredibly welcoming environment in [Subject] class.",
        "[Pronoun] is an **exemplary collaborator**, consistently elevating group dynamics in [Subject] with [pronoun]'s inclusivity.",
        "The **thoughtfulness [Name] brings to interactions** in [Subject] is truly remarkable.",
        "[Pronoun]'s positive influence enhances every collaborative task in [Subject].",
        "[Name] consistently models outstanding interpersonal skills within the [Subject] learning space."
      ],
      strong: [
        "[Name] consistently shows **respect for peers and instructors**, contributing positively to [Subject] activities.",
        "[Pronoun] **collaborates effectively**, listening and sharing ideas courteously in [Subject].",
        "In [Subject], [pronoun]'s **considerate demeanor** fosters positive group interactions.",
        "[Pronoun] demonstrates good teamwork and a respectful attitude in all [Subject] settings.",
        "[Name] contributes positively to a harmonious classroom atmosphere in [Subject]."
      ],
      developing: [
        "[Name] is working on consistently demonstrating **inclusive respect** in all [Subject] interactions, especially during disagreements.",
        "To enhance [pronoun]'s **collaborative impact** in [Subject], [Name] could practice active listening more.",
        "[Pronoun] sometimes needs a reminder to **acknowledge diverse perspectives** in [Subject] group work.",
        "Cultivating more consistent patience in [Subject] group discussions is an area for [Name]'s development.",
        "[Name] is learning to navigate differing opinions more constructively in [Subject] activities."
      ],
      needs_support: [
        "Focusing on **active listening and demonstrating empathy** in [Subject] discussions is vital for [Name].",
        "Developing a **consistently respectful approach**, particularly when opinions differ in [Subject], is an important goal for [Name].",
        "[Name] is encouraged to engage in [Subject] group tasks with a **more open and accepting attitude**.",
        "Improving [pronoun]'s responsiveness to peers' ideas in [Subject] will enhance collaboration.",
        "Working on a more patient and understanding approach during [Subject] group work will be beneficial for [Name]."
      ]
    },
    Responsibility: {
      excellent: [
        "[Name]'s **proactive ownership** of [Subject] tasks is outstanding; [pronoun] consistently exceeds expectations.",
        "[Pronoun] demonstrates **exceptional initiative** in [Subject], often seeking additional learning opportunities independently.",
        "The **reliability and meticulousness** [Name] shows in [Subject] assignments are truly commendable.",
        "[Name] consistently demonstrates remarkable self-direction and accountability in [Subject].",
        "[Pronoun] manages [pronoun]'s [Subject] workload with exemplary organization and foresight."
      ],
      strong: [
        "[Name] consistently **takes ownership of [Subject] tasks**, completing them diligently and on time.",
        "[Pronoun] shows **good initiative** in [Subject] class, managing [pronoun]'s responsibilities effectively.",
        "In [Subject], [pronoun] is a **reliable student**, consistently meeting assignment expectations.",
        "[Pronoun] handles [Subject] assignments with a strong sense of duty and follow-through.",
        "[Name] generally demonstrates a proactive approach to [pronoun]'s [Subject] learning."
      ],
      developing: [
        "[Name] is **developing [pronoun]'s initiative** in [Subject] and would benefit from starting tasks earlier.",
        "To strengthen [pronoun]'s **sense of ownership** in [Subject], [Name] could independently address challenges more.",
        "[Pronoun] is working on **consistently meeting all [Subject] deadlines** and ensuring task completeness.",
        "Improving [Name]'s organization of [Subject] materials will aid [pronoun]'s responsibility.",
        "Taking more consistent steps to prepare for [Subject] lessons is an area for [Name]'s growth."
      ],
      needs_support: [
        "Building a **routine for [Subject] homework completion** is crucial for [Name]'s development.",
        "[Name] is encouraged to take **greater personal responsibility** for [pronoun]'s learning outcomes in [Subject].",
        "Focusing on **organizing [Subject] materials** and tracking progress will significantly aid [Name]'s reliability.",
        "[Pronoun] needs to focus on timely submission and completion of all [Subject] assignments.",
        "Developing consistent self-discipline in [Subject] tasks is an important goal for [Name]."
      ]
    },
    Consistency: {
      excellent: [
        "[Name] exhibits **unwavering focus** and dedication in [Subject], producing consistently high-quality work.",
        "[Pronoun]'s **remarkable consistency** in [Subject] effort and engagement allows [pronoun] to excel even in challenging areas.",
        "The **reliability of [Name]'s performance** in [Subject] is a testament to [pronoun]'s sustained diligence.",
        "[Name] maintains exceptional engagement and thoroughness in all [Subject] activities.",
        "[Pronoun] displays impressive perseverance when tackling complex [Subject] topics."
      ],
      strong: [
        "[Name] consistently maintains **strong focus** during [Subject] lessons and tasks, leading to reliable output.",
        "[Pronoun] demonstrates **consistent effort** and engagement in [Subject] coursework, keeping up with material well.",
        "In [Subject], [pronoun] shows **commendable dedication**, regularly producing good quality work.",
        "[Pronoun] is typically well-prepared and maintains a steady pace of learning in [Subject].",
        "[Name] applies consistent diligence across [pronoun]'s [Subject] assignments."
      ],
      developing: [
        "[Name] is working on improving [pronoun]'s **consistency in [Subject]**; minimizing distractions will help.",
        "To achieve more **consistent results** in [Subject], [Name] could benefit from establishing regular study habits.",
        "[Pronoun] sometimes struggles with **maintaining focus** on longer [Subject] tasks, an area for growth.",
        "Encouraging [Name] to break down [Subject] assignments may help improve [pronoun]'s task completion consistency.",
        "[Name]'s concentration in [Subject] is developing, and sustained attention will yield greater results."
      ],
      needs_support: [
        "Developing **stronger habits for sustained focus** in [Subject] is a key area for [Name].",
        "Encouraging [Name] to **maintain consistent engagement** throughout [Subject] lessons.",
        "To improve **work completion consistency**, [Name] is encouraged to approach all [Subject] tasks with thoroughness.",
        "[Pronoun] needs to prioritize staying engaged with [Subject] content to avoid gaps in understanding.",
        "Cultivating better time management skills for [Subject] assignments will aid [Name]'s consistency."
      ]
    },
    Communication: {
      excellent: [
        "[Name] articulates ideas with **exceptional clarity and confidence** in [Subject], profoundly enriching discussions.",
        "[Pronoun] is an **outstanding communicator** in [Subject] class, making complex ideas accessible and engaging others.",
        "The **quality of [Name]'s contributions** to [Subject] discussions demonstrates superb articulation and deep understanding.",
        "[Name] consistently leads insightful conversations in [Subject] with [pronoun]'s thoughtful questions and responses.",
        "[Pronoun] possesses a remarkable ability to convey complex [Subject] concepts effectively."
      ],
      strong: [
        "[Name] **communicates ideas clearly** and contributes meaningfully to [Subject] discussions.",
        "[Pronoun] **engages actively** in [Subject] class, sharing insights that enhance understanding for others.",
        "In [Subject], [pronoun]'s **communication is confident** and effective, making [pronoun]'s ideas easy to follow.",
        "[Pronoun] readily participates and shares relevant observations in [Subject] activities.",
        "[Name] articulates [pronoun]'s thoughts well during [Subject] discussions."
      ],
      developing: [
        "[Name] is **developing [pronoun]'s communication skills** in [Subject]; sharing ideas more frequently would be beneficial.",
        "To enhance [pronoun]'s **participation in [Subject]**, [Name] could practice expressing thoughts more concisely.",
        "[Pronoun] sometimes **hesitates to contribute** to [Subject] discussions, an area where increased confidence would help.",
        "Encouraging [Name] to elaborate more on [pronoun]'s ideas in [Subject] will strengthen [pronoun]'s communication.",
        "Exploring ways to contribute verbally in [Subject] more often is an area [Name] is working on."
      ],
      needs_support: [
        "Building **confidence in speaking up** in [Subject] class is an important goal for [Name]'s communication.",
        "[Name] is encouraged to **articulate [pronoun]'s thoughts more fully** and seek opportunities to share ideas in [Subject].",
        "Focusing on **asking clarifying questions** and participating in basic [Subject] discussions will aid [Name]'s communication.",
        "More consistent participation in [Subject] classroom dialogue will greatly benefit [Name].",
        "[Pronoun] needs to actively seek out opportunities to share thoughts and engage with peers in [Subject]."
      ]
    }
  },

  // Follow-up suggestions/recommendations based on areas needing support
  recommendations: {
    Reasoning: [
      "engaging with challenging problems independently.",
      "practicing critical thinking by analyzing different viewpoints in [Subject].",
      "seeking deeper conceptual understanding rather than rote memorization in [Subject]."
    ],
    Respect: [
      "continuing to practice active listening and understanding diverse perspectives.",
      "proactively including all group members and celebrating their contributions in [Subject] collaborative tasks.",
      "focusing on mindful communication, especially when differing opinions arise in [Subject]."
    ],
    Responsibility: [
      "establishing a routine for reviewing [Subject] concepts and preparing for upcoming lessons.",
      "taking initiative in planning [pronoun]'s [Subject] projects, breaking them into manageable steps.",
      "consistently self-monitoring [Subject] assignments and deadlines."
    ],
    Consistency: [
      "experimenting with different study techniques in [Subject] to find what best minimizes distractions.",
      "focusing on completing all aspects of [Subject] tasks thoroughly, even smaller ones, to build consistency.",
      "creating a dedicated space and time for [Subject] work daily to boost focus and routine."
    ],
    Communication: [
      "proactively sharing [pronoun]'s initial thoughts in [Subject] discussions, even if brief.",
      "practicing articulating ideas concisely and clearly, perhaps by summarizing [Subject] concepts.",
      "seeking opportunities to lead small group discussions or present findings in [Subject]."
    ]
  },

  // Overall concluding remarks based on general performance
  overall_conclusion: {
    high: [
      "With [pronoun]'s evident talent and unwavering dedication, [Name] is poised for exceptional achievements in [Subject] and future endeavors.",
      "[Name]'s contributions to [Subject] have been invaluable, and we eagerly anticipate [pronoun]'s continued success and leadership.",
      "Truly a pleasure to teach, [Name]'s future in [Subject] and beyond looks incredibly bright!",
      "Keep shining bright, [Name]! Your mastery in [Subject] is inspiring.",
      "[Name]'s remarkable progress in [Subject] sets a fantastic example for peers."
    ],
    medium: [
      "As [Name] continues to apply [pronoun]'s efforts, [pronoun] will undoubtedly achieve even more significant milestones in [Subject].",
      "[Name]'s consistent hard work and positive attitude lay a strong foundation for continued success in [Subject].",
      "We look forward to witnessing [Name]'s further development and deepening understanding in [Subject].",
      "The dedication [Name] shows in [Subject] is commendable, setting [pronoun] on a path for strong future progress.",
      "With sustained focus, [Name] is on track to excel even further in [Subject]."
    ],
    low: [
      "With focused effort and continued practice, [Name] has a great opportunity to build confidence and excel in [Subject].",
      "We are committed to supporting [Name] in [pronoun]'s journey to strengthen these [Subject] skills and unlock [pronoun]'s full potential.",
      "Encouraging [Name] to embrace challenges in [Subject] as learning opportunities will be key to [pronoun]'s sustained growth.",
      "By actively engaging with strategies for improvement, [Name] can make significant strides in [Subject].",
      "A consistent application of these strategies will undoubtedly pave the way for [Name]'s success in [Subject]."
    ]
  },

  // Connectors and transition phrases
  connectors: {
    and: ["Additionally, ", "Furthermore, ", "In addition, ", "Moreover, ", "Beyond this, "],
    but: ["However, ", "Nevertheless, ", "On the other hand, ", "Though, ", "Conversely, "],
    segue: [
        "Looking ahead, ", "To build on this, ", "For continued growth, ",
        "To maximize [pronoun]'s potential, ", "Considering next steps, ",
        "With an eye on future development, ", "To solidify these skills, ",
        "As [Name] progresses, ", "Further steps include ",
        "A helpful focus for the next period will be "
    ],
    encouragement: [
        "We encourage [Name] to focus on ",
        "It would be beneficial for [Name] to consider ",
        "[Name] can further improve by ",
        "A valuable strategy for [Name] would be ",
        "We recommend [Name] explores ",
        "To support [pronoun]'s learning, [Name] should try "
    ]
  }
};

const categories = [
  "Reasoning",
  "Respect",
  "Responsibility",
  "Consistency",
  "Communication"
];

const pronounForms = {
  She: { subject: "She", object: "her", possessive: "her", reflexive: "herself" },
  He: { subject: "He", object: "him", possessive: "his", reflexive: "himself" },
  They: { subject: "They", object: "them", possessive: "their", reflexive: "themselves" }
};

// Helper function to get a random element from an array
function getRandomElement(arr) {
  if (!arr || arr.length === 0) return "";
  return arr[Math.floor(Math.random() * arr.length)];
}

// Selects a feedback fragment based on score, with more granular tiers
function selectFragmentByScore(category, score) {
  const fragments = feedbackFragments.observations[category];
  if (score >= 9) {
    return getRandomElement(fragments.excellent);
  } else if (score >= 7) {
    return getRandomElement(fragments.strong);
  } else if (score >= 4) {
    return getRandomElement(fragments.developing);
  } else { // 1-3
    return getRandomElement(fragments.needs_support);
  }
}

// Function to calculate average score
function calculateAverageScore(scores) {
    const sum = Object.values(scores).reduce((acc, current) => acc + current, 0);
    return sum / Object.keys(scores).length;
}

// Function to determine overall performance level for intro/outro
function getOverallPerformanceLevel(averageScore) {
    if (averageScore >= 8) return 'high';
    if (averageScore >= 5) return 'medium';
    return 'low';
}


function generateFeedback(name, pronoun, subject, sliders) {
  const p = pronounForms[pronoun];
  const scores = {};
  categories.forEach((cat, index) => {
    scores[cat] = sliders[index];
  });

  const averageScore = calculateAverageScore(scores);
  const overallLevel = getOverallPerformanceLevel(averageScore);

  const feedbackSegments = [];
  const usedPhrases = new Set(); // To prevent direct repetition within one generation

  // Helper to add a segment and track usage
  const addSegment = (arr) => {
      let phrase = getRandomElement(arr);
      let attempts = 0;
      while (usedPhrases.has(phrase) && attempts < 5) {
          phrase = getRandomElement(arr);
          attempts++;
      }
      usedPhrases.add(phrase);
      feedbackSegments.push(phrase);
  };

  // --- 1. Overall Introduction ---
  addSegment(feedbackFragments.overall_intro[overallLevel]);

  // --- 2. Dynamic Core Observations (Strengths & Opportunities) ---
  const sortedCategoriesByScore = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const lowestCategories = Object.keys(scores).sort((a, b) => scores[a] - scores[b]);

  let strengthsCount = 0;
  let improvementCount = 0;

  const potentialStrengths = sortedCategoriesByScore.filter(cat => scores[cat] >= 7);
  const potentialImprovements = lowestCategories.filter(cat => scores[cat] <= 6);

  // Add 1-2 distinct strengths
  for (const cat of potentialStrengths) {
    if (strengthsCount < 2) {
        addSegment([selectFragmentByScore(cat, scores[cat])]); // Wrap in array as selectFragmentByScore returns a string
        strengthsCount++;
    }
  }

  // Add a connector if both strengths and improvements are likely and some strength was added
  if (strengthsCount > 0 && potentialImprovements.length > 0) {
      addSegment([getRandomElement(feedbackFragments.connectors.but)]);
  }

  // Add 1-2 distinct improvements
  for (const cat of potentialImprovements) {
    if (improvementCount < 2) {
        addSegment([selectFragmentByScore(cat, scores[cat])]);
        improvementCount++;
    }
  }

  // If no strong points identified but average is decent, add general positive
  // This ensures a positive general statement if no specific strengths were highlighted but overall is okay
  if (strengthsCount === 0 && averageScore >= 5.5) {
      addSegment(["Overall, [Name] consistently approaches [Subject] with a positive attitude."]);
  }
  // If no clear improvement areas identified but average isn't top, add general constructive
  // This ensures a constructive general statement if no specific weaknesses were highlighted but there's still room for growth
  if (improvementCount === 0 && averageScore <= 7.5) {
      addSegment(["A consistent application of effort across all areas of [Subject] will support [Name]'s overall growth."]);
  }


  // --- 3. Recommendations/Forward-looking statements ---
  let recommendationsAdded = 0;
  for (const cat of lowestCategories) {
      if (scores[cat] <= 5 && recommendationsAdded < 2) { // Add recommendations for truly low scores
          // Combine segue, encouragement, and recommendation phrase
          const recommendationPhrase = getRandomElement(feedbackFragments.connectors.segue) +
                                       getRandomElement(feedbackFragments.connectors.encouragement) +
                                       getRandomElement(feedbackFragments.recommendations[cat]);
          addSegment([recommendationPhrase]);
          recommendationsAdded++;
      }
  }
  // If no specific low scores to recommend for, add a general forward-looking statement
  if (recommendationsAdded === 0) {
      if (overallLevel === 'high') {
          addSegment([getRandomElement(feedbackFragments.connectors.segue) + "We are excited to see [Name] continue to push the boundaries of [pronoun]'s understanding in [Subject]."
          ]);
      } else {
          addSegment([getRandomElement(feedbackFragments.connectors.segue) + "We encourage [Name] to continue [pronoun]'s dedication to [Subject] as [pronoun] works towards even greater mastery."]);
      }
  }


  // --- 4. Overall Conclusion ---
  addSegment(feedbackFragments.overall_conclusion[overallLevel]);


  // Join and replace placeholders
  let finalFeedback = feedbackSegments.join(" "); // Join with space first, then handle newlines for paragraphs

  return finalFeedback.replace(/\s+/g, ' ') // Clean up extra spaces
                       .replace(/\.\s*\./g, '.') // Fix double periods
                       .replace(/(\.|\?|!)\s*([A-Z])/g, '$1\n\n$2') // Add paragraph breaks after sentences before capital letters
                       .replace(/\[Name\]/g, name)
                       .replace(/\[Pronoun\]/g, p.subject)
                       .replace(/\[pronoun\]/g, p.object)
                       .replace(/\[pronoun's\]/g, p.possessive)
                       .replace(/\[pronounself\]/g, p.reflexive)
                       .replace(/\[Subject\]/g, subject)
                       .trim();
}


function updateSliderValue(sliderId, valueId) {
  const slider = document.getElementById(sliderId);
  const valueSpan = document.getElementById(valueId);
  slider.addEventListener("input", () => {
    valueSpan.textContent = slider.value;
    updateFeedback();
  });
}

function updateFeedback() {
  const name = document.getElementById("name").value.trim();
  const pronoun = document.getElementById("pronoun").value;
  const subject = document.getElementById("subject").value.trim();
  const sliders = [
    +document.getElementById("slider1").value,
    +document.getElementById("slider2").value,
    +document.getElementById("slider3").value,
    +document.getElementById("slider4").value,
    +document.getElementById("slider5").value
  ];
  if (name && pronoun && subject) {
    const feedback = generateFeedback(name, pronoun, subject, sliders);
    const output = document.getElementById("feedbackOutput");
    output.textContent = feedback;
    output.classList.remove("hidden");
    document.getElementById("copyBtn").classList.remove("hidden");
  } else {
     document.getElementById("feedbackOutput").classList.add("hidden");
     document.getElementById("copyBtn").classList.add("hidden");
  }
}

document.getElementById("feedbackForm").addEventListener("submit", (e) => {
  e.preventDefault();
  updateFeedback();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("feedbackForm").reset();
  document.getElementById("feedbackOutput").classList.add("hidden");
  document.getElementById("copyBtn").classList.add("hidden");
  ["slider1", "slider2", "slider3", "slider4", "slider5"].forEach(id => {
    document.getElementById(`${id}-value`).textContent = "5";
    document.getElementById(id).value = "5";
  });
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const feedback = document.getElementById("feedbackOutput").textContent;
  navigator.clipboard.writeText(feedback).then(() => {
    alert("Feedback copied to clipboard!");
  });
});

// Initialize slider value updates
["slider1", "slider2", "slider3", "slider4", "slider5"].forEach(id => {
  updateSliderValue(id, `${id}-value`);
});

// Add event listeners for name, pronoun, subject input to update feedback live
document.getElementById("name").addEventListener("input", updateFeedback);
document.getElementById("pronoun").addEventListener("change", updateFeedback);
document.getElementById("subject").addEventListener("input", updateFeedback);
