const questions = [
  {
    "question": "Using an NDB it is possible to experience which of the following errors or limitations?",
    "options": [
      "Coastal refraction, timing error and night effect",
      "Night effect, station interference and latitude error",
      "Night effect, station interference and lack of a failure warning system",
      "Coastal refraction, timing error and lack of a failure warning system"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following are all errors associated with ADF:",
    "options": [
      "Selective availability, coastal refraction, night effect",
      "Night effect, quadrantal error, lane slip",
      "Mountain effect, station interference, static interference",
      "Selective availability, coastal refraction, quadrantal error"
    ],
    "correct": 2
  },
  {
    "question": "What gives the greatest error in ADF:",
    "options": [
      "Coastal effect",
      "Night effect",
      "Static interference from thunderstorms",
      "Quadrantal error"
    ],
    "correct": 2
  },
  {
    "question": "Which combination gives the greatest reduction in reliability of ADF:",
    "options": [
      "Station interference; Static interference; Lane slip",
      "Mountain effect; Station interference; Site error",
      "Night effect; Static interference; Quadrantal error",
      "Night effect; Quadrantal error; Station interference"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following may cause inaccuracies in ADF bearings?",
    "options": [
      "Static interference, height effect, lack of failure warning",
      "Station interference, mountain effect, selective availability",
      "Coastal refraction, slant range, night effect",
      "Lack of failure warning, station interference, static interference"
    ],
    "correct": 3
  },
  {
    "question": "With a transmission from an NDB aerial, the ___ component travels in the ___ plane and the signal is ___ polarised.",
    "options": [
      "Magnetic; horizontal; vertically",
      "Electrical; horizontal; vertically",
      "Electrical; vertical; horizontally",
      "Magnetic; vertical; horizontally"
    ],
    "correct": 0
  },
  {
    "question": "When receiving an NDB signal on an ADF receiver the BFO can be selected OFF for the:",
    "options": [
      "Tone signal on NONA1A",
      "Ident signal on NONA1A",
      "Tone signal on NONA2A",
      "Ident signal on NONA2A"
    ],
    "correct": 3
  },
  {
    "question": "When considering the propagation of ADF transmissions night effect is most pronounced:",
    "options": [
      "At dusk and dawn",
      "During the long winter nights",
      "At or near the coast",
      "When flying at low altitude"
    ],
    "correct": 0
  },
  {
    "question": "An NDB signal crossing from land to sea will ___ speed and bend ___ the normal.",
    "options": [
      "Decrease, towards",
      "Increase, towards",
      "Decrease, away from",
      "Increase, away from"
    ],
    "correct": 3
  },
  {
    "question": "When ADF equipment which incorporates a sense aerial and a loop aerial is tuned to a NDB and the loop aerial is rotated so that a sharp null is found the aerial is:",
    "options": [
      "Either at right angles or in line with the incoming signals",
      "In line with the incoming signals",
      "At right angles to the incoming signals",
      "Aligned with the aircraft nose"
    ],
    "correct": 1
  },
  {
    "question": "The D layer of the ionosphere affects the accuracy of NDB bearings:",
    "options": [
      "By day and night",
      "By day only",
      "By night only",
      "Never"
    ],
    "correct": 1
  },
  {
    "question": "The accuracy of ADF within the DOC (designated OP coverage) by day is:",
    "options": [
      "+/-5 deg",
      "+/-10 deg",
      "+/-7 deg",
      "+/-3 deg"
    ],
    "correct": 0
  },
  {
    "question": "The 95% accuracy for ADF bearings of an NDB by day is:",
    "options": [
      "\u00b12\u00b0",
      "\u00b17\u00b0",
      "\u00b110\u00b0",
      "\u00b13\u00b0"
    ],
    "correct": 1
  },
  {
    "question": "An aircraft heading 315\u00b0M shows an NDB bearing 180\u00b0 on the RMI. Any quadrantal error affecting the accuracy of this bearing is likely to be:",
    "options": [
      "Zero, as quadrantal errors are not found on the RMI",
      "At a maximum",
      "At a minimum",
      "Zero, as quadrantal errors affect only the VOR"
    ],
    "correct": 1
  },
  {
    "question": "An aircraft 10 nm from a north-south coastline takes two three-position line fixes from an inland NDB. The aircraft's indicated position is:",
    "options": [
      "Nearer to the coastline than its actual position",
      "Further from the coastline than its actual position",
      "Correct because the coastal refraction errors will cancel out because two fixes have been taken",
      "Correct in azimuth but false in range"
    ],
    "correct": 0
  },
  {
    "question": "A long range NDB is likely to transmit on ___ and be classified as ___. Select the answer to complete this statement.",
    "options": [
      "200 Khz; A2A",
      "800 Khz; A2A",
      "200 Khz; A1A",
      "800 Khz; A1A"
    ],
    "correct": 0
  },
  {
    "question": "The BFO:",
    "options": [
      "Creates the audio ident for an NDB",
      "Is used to make the ident from an A2A NDB audible",
      "Is used to make the ident from an A1A NDB audible",
      "Is used to determine the signal strength of an NDB"
    ],
    "correct": 2
  },
  {
    "question": "The nominal maximum range of an NDB with a transmitter power is 200 watts is:",
    "options": [
      "50 to 60 nm",
      "100 to 120 nm",
      "150 to 170 nm",
      "200 to 200 nm"
    ],
    "correct": 0
  },
  {
    "question": "With regard to the following types of NDB which statement is correct?",
    "options": [
      "Locators have 200 W power, 50 nm range and are NON A2A",
      "Locators have 15 W power, 10-25 nm range and are NON A2A",
      "Locators have 5000 W power, 50 nm range and are NON A2A",
      "Locators have 5000 W power, 50 nm range and are NON A1A"
    ],
    "correct": 1
  },
  {
    "question": "An NDB aerial is (i) so as to ensure the range is (ii) by minimising (iii) due to (iv):",
    "options": [
      "(i) Horizontal; (ii) Maximum; (iii) Diffraction; (iv) The ground wave",
      "(i) Vertical; (ii) Maximum; (iii) Attenuation; (iv) Energy losses to the surface",
      "(i) Horizontal; (ii) Maximum; (iii) Refraction; (iv) The D Layer",
      "(i) Vertical; (ii) Maximum; (iii) Attenuation; (iv) Atmospheric refraction"
    ],
    "correct": 1
  },
  {
    "question": "When using ADF (i)BY NIGHT, the accuracy is (ii)LESS than (iii)BY DAY, because the surface wave is (iv) CONTAMINATED BY SKY WAVES",
    "options": [
      "Snow will NOT affect ADF",
      "Snow will affect ADF",
      "Snow will maybe affect ADF",
      ""
    ],
    "correct": 0
  },
  {
    "question": "If an NDB signal is received at a range of 1000 nm:",
    "options": [
      "The signal is a surface wave and is quite usable",
      "It will be a ground wave and will be inaccurate",
      "It is a space wave and will be inaccurate",
      "It is a sky wave and is inaccurate"
    ],
    "correct": 3
  },
  {
    "question": "If an NDB has a published range of 30 nm, its accuracy is:",
    "options": [
      "Only guaranteed by day to that range",
      "rect: A"
    ],
    "correct": 0
  },
  {
    "question": "The signal to noise ratio for an NDB is ___, allowing a maximum error of ___ on 95% of occasions during ___:",
    "options": [
      "3/1, \u00b15 degrees, daylight hours only",
      "3/1, \u00b15 degrees, 24 hours",
      "5/1, \u00b13 degrees, 24 hours",
      "5/1, \u00b13 degrees, daylight hours only"
    ],
    "correct": 0
  },
  {
    "question": "When is coastal error at its worst for an aircraft at low level?",
    "options": [
      "Beacon inland at an acute angle to the coast",
      "Beacon inland at 90\u00b0",
      "Beacon close to the coast at an acute angle to the coast",
      "Beacon close to the coast at 90\u00b0 to the coast"
    ],
    "correct": 0
  },
  {
    "question": "An aircraft over the sea is receiving a signal from an NDB 50nm from the coast and another from an NDB 20nm from the coast. Which of the following statements is most correct?",
    "options": [
      "The bearing information from relative bearings of 90\u00b0 and 270\u00b0 would be most correct",
      "The bearing information from relative bearings of 360\u00b0 and 180\u00b0 would be most correct",
      "The bearing information from the beacon 20nm inland would be most correct",
      "The bearing information from the beacon 50nm inland would be most correct"
    ],
    "correct": 2
  },
  {
    "question": "The purpose of the BFO switch on the ADF receiver is to:",
    "options": [
      "Make the signal audible",
      "Cut out the static noise",
      "Improve the strength of the received signal",
      "Attenuate the received signal"
    ],
    "correct": 0
  },
  {
    "question": "An ADF uses a sense aerial to:",
    "options": [
      "Determine the null position",
      "Resolve ambiguous bearings",
      "Transmit the beacon ident",
      "Detect the receiver test signal"
    ],
    "correct": 1
  },
  {
    "question": "An aeroplane\u2019s RMI shows an NDB bearing 070\u00b0, w/v calm. The aeroplane is to join a right hand holding pattern at the NDB, the inbound leg of which is 330\u00b0. The aeroplane should:",
    "options": [
      "Fly to the NDB and join the pattern",
      "Fly to the NDB then fly outbound on 150\u00b0 for 1 minute",
      "Fly to the NDB then fly a teardrop with an outbound heading of 120\u00b0 for 1 minute and a rate one turn to join inbound",
      "Fly to the NDB then fly choose either (B) or (C) above as preferred"
    ],
    "correct": 0
  },
  {
    "question": "An aeroplane is flying parallel to a coast. Which of the following NDBs will give the greatest coastal refraction LOP error?",
    "options": [
      "NDB sited on the coast-RBI 330\u00b0",
      "NDB sited 30 nm inland-RBI 330\u00b0",
      "NDB sited on the coast-RBI 300\u00b0",
      "NDB sited 30 nm inland-RBI 300\u00b0"
    ],
    "correct": 1
  },
  {
    "question": "What is the role of a ground direction finder?",
    "options": [
      "To aid pilot navigation",
      "To halt ground movements",
      "To map airfields",
      "To assist planners in the construction of airfield approaches"
    ],
    "correct": 0
  }
];
