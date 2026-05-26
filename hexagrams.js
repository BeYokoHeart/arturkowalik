const HEXAGRAMS = {
  "111111": { id: 1, symbol: "䷀", name: "Qian", english: "The Creative", 

    keywords: ["creation", "heaven", "force", "initiative"],

    meanings: {
      general: "pure potential before manifestation",
      love: "attraction through strength and clarity",
      career: "leadership and decisive beginnings",
      finance: "growth through bold action",
      health: "strong vitality, but risk of burnout",
      energy_in_home: "clear dominant structure in space",
      spirituality: "connection with higher ordering force",
      relationships: "dominant presence that must learn balance",
      emotions: "suppressed intensity seeking direction",
      obstacles: "resistance meets overwhelming force",
      advice: "act, but do not force beyond timing",
      transformation: "raw potential shaping reality itself"
    }

  },
  "000000": { id: 2, symbol: "䷁", name: "Kun", english: "The Receptive",

    keywords: ["receptivity", "earth", "yielding", "support"],

     meanings: {
      general: "pure receptivity shaping all potential into form",
      love: "love through acceptance, patience, and emotional grounding",
      career: "supporting roles that allow systems and others to grow",
      finance: "stability through patience and steady accumulation",
      health: "healing through rest, nourishment, and regulation",
      energy_in_home: "soft grounding energy that stabilizes space",
      spirituality: "surrender to natural flow and universal timing",
      relationships: "nurturing presence that holds rather than leads",
      emotions: "deep emotional absorption and quiet processing",
      obstacles: "over-receptivity leading to loss of boundaries",
      advice: "do not force — allow things to unfold naturally",
      transformation: "becoming the vessel through which life expresses itself"
    }

   },
  "100010": { id: 3, symbol: "䷂", name: "Zhun", english: "Difficulty at the Beginning",

    keywords: ["difficulty", "beginning", "chaos", "birth"],

    meanings: {
      general: "emergence of life through resistance and uncertainty",
      love: "connection forming through confusion and emotional turbulence",
      career: "new path full of obstacles that shape future strength",
      finance: "initial instability requiring caution and patience",
      health: "early imbalance that needs careful stabilization",
      energy_in_home: "disrupted flow gradually organizing itself",
      spirituality: "awakening through struggle and inner confusion",
      relationships: "bond forming under pressure and misunderstanding",
      emotions: "chaotic inner state seeking direction",
      obstacles: "lack of structure at the start creates friction",
      advice: "do not rush — allow form to emerge from chaos",
      transformation: "difficulty becomes the foundation of future stability"
    }

   },
  "010001": { id: 4, symbol: "䷃", name: "Meng", english: "Youthful Folly",

    keywords: ["learning", "inexperience", "education", "guidance"],

    meanings: {
      general: "state of inexperience where learning shapes future awareness",
      love: "relationships formed through innocence and emotional trial",
      career: "early learning phase requiring mentorship and correction",
      finance: "poor judgment risk balanced by growing awareness",
      health: "lack of awareness requiring disciplined habits",
      energy_in_home: "unrefined energy needing structure and order",
      spirituality: "beginning of conscious awareness through mistakes",
      relationships: "dependence on guidance and emotional learning",
      emotions: "unprocessed reactions seeking maturity",
      obstacles: "ignorance of consequences creates repeated mistakes",
      advice: "seek guidance and accept correction without resistance",
      transformation: "naivety transforms into structured understanding"
    }

   },
  "111010": { id: 5, symbol: "䷄", name: "Xu", english: "Waiting",

    keywords: ["patience", "waiting", "timing", "trust"],

    meanings: {
      general: "state of suspended action where timing becomes the guiding force",
      love: "emotional tension that requires patience before union unfolds",
      career: "pause before advancement; preparation for the right moment",
      finance: "holding resources and avoiding premature decisions",
      health: "body requiring rest and stabilization before recovery",
      energy_in_home: "stillness that allows energetic alignment to settle",
      spirituality: "trust in timing beyond personal control",
      relationships: "distance or pause that tests emotional maturity",
      emotions: "controlled tension between desire and restraint",
      obstacles: "forcing action too early leads to failure",
      advice: "wait with awareness — not passivity, but readiness",
      transformation: "waiting becomes active alignment with timing of life"
    }

   },
  "010111": { id: 6, symbol: "䷅", name: "Song", english: "Conflict",

    keywords: ["conflict", "dispute", "tension", "struggle"],

    meanings: {
      general: "forces collide when truth meets resistance",
      love: "misunderstandings exposed; clarity comes through confrontation",
      career: "legal or hierarchical tension requiring clear boundaries",
      finance: "risk of loss through disputes or poor agreements",
      health: "stress manifests through internal or external pressure",
      energy_in_home: "disharmony in space; conflicting energies competing",
      spirituality: "inner conflict between ego and higher alignment",
      relationships: "arguments reveal hidden imbalances",
      emotions: "anger and frustration seeking expression",
      obstacles: "resistance intensifies before resolution is possible",
      advice: "do not escalate; seek clarity over victory",
      transformation: "conflict becomes catalyst for truth and structure"
    }

   },
  "010000": { id: 7, symbol: "䷆", name: "Shi", english: "The Army",

    keywords: ["discipline", "leadership", "order", "strategy"],

    meanings: {
      general: "organized force moving with purpose and structure",
      love: "relationships require boundaries, loyalty, and emotional discipline",
      career: "hierarchy, leadership roles, and coordinated effort bring success",
      finance: "resources grow through planning and controlled execution",
      health: "recovery depends on routine, discipline, and structured care",
      energy_in_home: "structured environment that supports focus and order",
      spirituality: "inner discipline aligns will with higher guidance",
      relationships: "commitment tested through responsibility and structure",
      emotions: "controlled intensity; feelings managed rather than expressed freely",
      obstacles: "chaos is overcome through coordination and leadership",
      advice: "lead with clarity, but avoid unnecessary force",
      transformation: "discipline turns scattered energy into directed power"
    }

   },
  "000010": { id: 8, symbol: "䷇", name: "Bi", english: "Holding Together",

    keywords: ["unity", "alliance", "bond", "connection"],

     meanings: {
      general: "strength emerges through cohesion and mutual support",
      love: "relationships deepen through trust, loyalty, and emotional closeness",
      career: "success comes from teamwork and reliable alliances",
      finance: "shared resources and cooperation stabilize outcomes",
      health: "healing supported by connection and consistent care",
      energy_in_home: "harmonious space built through balance and shared intention",
      spirituality: "unity with others reflects unity within",
      relationships: "bonds strengthen through honesty and mutual reliance",
      emotions: "warmth and belonging replace isolation",
      obstacles: "fragmentation is resolved through connection and agreement",
      advice: "choose alignment over independence when possible",
      transformation: "separation transforms into collective strength"
    }

   },
  "111011": { id: 9, symbol: "䷈", name: "Xiao Chu", english: "Small Taming Force",

    keywords: ["restraint", "control", "small progress", "focus"],

      meanings: {
        general: "progress is achieved through subtle control and patience",
        love: "relationship grows by holding back excess and respecting boundaries",
        career: "small, consistent efforts create long-term stability",
        finance: "slow accumulation; avoid impulsive decisions",
        health: "recovery depends on moderation and disciplined habits",
        energy_in_home: "calm, restrained environment supports clarity and order",
        spirituality: "inner discipline refines chaotic impulses into awareness",
        relationships: "trust builds through patience and controlled expression",
        emotions: "feelings stabilized through gentle containment",
        obstacles: "delays require patience rather than force",
        advice: "focus on small, consistent improvements",
        transformation: "control over impulses leads to lasting harmony"
      }

   },
  "110111": { id: 10, symbol: "䷉", name: "Lu", english: "Treading",

    keywords: ["caution", "conduct", "behavior", "steps"],

    meanings: {
      general: "movement forward requires awareness with every careful step",
      love: "relationship deepens through respect, delicacy, and mindful presence",
      career: "success comes from disciplined conduct and precise timing in action",
      finance: "stability is preserved by cautious choices and measured risk",
      health: "well-being depends on attentive habits and gentle discipline of the body",
      energy_in_home: "order is maintained when actions are mindful and harmonious in tone",
      spirituality: "each step becomes sacred when walked with full awareness",
      relationships: "trust is built through respectful behavior and clear boundaries",
      emotions: "feelings are guided safely when expressed with restraint and clarity",
      obstacles: "danger is avoided by careful observation rather than forceful advance",
      advice: "walk consciously, as if the ground itself responds to intention",
      transformation: "mastery of conduct turns uncertainty into a stable path forward"
    }

   },
  "111000": { id: 11, symbol: "䷊", name: "Tai", english: "Peace",

    keywords: ["harmony", "peace", "flow", "balance"],

    meanings: {
      general: "heaven and earth meet in quiet balance where life flows without resistance",
      love: "connection feels open, warm, and naturally aligned without struggle",
      career: "effortless progress emerges when cooperation replaces competition",
      finance: "stability grows through balance between giving and receiving",
      health: "vitality strengthens when body and mind move in gentle harmony",
      energy_in_home: "space feels light, open, and softly unified",
      spirituality: "inner and outer worlds align in a calm sense of wholeness",
      relationships: "mutual understanding creates ease and shared rhythm",
      emotions: "feelings settle into a peaceful and transparent flow",
      obstacles: "conflict dissolves when opposition softens into cooperation",
      advice: "allow balance to lead rather than forcing direction",
      transformation: "separation turns into unity as opposing forces harmonize"
    }

   },
  "000111": { id: 12, symbol: "䷋", name: "Pi", english: "Standstill",

    keywords: ["stagnation", "block", "pause", "separation"],

     meanings: {
      general: "movement is held back as forces drift out of alignment and silence grows",
      love: "distance forms where hearts no longer meet in shared rhythm",
      career: "progress slows as paths diverge and cooperation weakens",
      finance: "resources become restricted; caution and patience are required",
      health: "energy feels blocked, calling for rest and gentle restoration",
      energy_in_home: "space feels heavy or disconnected, lacking natural flow",
      spirituality: "inner silence reveals separation between intention and clarity",
      relationships: "communication fades, creating emotional distance",
      emotions: "feelings stagnate, requiring time before movement returns",
      obstacles: "resistance persists; forcing change only deepens the block",
      advice: "accept stillness and conserve energy until alignment returns",
      transformation: "through pause and separation, hidden truths become visible"
    }

   },
  "101111": { id: 13, symbol: "䷌", name: "Tong Ren", english: "Fellowship",

    keywords: ["community", "connection", "people", "harmony"],

    meanings: {
      general: "shared purpose gathers scattered lives into a single bright field of unity",
      love: "love expands through openness, honesty, and mutual recognition of the heart",
      career: "success grows through teamwork and aligned intention with others",
      finance: "resources strengthen when shared fairly and supported collectively",
      health: "healing is supported by connection, encouragement, and social balance",
      energy_in_home: "space feels alive when filled with welcoming, harmonious presence",
      spirituality: "unity reveals itself through recognition of the same light in all beings",
      relationships: "bonds deepen through sincerity and shared direction",
      emotions: "feelings are softened and clarified through human connection",
      obstacles: "division dissolves when people return to common ground",
      advice: "seek alignment with those who share your truth and values",
      transformation: "separation turns into fellowship through mutual understanding and trust"
    }

   },
  "111101": { id: 14, symbol: "䷍", name: "Da You", english: "Great Possession",

    keywords: ["wealth", "abundance", "success", "possession"],

     meanings: {
      general: "abundance gathers like sunlight held within open hands",
      love: "love flourishes when richness of presence is shared freely",
      career: "success expands through wise stewardship of achieved strength",
      finance: "wealth grows when abundance is guided with clarity and restraint",
      health: "vital energy is strong when resources are well balanced and respected",
      energy_in_home: "space feels full, radiant, and anchored in quiet prosperity",
      spirituality: "true richness is revealed as inner fullness rather than ownership",
      relationships: "connections deepen when generosity flows without expectation",
      emotions: "feelings are abundant yet stable when held with awareness",
      obstacles: "fear of loss dissolves through trust in inner sufficiency",
      advice: "use what you have with wisdom, not attachment",
      transformation: "possession becomes prosperity when wealth serves harmony"
    }

   },
  "001000": { id: 15, symbol: "䷎", name: "Qian", english: "Modesty",

    keywords: ["humility", "balance", "low ego", "calm"],

    meanings: {
      general: "great strength bows quietly, finding power in unassuming stillness",
      love: "love deepens when pride dissolves into gentle acceptance",
      career: "success is earned through humility and steady, grounded effort",
      finance: "stability grows when caution and restraint guide ambition",
      health: "balance returns when the body is not forced beyond its natural rhythm",
      energy_in_home: "space feels peaceful when simplicity replaces excess",
      spirituality: "true wisdom arises when the self becomes quiet and receptive",
      relationships: "harmony emerges when ego steps back and understanding leads",
      emotions: "feelings settle into calm when not amplified by pride or tension",
      obstacles: "difficulty softens when approached with patience and humility",
      advice: "lower yourself to see the path more clearly",
      transformation: "power refines itself through simplicity and quiet awareness"
    }

   },
  "000100": { id: 16, symbol: "䷏", name: "Yu", english: "Enthusiasm",

    keywords: ["energy", "joy", "movement", "inspiration"],

     meanings: {
      general: "a rising current of life moves through all things, awakening momentum",
      love: "love flows with excitement, warmth, and shared emotional spark",
      career: "opportunities open when passion and readiness align in action",
      finance: "growth follows inspired action, but requires grounded direction",
      health: "vitality increases when energy is expressed rather than contained",
      energy_in_home: "space feels alive, dynamic, and filled with uplifting motion",
      spirituality: "spirit awakens through joy that moves without hesitation",
      relationships: "connection strengthens through shared enthusiasm and presence",
      emotions: "feelings rise vividly, needing direction to avoid overwhelm",
      obstacles: "resistance dissolves when energy is redirected into purpose",
      advice: "act when inspiration is alive, but keep awareness steady",
      transformation: "stillness turns into movement as life reclaims its rhythm"
    }

   },
  "100110": { id: 17, symbol: "䷐", name: "Sui", english: "Following",

    keywords: ["adaptation", "following", "flow", "alignment"],

     meanings: {
      general: "movement arises through trust in the current and attentive response to change",
      love: "love deepens when one follows the natural rhythm of connection without force",
      career: "success comes from aligning with guidance and adapting to unfolding direction",
      finance: "stability grows through flexible decisions guided by circumstance",
      health: "well-being improves when the body is listened to and not resisted",
      energy_in_home: "space flows smoothly when order adjusts naturally to life’s rhythm",
      spirituality: "wisdom appears when surrender replaces control",
      relationships: "harmony grows through responsiveness and mutual attunement",
      emotions: "feelings settle when allowed to move without resistance",
      obstacles: "difficulty softens when one stops forcing and begins to adapt",
      advice: "follow what is true in the moment rather than fixed expectation",
      transformation: "control dissolves into flow, revealing a more natural path"
    }

   },
  "011001": { id: 18, symbol: "䷑", name: "Gu", english: "Work on the Decayed",

    keywords: ["repair", "correction", "fixing", "restoration"],

     meanings: {
      general: "what has fallen into disorder calls for patient restoration and honest care",
      love: "love heals when old wounds are gently acknowledged and repaired",
      career: "progress comes through fixing neglected issues and improving foundations",
      finance: "stability returns by correcting past mistakes and reorganizing resources",
      health: "healing requires attention to imbalances that have been ignored",
      energy_in_home: "space clears when neglected energy is renewed and refreshed",
      spirituality: "growth begins by confronting inner decay with honesty and care",
      relationships: "connection strengthens through repairing broken trust",
      emotions: "feelings stabilize when old burdens are consciously released",
      obstacles: "hidden problems must be addressed before new progress can emerge",
      advice: "do not avoid what is broken; tend to it with steady patience",
      transformation: "decay becomes renewal when responsibility meets action"
    }

   },
  "110000": { id: 19, symbol: "䷒", name: "Lin", english: "Approach",

    keywords: ["approach", "arrival", "growth", "support"],

    meanings: {
      general: "something larger draws near, bringing expansion and gentle influence",
      love: "love approaches with warmth, openness, and growing intimacy",
      career: "new opportunities arrive as recognition and support increase",
      finance: "resources begin to grow through favorable conditions and timing",
      health: "recovery strengthens as supportive energy enters the system",
      energy_in_home: "space feels more open as positive influence moves in",
      spirituality: "guidance appears as clarity draws closer to awareness",
      relationships: "bonds deepen as trust and presence gradually expand",
      emotions: "feelings soften as comfort and reassurance arrive",
      obstacles: "resistance weakens when supportive forces come nearer",
      advice: "welcome what is approaching with readiness and calm awareness",
      transformation: "distance turns into closeness as influence becomes immediate"
    }

   },
  "000011": { id: 20, symbol: "䷓", name: "Guan", english: "Contemplation",

    keywords: ["observation", "reflection", "awareness", "mindfulness"],

    meanings: {
      general: "the world is seen clearly when stillness becomes the lens of perception",
      love: "love is understood through quiet observation rather than reaction",
      career: "clarity emerges by watching patterns before taking action",
      finance: "decisions improve when attention is given before commitment",
      health: "healing begins through mindful awareness of subtle signals",
      energy_in_home: "space reveals its truth when observed without judgment",
      spirituality: "wisdom arises from silent witnessing of all that unfolds",
      relationships: "understanding deepens through attentive presence rather than speech",
      emotions: "feelings become clear when observed without interference",
      obstacles: "solutions appear when one steps back to see the full picture",
      advice: "pause and observe before shaping direction",
      transformation: "perception itself becomes refined into insight"
    }

   },
  "100101": { id: 21, symbol: "䷔", name: "Shi He", english: "Biting Through",

    keywords: ["justice", "decision", "clearing obstacles", "action"],

     meanings: {
      general: "sharp clarity cuts through confusion and restores order through decisive force",
      love: "truth must be spoken clearly, even if it breaks illusions",
      career: "progress comes through firm decisions that remove obstruction",
      finance: "stability is restored by addressing problems directly and without delay",
      health: "healing requires decisive intervention and removal of harmful influences",
      energy_in_home: "space clears when stagnant or disruptive elements are removed",
      spirituality: "discernment separates illusion from truth with precise awareness",
      relationships: "clarity strengthens bonds even when honesty is difficult",
      emotions: "feelings become lighter when repressed tension is released",
      obstacles: "blockages are broken through decisive and timely action",
      advice: "do not hesitate—cut through what is no longer aligned",
      transformation: "confusion transforms into clarity through firm resolution"
    }

   },
  "101001": { id: 22, symbol: "䷕", name: "Bi", english: "Grace",

    keywords: ["beauty", "elegance", "refinement", "culture"],

     meanings: {
      general: "form becomes meaning when beauty softens the edges of reality",
      love: "love is expressed through tenderness, charm, and subtle presence",
      career: "success is enhanced by refinement, presentation, and thoughtful expression",
      finance: "stability benefits from tasteful restraint rather than excess",
      health: "well-being improves when balance and gentleness shape daily rhythm",
      energy_in_home: "space feels harmonious when beauty is simple and intentional",
      spirituality: "spirit reveals itself through subtle elegance rather than force",
      relationships: "connection deepens through kindness, courtesy, and gentle expression",
      emotions: "feelings are softened and uplifted through appreciation of beauty",
      obstacles: "difficulty is eased when approached with grace instead of resistance",
      advice: "refine what already exists rather than seeking dramatic change",
      transformation: "raw form becomes harmony through the touch of elegance"
    }

   },
  "000001": { id: 23, symbol: "䷖", name: "Bo", english: "Splitting Apart",

    keywords: ["decay", "breaking down", "collapse", "ending"],

     meanings: {
      general: "what is built begins to crumble, revealing what cannot endure",
      love: "love transforms as attachment breaks and truth remains exposed",
      career: "structures weaken; what is unstable naturally falls away",
      finance: "loss or reduction clears what was unsustainable",
      health: "energy declines where imbalance has long been ignored",
      energy_in_home: "space feels scattered as old order dissolves",
      spirituality: "ego structures fall, revealing raw awareness beneath",
      relationships: "connections loosen when foundation is no longer shared",
      emotions: "feelings unravel, exposing what was hidden underneath",
      obstacles: "resistance dissolves through inevitable breakdown",
      advice: "do not cling to what is already falling apart",
      transformation: "collapse becomes preparation for deeper renewal"
    }

   },
  "100000": { id: 24, symbol: "䷗", name: "Fu", english: "Return",

    keywords: ["return", "cycle", "renewal", "rebirth"],

     meanings: {
      general: "after the long descent, a quiet turning brings life back to its origin",
      love: "love returns in gentle waves after distance and silence",
      career: "new cycles begin as past lessons complete their movement",
      finance: "stability returns through renewed discipline and timing",
      health: "energy slowly restores as balance re-enters the system",
      energy_in_home: "space feels refreshed as old heaviness cycles out",
      spirituality: "the path turns inward again, reconnecting with the original source",
      relationships: "healing begins through reconnection and renewed trust",
      emotions: "feelings soften as emotional cycles complete and reset",
      obstacles: "return of clarity follows after a period of confusion",
      advice: "honor the turning point and allow the cycle to reset naturally",
      transformation: "what was lost returns in a quieter, more refined form"
    }

   },
  "100111": { id: 25, symbol: "䷘", name: "Wu Wang", english: "Innocence",

    keywords: ["simplicity", "truth", "purity", "spontaneity"],

    meanings: {
      general: "life moves cleanly when action arises without distortion or hidden intent",
      love: "love is most true when it is natural, uncalculated, and unforced",
      career: "progress flows when decisions are made without overthinking or manipulation",
      finance: "stability comes from honest dealings and simple clarity",
      health: "well-being strengthens when the body follows its natural rhythm",
      energy_in_home: "space feels light when free from pretense or cluttered intention",
      spirituality: "truth is revealed when the mind returns to pure awareness",
      relationships: "connection deepens through sincerity and unfiltered presence",
      emotions: "feelings are clearest when allowed to arise without control",
      obstacles: "confusion dissolves when intentions are kept pure and direct",
      advice: "act from what is true in the moment, not what is calculated",
      transformation: "innocence restores alignment between action and essence"
    }

   },
  "111001": { id: 26, symbol: "䷙", name: "Da Chu", english: "Great Taming",

    keywords: ["control", "strength", "discipline", "containment"],

    meanings: {
      general: "great force is gathered and held, refined through disciplined restraint",
      love: "love deepens when passion is guided with maturity and self-control",
      career: "success grows through patience, training, and contained strength",
      finance: "wealth stabilizes when impulses are held and resources carefully managed",
      health: "vital energy strengthens through discipline and structured habits",
      energy_in_home: "space feels stable when strong energy is contained and organized",
      spirituality: "inner power matures through restraint and conscious direction",
      relationships: "connection deepens when intensity is balanced with respect and patience",
      emotions: "feelings become powerful yet steady when held with awareness",
      obstacles: "resistance is overcome through sustained discipline rather than force",
      advice: "contain your strength and let it mature before releasing it",
      transformation: "raw power becomes mastery through deliberate restraint"
    }

   },
  "100001": { id: 27, symbol: "䷚", name: "Yi", english: "Nourishment",

    keywords: ["nourishment", "support", "care", "sustenance"],

    meanings: {
      general: "life is sustained through what is taken in and what is given outward",
      love: "love grows through care, attention, and emotional nourishment",
      career: "success depends on what you feed—skills, habits, and focus",
      finance: "stability comes from responsible allocation and steady support",
      health: "well-being is shaped by what the body receives and absorbs",
      energy_in_home: "space feels alive when it is cared for and thoughtfully maintained",
      spirituality: "the soul grows through mindful intake of wisdom and experience",
      relationships: "connection strengthens through mutual support and giving",
      emotions: "feelings stabilize when they are gently acknowledged and nourished",
      obstacles: "lack is resolved through proper care rather than force",
      advice: "be mindful of what you consume and what you cultivate",
      transformation: "nourishment turns potential into sustained vitality"
    }

   },
  "011110": { id: 28, symbol: "䷛", name: "Da Guo", english: "Great Exceeding",

    keywords: ["pressure", "excess", "burden", "critical point"],

    meanings: {
      general: "the structure bends under weight, revealing the edge where transformation becomes necessary",
      love: "love reaches intensity that requires honesty to avoid breaking under strain",
      career: "responsibility grows beyond comfort, demanding courage and recalibration",
      finance: "pressure from imbalance calls for urgent correction and restraint",
      health: "the body signals overload and needs immediate relief and care",
      energy_in_home: "space feels heavy when too much accumulates without release",
      spirituality: "the spirit confronts its limits, urging release of excess form",
      relationships: "connections strain under unresolved tension or imbalance",
      emotions: "feelings overflow and require grounding before they overwhelm",
      obstacles: "critical pressure forces decisive change or collapse",
      advice: "do not ignore the weight—adjust before breaking point is reached",
      transformation: "excess becomes awakening when limits are finally acknowledged"
    }

   },
  "010010": { id: 29, symbol: "䷜", name: "Kan", english: "The Abyss",

    keywords: ["danger", "depth", "risk", "trial"],

     meanings: {
      general: "life descends into deep currents where clarity is tested through uncertainty",
      love: "love is challenged by emotional depths that require trust to navigate",
      career: "progress moves through risk where caution and courage must coexist",
      finance: "instability demands careful navigation and avoidance of reckless moves",
      health: "energy fluctuates through a critical phase requiring vigilance",
      energy_in_home: "space feels heavy or uncertain, as if shadows linger beneath the surface",
      spirituality: "the soul is tested in darkness, learning trust without sight",
      relationships: "connection is strained by fear or misunderstanding that must be faced",
      emotions: "feelings run deep and intense, requiring grounding to avoid overwhelm",
      obstacles: "danger cannot be avoided, only navigated with awareness",
      advice: "move carefully, with full attention to each step through uncertainty",
      transformation: "fear becomes wisdom when one learns to move through the abyss"
    }

   },
  "101101": { id: 30, symbol: "䷝", name: "Li", english: "The Clinging",

    keywords: ["clarity", "fire", "awareness", "dependence"],

    meanings: {
      general: "light reveals itself by attaching to what burns and makes things visible",
      love: "love intensifies through passion that both illuminates and consumes",
      career: "success depends on clarity of vision and focused direction",
      finance: "stability comes from awareness and careful observation of conditions",
      health: "vitality is shaped by the balance between intensity and burnout",
      energy_in_home: "space feels alive when illuminated by warmth and conscious presence",
      spirituality: "awareness grows by clinging to insight that reveals truth",
      relationships: "connection deepens through clear understanding and honest reflection",
      emotions: "feelings become vivid and intense, requiring balance to remain steady",
      obstacles: "confusion dissolves when truth is illuminated without distortion",
      advice: "hold to clarity, but do not let intensity consume balance",
      transformation: "dependence on fire becomes illumination when awareness is mastered"
    }

   },
  "001110": { id: 31, symbol: "䷞", name: "Xian", english: "Influence",

    keywords: ["attraction", "influence", "connection", "feeling"],

     meanings: {
      general: "invisible currents shape movement through subtle resonance between beings",
      love: "love arises through natural attraction and mutual emotional sensitivity",
      career: "success grows through soft influence rather than forceful direction",
      finance: "stability is shaped by timing, perception, and subtle opportunity",
      health: "the body responds to gentle signals and emotional environment",
      energy_in_home: "space feels alive when subtle energies are in harmony",
      spirituality: "connection is felt through resonance rather than thought",
      relationships: "bonds form through mutual sensitivity and quiet understanding",
      emotions: "feelings spread easily through influence and shared atmosphere",
      obstacles: "resistance softens when approached with subtle rather than direct force",
      advice: "work through influence, not pressure",
      transformation: "separation dissolves as unseen attraction aligns all things"
    }

   },
  "011100": { id: 32, symbol: "䷟", name: "Heng", english: "Duration",

    keywords: ["stability", "continuity", "long-term", "endurance"],

    meanings: {
      general: "what endures takes shape through steady rhythm and quiet persistence",
      love: "love deepens when it is sustained through time and gentle consistency",
      career: "success is built through long-term commitment rather than sudden change",
      finance: "stability grows from patience and continuous, disciplined management",
      health: "well-being is maintained through consistent habits and balanced routine",
      energy_in_home: "space feels grounded when order and rhythm remain stable over time",
      spirituality: "truth reveals itself through enduring practice and steady awareness",
      relationships: "bonds strengthen through loyalty and consistent presence",
      emotions: "feelings stabilize when they are allowed to unfold gradually",
      obstacles: "challenges are overcome through persistence rather than force",
      advice: "stay steady; what is true does not require haste",
      transformation: "impermanence becomes structure through sustained continuity"
    }

   },
  "001111": { id: 33, symbol: "䷠", name: "Dun", english: "Retreat",

    keywords: ["withdrawal", "retreat", "protection", "timing"],

    meanings: {
      general: "wisdom moves backward so that strength is preserved for the right moment",
      love: "love finds safety in distance when closeness would bring imbalance",
      career: "progress is protected by stepping aside and choosing timing over force",
      finance: "stability is maintained by avoiding exposure and unnecessary risk",
      health: "energy recovers through rest, withdrawal, and reduced pressure",
      energy_in_home: "space feels safer when noise and intensity are reduced",
      spirituality: "clarity arises in silence when the world is temporarily left behind",
      relationships: "distance restores perspective and prevents unnecessary conflict",
      emotions: "feelings settle when given space instead of immediate reaction",
      obstacles: "avoidance becomes wisdom when confrontation would weaken position",
      advice: "retreat is not loss, but preservation of future strength",
      transformation: "withdrawal becomes strategy when timing replaces impulse"
    }

   },
  "111100": { id: 34, symbol: "䷡", name: "Da Zhuang", english: "Great Power",

    keywords: ["power", "strength", "assertion", "energy"],

    meanings: {
      general: "force rises strongly, demanding responsibility in how it is expressed",
      love: "love becomes intense, requiring balance between passion and respect",
      career: "success comes through confident action and decisive momentum",
      finance: "resources grow through bold but controlled decisions",
      health: "vitality is high, but must be guided to avoid burnout",
      energy_in_home: "space feels charged with strong and active presence",
      spirituality: "inner strength awakens and must be directed with awareness",
      relationships: "connections intensify and require clear boundaries",
      emotions: "feelings surge with power that needs grounding",
      obstacles: "resistance is overcome through assertive and focused action",
      advice: "use strength wisely—force without awareness becomes disruption",
      transformation: "raw power becomes mastery when it is consciously directed"
    }

   },
  "000101": { id: 35, symbol: "䷢", name: "Jin", english: "Progress",

    keywords: ["progress", "advance", "growth", "success"],

    meanings: {
      general: "movement rises steadily as light expands into new space",
      love: "love grows through mutual openness and shared forward motion",
      career: "success advances through recognition and timely opportunity",
      finance: "resources improve through expansion and well-placed decisions",
      health: "vitality strengthens as energy flows more freely and upward",
      energy_in_home: "space feels brighter as stagnation gives way to movement",
      spirituality: "awareness expands as understanding deepens step by step",
      relationships: "connection strengthens through shared growth and direction",
      emotions: "feelings become more open and expressive as confidence grows",
      obstacles: "resistance fades as momentum naturally carries things forward",
      advice: "continue moving steadily; progress is already unfolding",
      transformation: "stillness transforms into expansion through consistent advance"
    }

   },
  "101000": { id: 36, symbol: "䷣", name: "Ming Yi", english: "Darkening Light",

    keywords: ["difficulty", "darkness", "hiding", "endurance"],

    meanings: {
      general: "light continues to exist even when it is forced beneath the surface of shadow",
      love: "love survives quietly when openness must be hidden to protect the heart",
      career: "progress continues inwardly despite external limitations or concealment",
      finance: "stability requires caution and discretion in uncertain conditions",
      health: "energy must be conserved and protected during a low phase",
      energy_in_home: "space feels subdued, requiring calm and quiet preservation",
      spirituality: "wisdom grows inwardly when external clarity is obscured",
      relationships: "connection persists through silence and restrained expression",
      emotions: "feelings are present but held beneath the surface for safety",
      obstacles: "darkness tests endurance and patience rather than action",
      advice: "do not extinguish your light; protect it until conditions shift",
      transformation: "hiding becomes preservation as light learns to endure shadow"
    }

   },
  "101011": { id: 37, symbol: "䷤", name: "Jia Ren", english: "Family",

    keywords: ["family", "order", "structure", "relationships"],

    meanings: {
      general: "harmony arises when roles are clear and the inner household is well tended",
      love: "love matures through care, responsibility, and shared foundation",
      career: "success grows from structured cooperation and clear hierarchy of effort",
      finance: "stability is maintained through discipline within shared resources",
      health: "well-being improves when daily habits support the whole system",
      energy_in_home: "space feels balanced when order and warmth exist together",
      spirituality: "inner unity is built by aligning personal will with greater harmony",
      relationships: "bonds strengthen through respect, responsibility, and mutual care",
      emotions: "feelings stabilize when expressed within safe and structured boundaries",
      obstacles: "conflict is resolved by restoring order and clarity within the group",
      advice: "tend to your inner circle with consistency and gentle authority",
      transformation: "chaos becomes harmony when structure is guided by care"
    }


   },
  "110101": { id: 38, symbol: "䷥", name: "Kui", english: "Opposition",

    keywords: ["conflict", "difference", "tension", "contrast"],

    meanings: {
      general: "opposing forces pull apart, revealing truth through contrast and tension",
      love: "love faces distance where differences seek acknowledgment rather than control",
      career: "progress slows when visions conflict and alignment is missing",
      finance: "stability is challenged by competing priorities and divided direction",
      health: "imbalance appears when opposing energies are not reconciled",
      energy_in_home: "space feels unsettled as contrasting influences compete for dominance",
      spirituality: "wisdom emerges by observing duality without becoming trapped within it",
      relationships: "connection is tested through misunderstanding and differing perspectives",
      emotions: "feelings fluctuate between attraction and resistance",
      obstacles: "conflict persists until differences are recognized without force",
      advice: "do not seek sameness—understand the nature of divergence",
      transformation: "tension becomes clarity when opposition reveals hidden truth"
    }

   },
  "001010": { id: 39, symbol: "䷦", name: "Jian", english: "Obstruction",


    keywords: ["blockage", "difficulty", "delay", "obstacle"],

    meanings: {
      general: "the path becomes difficult, requiring patience and careful redirection",
      love: "love encounters barriers that cannot be forced open",
      career: "progress slows as unseen resistance blocks direct movement",
      finance: "financial pressure calls for caution and strategic restraint",
      health: "recovery is delayed, asking for patience and attentive care",
      energy_in_home: "space feels restricted, as though movement is interrupted",
      spirituality: "inner growth deepens through confronting limitation and hardship",
      relationships: "misunderstanding creates distance that requires gentle navigation",
      emotions: "feelings feel trapped, needing time and space to move again",
      obstacles: "resistance intensifies when approached with force instead of wisdom",
      advice: "pause, reassess, and seek another path around the obstruction",
      transformation: "difficulty becomes guidance when resistance reshapes direction"
    }

   },
  "010100": { id: 40, symbol: "䷧", name: "Xie", english: "Deliverance",

    keywords: ["release", "freedom", "solution", "relief"],

    meanings: {
      general: "tension breaks apart as the storm clears and movement becomes possible again",
      love: "love heals when old burdens and misunderstandings are finally released",
      career: "progress returns after obstacles dissolve and pressure eases",
      finance: "financial strain lessens through resolution and regained flexibility",
      health: "recovery accelerates as blocked energy begins to flow freely again",
      energy_in_home: "space feels lighter as heaviness and stagnation leave the atmosphere",
      spirituality: "freedom emerges when attachment and fear are consciously released",
      relationships: "connection improves through forgiveness and emotional clearing",
      emotions: "feelings unwind as tension and inner pressure dissolve",
      obstacles: "barriers weaken once the right moment for release arrives",
      advice: "let go of what no longer needs to be carried",
      transformation: "constriction transforms into freedom through release and renewal"
    }

   },
  "110001": { id: 41, symbol: "䷨", name: "Sun", english: "Decrease",

    keywords: ["loss", "sacrifice", "simplicity", "reduction"],

    meanings: {
      general: "lessening creates space where balance and clarity can return",
      love: "love deepens through sacrifice, humility, and quiet giving",
      career: "progress comes from reducing excess and focusing on what truly matters",
      finance: "stability is restored through careful limitation and conscious restraint",
      health: "well-being improves when burdens and unhealthy habits are reduced",
      energy_in_home: "space becomes lighter when clutter and excess are removed",
      spirituality: "wisdom grows through simplicity and release of attachment",
      relationships: "connection strengthens when expectations are softened",
      emotions: "feelings settle as unnecessary tension gradually fades",
      obstacles: "difficulty lessens when excess effort and resistance are released",
      advice: "simplify what has become too heavy or overextended",
      transformation: "loss becomes refinement when reduction reveals essential truth"
    }

   },
  "100011": { id: 42, symbol: "䷩", name: "Yi", english: "Increase",

    keywords: ["gain", "growth", "expansion", "support"],

    meanings: {
      general: "life expands as supportive forces gather and nourish new growth",
      love: "love flourishes through generosity, openness, and shared encouragement",
      career: "opportunities increase when effort aligns with higher purpose",
      finance: "resources grow through wise expansion and mutual benefit",
      health: "vitality strengthens as energy is replenished and supported",
      energy_in_home: "space feels abundant, active, and filled with renewing energy",
      spirituality: "growth accelerates when giving and receiving remain in harmony",
      relationships: "connection deepens through mutual support and sincere contribution",
      emotions: "feelings rise with optimism and renewed emotional strength",
      obstacles: "limitations fade as assistance and momentum increase",
      advice: "share what grows, and growth will continue to multiply",
      transformation: "small beginnings expand into abundance through aligned support"
    }

   },
  "111110": { id: 43, symbol: "䷪", name: "Guai", english: "Breakthrough",

    keywords: ["decision", "breakthrough", "clarity", "action"],

    meanings: {
      general: "a decisive force breaks through stagnation and reveals a clear path forward",
      love: "truth must emerge openly for love to move beyond hidden tension",
      career: "progress accelerates when hesitation is replaced by direct action",
      finance: "financial clarity comes through firm decisions and removal of excess",
      health: "healing advances when the root issue is confronted directly",
      energy_in_home: "space clears as stagnant energy is forcefully released",
      spirituality: "awakening occurs when illusion is cut away without compromise",
      relationships: "honest confrontation restores authenticity within connection",
      emotions: "suppressed feelings rise suddenly, demanding expression and resolution",
      obstacles: "barriers collapse when decisive momentum reaches its critical point",
      advice: "act clearly and without hesitation once truth becomes visible",
      transformation: "pressure transforms into liberation through courageous breakthrough"
    }

   },
  "011111": { id: 44, symbol: "䷫", name: "Gou", english: "Coming to Meet",

    keywords: ["encounter", "meeting", "unexpected", "chance"],

     meanings: {
      general: "an unexpected force enters suddenly, altering the direction of events",
      love: "love appears unexpectedly, carrying both attraction and uncertainty",
      career: "opportunity arrives quickly and must be approached with awareness",
      finance: "sudden possibilities emerge, requiring discernment before commitment",
      health: "the body reacts to unexpected influences that should not be ignored",
      energy_in_home: "space shifts as new and unfamiliar energy enters the environment",
      spirituality: "insight arrives through encounters that disrupt familiar patterns",
      relationships: "connections form rapidly, revealing hidden dynamics beneath attraction",
      emotions: "feelings arise suddenly and intensely, challenging stability",
      obstacles: "unexpected influences may distract or destabilize if left unchecked",
      advice: "meet what arrives with awareness, but do not surrender your center",
      transformation: "chance encounter becomes turning point through conscious response"
    }

   },
  "000110": { id: 45, symbol: "䷬", name: "Cui", english: "Gathering",

    keywords: ["assembly", "group", "unity", "collective"],

     meanings: {
      general: "separate forces come together around a shared center of purpose",
      love: "love strengthens through emotional closeness and mutual presence",
      career: "success grows through cooperation and collective effort",
      finance: "resources accumulate through shared support and organized unity",
      health: "healing improves when support and connection surround the individual",
      energy_in_home: "space feels alive when people gather in harmony and openness",
      spirituality: "community amplifies the movement toward higher understanding",
      relationships: "bonds deepen through shared experience and mutual commitment",
      emotions: "feelings intensify as emotional energies gather together",
      obstacles: "division weakens when unity forms around common intention",
      advice: "gather what is scattered and strengthen the center",
      transformation: "isolation transforms into belonging through conscious union"
    }

   },
  "011000": { id: 46, symbol: "䷭", name: "Sheng", english: "Pushing Upward",

    keywords: ["growth", "progress", "rise", "development"],

     meanings: {
      general: "steady ascent unfolds through patience, effort, and rooted persistence",
      love: "love grows gradually, deepening through trust and consistent care",
      career: "success rises step by step through dedication and humble progress",
      finance: "resources increase slowly through disciplined and steady cultivation",
      health: "well-being strengthens as gradual improvement takes hold",
      energy_in_home: "space feels uplifting as growth and renewal quietly expand",
      spirituality: "the spirit ascends through sincere practice and grounded awareness",
      relationships: "connection deepens over time through reliability and mutual growth",
      emotions: "feelings stabilize as confidence slowly rises from within",
      obstacles: "difficulty is overcome through persistence rather than sudden force",
      advice: "continue upward patiently; lasting growth does not rush",
      transformation: "small efforts become great elevation through continuous movement"
    }

   },
  "010110": { id: 47, symbol: "䷮", name: "Kun", english: "Oppression",

    keywords: ["pressure", "restriction", "hardship", "constraint"],

     meanings: {
      general: "the spirit is compressed by hardship, testing endurance within narrow limits",
      love: "love feels strained when emotional weight silences open connection",
      career: "progress slows under pressure and restrictive circumstances",
      finance: "resources feel limited, requiring endurance and careful management",
      health: "energy weakens under prolonged stress and accumulated tension",
      energy_in_home: "space feels confined, heavy, or emotionally burdened",
      spirituality: "inner truth is tested through periods of isolation and difficulty",
      relationships: "connection suffers when pressure replaces openness and trust",
      emotions: "feelings become trapped beneath layers of exhaustion or restraint",
      obstacles: "restriction intensifies when resistance hardens against reality",
      advice: "preserve inner strength even when outer movement is blocked",
      transformation: "hardship becomes depth when endurance reveals hidden resilience"
    }

   },
  "011010": { id: 48, symbol: "䷯", name: "Jing", english: "The Well",

    keywords: ["source", "depth", "nourishment", "foundation"],

    meanings: {
      general: "an ancient source continues to give life to all who know how to draw from it",
      love: "love is sustained by deep emotional roots and quiet, reliable presence",
      career: "success depends on returning to foundational skills and steady inner resources",
      finance: "stability comes from consistent, well-tended sources of support",
      health: "vitality is restored through deep replenishment and inner balance",
      energy_in_home: "space feels grounded when it is connected to its nourishing center",
      spirituality: "wisdom flows from an inner source that never truly runs dry",
      relationships: "connection deepens through reliable and enduring emotional support",
      emotions: "feelings stabilize when drawn from a calm and rooted center",
      obstacles: "difficulty is eased by returning to the original source of strength",
      advice: "do not search far—draw from what already sustains you",
      transformation: "emptiness becomes renewal when the source is rediscovered"
    }

   },
  "101110": { id: 49, symbol: "䷰", name: "Ge", english: "Revolution",

    keywords: ["change", "transformation", "rebirth", "shift"],

    meanings: {
      general: "old forms dissolve as a new order begins to emerge from inner necessity",
      love: "love transforms when outdated patterns are released without hesitation",
      career: "major change opens a new direction that cannot be ignored",
      finance: "structures of value shift, requiring adaptation and renewal",
      health: "the system undergoes a deep reset, clearing what no longer serves",
      energy_in_home: "space feels different as old energy is replaced by new alignment",
      spirituality: "awakening arrives through the breaking of familiar illusions",
      relationships: "connection changes form, demanding honesty and reinvention",
      emotions: "feelings shift rapidly as old attachments dissolve",
      obstacles: "resistance collapses when transformation becomes inevitable",
      advice: "accept change fully; what ends is making space for what must begin",
      transformation: "revolution becomes rebirth when change is embraced consciously"
    }

   },
  "011101": { id: 50, symbol: "䷱", name: "Ding", english: "The Cauldron",

    keywords: ["transformation", "alchemy", "nourishment", "ritual"],

      meanings: {
        general: "raw experience is refined through sacred heat into meaning and sustenance",
        love: "love deepens when shared experience becomes devotion and care",
        career: "success comes from refining skills into something valuable and enduring",
        finance: "resources grow when managed with wisdom and long-term vision",
        health: "well-being improves through conscious transformation of habits and energy",
        energy_in_home: "space feels sacred when intention and care shape its atmosphere",
        spirituality: "the soul is refined through inner discipline and symbolic ritual",
        relationships: "connection strengthens when shared meaning is consciously cultivated",
        emotions: "feelings are transformed when they are acknowledged and held with care",
        obstacles: "difficulty becomes growth when pressure is turned into refinement",
        advice: "treat what you have as something to be refined, not consumed",
        transformation: "ordinary life becomes sacred through intentional transformation"
      }

   },
  "100100": { id: 51, symbol: "䷲", name: "Zhen", english: "Shock",

    keywords: ["shock", "awakening", "movement", "sudden change"],

    meanings: {
      general: "a sudden force breaks stillness, awakening awareness through disruption",
      love: "love is shaken awake by unexpected truth or revelation",
      career: "sudden change forces immediate adaptation and alert response",
      finance: "instability arrives quickly, requiring composure and quick adjustment",
      health: "the system reacts strongly, demanding immediate attention and grounding",
      energy_in_home: "space feels charged as sudden shifts move through the environment",
      spirituality: "awakening arrives through disruption that breaks habitual perception",
      relationships: "connection is tested by sudden events that reveal true dynamics",
      emotions: "feelings surge abruptly, revealing hidden inner tension",
      obstacles: "resistance collapses under unexpected force or revelation",
      advice: "stay centered when life moves suddenly and without warning",
      transformation: "shock becomes awakening when awareness stabilizes after disruption"
    }

   },
  "001001": { id: 52, symbol: "䷳", name: "Gen", english: "Keeping Still",

    keywords: ["stillness", "calm", "meditation", "stability"],

    meanings: {
      general: "movement ceases so awareness can settle into deep inner stillness",
      love: "love finds depth in quiet presence and unspoken understanding",
      career: "progress pauses to allow reflection and clearer direction",
      finance: "stability is preserved through restraint and careful observation",
      health: "the body heals when rest and stillness are fully embraced",
      energy_in_home: "space feels grounded, quiet, and harmoniously contained",
      spirituality: "wisdom emerges from deep silence and inner observation",
      relationships: "connection strengthens through calm presence rather than action",
      emotions: "feelings settle when given space without interference",
      obstacles: "clarity arises when action is temporarily suspended",
      advice: "remain still until clarity naturally reveals the next step",
      transformation: "rest becomes insight when stillness is fully inhabited"
    }

   },
  "001011": { id: 53, symbol: "䷴", name: "Jian", english: "Development",

    keywords: ["gradual progress", "growth", "patience", "process"],

    meanings: {
      general: "growth unfolds slowly, like roots finding their place before the tree rises",
      love: "love matures step by step through patience and gentle alignment",
      career: "success develops through steady progress and long-term dedication",
      finance: "stability increases gradually through consistent and careful accumulation",
      health: "healing strengthens slowly as balance is restored over time",
      energy_in_home: "space becomes harmonious through gradual refinement and care",
      spirituality: "wisdom deepens through continuous practice and quiet persistence",
      relationships: "connection strengthens over time through trust and shared experience",
      emotions: "feelings stabilize as emotional understanding grows step by step",
      obstacles: "difficulties fade slowly as conditions naturally improve",
      advice: "do not rush; let growth unfold in its own rhythm",
      transformation: "becoming is revealed through gradual and patient unfolding"
    }

   },
  "110100": { id: 54, symbol: "䷵", name: "Gui Mei", english: "The Marrying Maiden",

    keywords: ["transition", "relationship", "adaptation", "change"],

    meanings: {
      general: "movement enters a transitional bond where adaptation shapes the unfolding path",
      love: "love moves through imbalance and learning, where adjustment is required on both sides",
      career: "progress depends on adapting to new structures and unfamiliar roles",
      finance: "stability is uncertain and requires careful navigation of changing conditions",
      health: "the system adjusts to new rhythms, requiring patience and flexibility",
      energy_in_home: "space feels transitional, as if between two states of order",
      spirituality: "growth comes through surrender to unfamiliar stages of becoming",
      relationships: "connection forms through adaptation rather than equality of conditions",
      emotions: "feelings shift with circumstance, requiring grounding and awareness",
      obstacles: "difficulty arises from misalignment that must be gradually corrected",
      advice: "accept the transitional nature of the situation and move with care",
      transformation: "instability becomes learning through adaptation to change"
    }

   },
  "101100": { id: 55, symbol: "䷶", name: "Feng", english: "Abundance",

    keywords: ["abundance", "peak", "energy", "prosperity"],

     meanings: {
      general: "light reaches its fullest brilliance, revealing a peak of life’s unfolding energy",
      love: "love shines intensely, filling connection with warmth and emotional fullness",
      career: "success is at its height, bringing recognition and visible achievement",
      finance: "prosperity flows strongly, marking a period of maximum gain",
      health: "vital energy is high, but must be balanced to avoid burnout",
      energy_in_home: "space feels vibrant, illuminated, and energetically full",
      spirituality: "awareness expands brightly, revealing clarity at its peak",
      relationships: "connection is strong and expressive, filled with shared vitality",
      emotions: "feelings are intense, expansive, and vividly present",
      obstacles: "challenges fade under the strength of momentum and clarity",
      advice: "recognize the peak, but prepare for the natural cycle of decline",
      transformation: "fullness reveals both its brilliance and its impermanence"
    }

   },
  "001101": { id: 56, symbol: "䷷", name: "Lu", english: "The Wanderer",

    keywords: ["travel", "movement", "detachment", "journey"],

     meanings: {
      general: "life unfolds as a passage through unfamiliar lands where nothing is permanently held",
      love: "love exists briefly like a flame carried through changing landscapes",
      career: "success comes through adaptability and skill in shifting environments",
      finance: "resources remain fluid, requiring caution and flexibility",
      health: "the body responds to changing conditions and needs gentle adjustment",
      energy_in_home: "space feels temporary, as if everything is in transit",
      spirituality: "wisdom grows through detachment from fixed identity and place",
      relationships: "connection is shaped by distance, change, and impermanence",
      emotions: "feelings shift like landscapes seen from a passing journey",
      obstacles: "uncertainty persists when stability cannot yet be established",
      advice: "move lightly and avoid attachment to temporary conditions",
      transformation: "the self becomes fluid through continuous movement and change"
    }

   },
  "011011": { id: 57, symbol: "䷸", name: "Xun", english: "The Gentle",

    keywords: ["gentleness", "wind", "influence", "penetration"],

    meanings: {
        general: "soft currents move through hidden spaces, shaping reality without force",
        love: "love grows through subtle presence, patience, and quiet understanding",
        career: "success comes through adaptability, diplomacy, and gentle persistence",
        finance: "stability is built through careful, continuous, unobtrusive effort",
        health: "healing progresses gradually through soft and consistent care",
        energy_in_home: "space feels harmonious when movement is light and unforced",
        spirituality: "wisdom enters quietly, like wind passing through open awareness",
        relationships: "connection deepens through subtle influence rather than control",
        emotions: "feelings shift gently when given space to flow naturally",
        obstacles: "resistance softens when approached indirectly and patiently",
        advice: "be gentle but persistent; influence works best without pressure",
        transformation: "force dissolves into subtle power through quiet consistency"
      }

   },
  "110110": { id: 58, symbol: "䷹", name: "Dui", english: "The Joyous",

    keywords: ["joy", "pleasure", "communication", "harmony"],

     meanings: {
      general: "lightness rises where openness and shared delight soften the weight of existence",
      love: "love blossoms through joy, laughter, and heartfelt emotional exchange",
      career: "success grows in environments of positive communication and collaboration",
      finance: "resources flow more easily when attitudes remain open and optimistic",
      health: "well-being improves through emotional lightness and expressive release",
      energy_in_home: "space feels alive with warmth, laughter, and harmonious exchange",
      spirituality: "joy becomes a gateway to deeper awareness and inner alignment",
      relationships: "connection strengthens through shared happiness and open dialogue",
      emotions: "feelings brighten and become easier to express and share",
      obstacles: "tension dissolves when heaviness is replaced with openness and ease",
      advice: "cultivate joy without excess; let lightness guide your interactions",
      transformation: "seriousness transforms into harmony through genuine joy"
    }

   },
  "010011": { id: 59, symbol: "䷺", name: "Huan", english: "Dispersion",

    keywords: ["dissolution", "release", "flow", "clearing"],

    meanings: {
      general: "what was once bound dissolves, carried away by moving currents of change",
      love: "love softens its grip, releasing tension and restoring emotional space",
      career: "structures loosen, allowing new directions to emerge naturally",
      finance: "resources stabilize when excess pressure and rigidity are released",
      health: "energy flows again as blockages and stagnation disperse",
      energy_in_home: "space clears as heavy or stagnant influence fades away",
      spirituality: "attachment dissolves, revealing a lighter and freer awareness",
      relationships: "conflict weakens as emotional distance is gently released",
      emotions: "feelings unwind and disperse, bringing inner relief",
      obstacles: "resistance fades when control is no longer held tightly",
      advice: "allow what is stuck to disperse rather than forcing resolution",
      transformation: "constriction becomes freedom as form dissolves into flow"
    }


   },
  "110010": { id: 60, symbol: "䷻", name: "Jie", english: "Limitation",

    keywords: ["limits", "structure", "discipline", "boundaries"],

    meanings: {
      general: "form is shaped by boundaries that define what can grow and what must pause",
      love: "love deepens when clear limits protect emotional balance and respect",
      career: "success depends on structure, discipline, and knowing when to stop",
      finance: "stability is maintained through restraint and well-defined limits",
      health: "well-being improves when excess is reduced and rhythms are respected",
      energy_in_home: "space feels stable when boundaries create order and clarity",
      spirituality: "wisdom grows through acceptance of natural limits and cycles",
      relationships: "connection strengthens through mutual respect for boundaries",
      emotions: "feelings stabilize when containment prevents overflow",
      obstacles: "progress requires accepting limits rather than resisting them",
      advice: "do not exceed what the situation can hold; respect its boundaries",
      transformation: "freedom emerges when limitation is understood as structure"
    }

   },
  "110011": { id: 61, symbol: "䷼", name: "Zhong Fu", english: "Inner Truth",

    keywords: ["truth", "integrity", "trust", "sincerity"],

    meanings: {
      general: "what is real resonates quietly beneath all form, requiring no disguise",
      love: "love deepens through honesty, vulnerability, and emotional authenticity",
      career: "success is built on integrity and consistency between action and intent",
      finance: "stability grows from transparent dealings and trustworthy choices",
      health: "well-being strengthens when inner signals are trusted and respected",
      energy_in_home: "space feels clear when honesty shapes its atmosphere",
      spirituality: "truth is felt directly when the heart is aligned with awareness",
      relationships: "connection deepens through sincerity and mutual trust",
      emotions: "feelings become steady when expressed without distortion",
      obstacles: "confusion dissolves when truth is acknowledged without fear",
      advice: "remain honest with yourself even when truth is uncomfortable",
      transformation: "illusion falls away as inner truth becomes the guiding force"
    }

   },
  "001100": { id: 62, symbol: "䷽", name: "Xiao Guo", english: "Small Exceeding",

    keywords: ["small steps", "detail", "precision", "care"],

    meanings: {
      general: "progress moves safely through small, careful adjustments rather than great leaps",
      love: "love deepens through gentle gestures and attention to subtle details",
      career: "success comes from precision, patience, and careful refinement",
      finance: "stability grows through cautious decisions and incremental progress",
      health: "well-being improves through attentive care and small adjustments",
      energy_in_home: "space feels balanced when small details are thoughtfully maintained",
      spirituality: "wisdom unfolds through subtle awareness and careful observation",
      relationships: "connection strengthens through small acts of care and consistency",
      emotions: "feelings stabilize when expressed gently and in measured ways",
      obstacles: "difficulty is avoided through careful attention to small signs",
      advice: "focus on small improvements rather than large, risky changes",
      transformation: "great outcomes emerge from quiet precision and gradual refinement"
    }

   },
  "101010": { id: 63, symbol: "䷾", name: "Ji Ji", english: "After Completion",

    keywords: ["completion", "end cycle", "balance", "closure"],

     meanings: {
      general: "the cycle reaches its full balance, where order is achieved yet still fragile",
      love: "love feels complete, yet requires care to preserve its harmony",
      career: "success has been achieved, but maintenance is now essential",
      finance: "stability is present, though vigilance is needed to sustain it",
      health: "balance is restored, yet must be carefully maintained",
      energy_in_home: "space feels settled, as if everything has found its place",
      spirituality: "completion reveals the quiet truth of impermanence",
      relationships: "connection feels whole, but requires ongoing attention",
      emotions: "feelings settle into calm after resolution",
      obstacles: "challenges are resolved, though new ones may quietly emerge",
      advice: "protect what has been completed; do not become careless after success",
      transformation: "completion becomes the threshold of a new cycle"
    }

   },
  "010101": { id: 64, symbol: "䷿", name: "Wei Ji", english: "Before Completion",

    keywords: ["unfinished", "potential", "transition", "beginning"],

    meanings: {
      general: "the cycle stands at the threshold where everything is still forming and nothing is fixed",
      love: "love is in a delicate state of becoming, not yet fully defined",
      career: "progress is underway, but requires careful direction to reach completion",
      finance: "stability is emerging, though not yet secured or settled",
      health: "healing is in progress and needs continued care and attention",
      energy_in_home: "space feels transitional, as if rearranging itself into new order",
      spirituality: "awareness opens toward completion but remains in active unfolding",
      relationships: "connection is forming, requiring patience and conscious nurturing",
      emotions: "feelings are shifting, not yet settled into final shape",
      obstacles: "uncertainty persists, but carries the promise of resolution",
      advice: "move carefully; the outcome is still being written",
      transformation: "unfinished reality becomes potential at the edge of completion"
    }

   }
};