// ===== OVERLAY: ENTER KEY FIX =====
// Single clean listener — no duplicates
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const overlay = document.getElementById("overlay");
    if (overlay && overlay.style.display !== "none") {
      overlay.classList.add("hide");
      setTimeout(() => {
        overlay.style.display = "none";
      }, 700);
    }
  }
});

// Also allow clicking the overlay to dismiss
document.getElementById("overlay").addEventListener("click", function () {
  this.classList.add("hide");
  setTimeout(() => {
    this.style.display = "none";
  }, 700);
});


// ===== DATA =====
const data = {
  CSE: {
    title: "COMPUTER SCIENCE ENGINEERING",
    why: `Best for students interested in coding, software, AI, and modern technology.
Focuses on problem-solving, logical thinking, and building real-world applications.
Offers opportunities in startups, MNCs, and freelancing.
Involves technologies like Web Development, Data Science, Cybersecurity, and Cloud Computing.
Provides flexibility to work remotely and globally.`,
    pros: [
      "High salary packages in top companies.",
      "Huge demand in India and abroad.",
      "Work from home opportunities.",
      "Future-proof career with constant growth.",
      "Wide range of job roles (developer, analyst, engineer).",
      "Freelancing and startup opportunities.",
      "Exposure to latest technologies (AI, ML, Blockchain).",
      "Strong community and learning resources available."
    ],
    cons: [
      "High competition in placements and jobs.",
      "Requires continuous learning and skill upgrades.",
      "Long screen time can affect health.",
      "Pressure to stay updated with fast-changing tech.",
      "Can be stressful with tight deadlines.",
      "Requires strong problem-solving skills.",
      "Sometimes repetitive coding work."
    ],
    careers: `Software Developer,\nWeb Developer,\nData Scientist,\nAI/ML Engineer,\nCybersecurity Analyst,\nCloud Engineer,\nDevOps Engineer,\nGame Developer,\nMobile App Developer`
  },

  IT: {
    title: "INFORMATION TECHNOLOGY",
    why: `Best for students interested in software systems, networking, and data management.
Focuses on application-based technology rather than core hardware.
Involves working with databases, web technologies, cloud computing, and cybersecurity.
Ideal for students who enjoy coding but prefer practical implementation over theory.
Provides strong career opportunities in IT services, startups, and global tech companies.`,
    pros: [
      "High demand in IT industry worldwide.",
      "Good salary packages with career growth.",
      "Less hardware-focused, more software-oriented.",
      "Opportunities in web development, cloud, and cybersecurity.",
      "Flexible job roles and career switching options.",
      "Work from home and remote job opportunities.",
      "Wide availability of jobs in service-based companies.",
      "Easier to adapt for beginners compared to core branches."
    ],
    cons: [
      "High competition in placements.",
      "Requires continuous skill updates.",
      "Some roles may become repetitive.",
      "Less focus on core engineering concepts.",
      "Can be stressful with project deadlines.",
      "Need to learn multiple tools and technologies.",
      "Job security depends on skill level.",
      "Fast-changing industry trends."
    ],
    careers: `Software Developer,\nWeb Developer,\nSystem Administrator,\nDatabase Administrator,\nCloud Engineer,\nCybersecurity Analyst,\nIT Support Engineer,\nNetwork Engineer,\nDevOps Engineer,\nTechnical Consultant`
  },

  ECE: {
    title: "ELECTRONICS & COMMUNICATION",
    why: `Best for students interested in electronics, communication systems, and modern technology.
Focuses on designing, developing, and testing electronic devices and communication equipment.
Covers areas like signal processing, embedded systems, IoT, and wireless communication.
Plays a key role in industries like telecom, defense, automation, and consumer electronics.
Ideal for students who enjoy both hardware and software integration.`,
    pros: [
      "Core engineering branch with strong fundamentals.",
      "Opportunities in both hardware and software fields.",
      "High demand in telecom, electronics, and IT sectors.",
      "Can shift to software industry easily with coding skills.",
      "Involvement in cutting-edge technologies like IoT and 5G.",
      "Good career options in government and private sectors.",
      "Hands-on experience with circuits and embedded systems.",
      "Diverse career paths available."
    ],
    cons: [
      "Conceptually challenging subjects.",
      "Requires strong understanding of mathematics and physics.",
      "Core jobs (hardware) are limited compared to IT jobs.",
      "Lab work and practicals can be time-consuming.",
      "Requires continuous learning of new technologies.",
      "Competition for core electronics jobs.",
      "May need additional coding skills for IT roles.",
      "Can be difficult for beginners without interest in electronics."
    ],
    careers: `Electronics Engineer,\nCommunication Engineer,\nEmbedded Systems Engineer,\nVLSI Design Engineer,\nSignal Processing Engineer,\nNetwork Engineer,\nIoT Developer,\nAutomation Engineer,\nDefense Engineer,\nTelecom Engineer`
  },

  EEE: {
    title: "ELECTRICAL & ELECTRONICS",
    why: `Best for students interested in electricity, power systems, and electrical machines.
Focuses on generation, transmission, and distribution of electrical energy.
Covers areas like power electronics, control systems, and renewable energy.
Essential for infrastructure, industries, and modern smart grids.
Ideal for students who enjoy core engineering and practical applications.`,
    pros: [
      "Core engineering branch with strong fundamentals",
      "High demand in power and energy sectors",
      "Government job opportunities (PSUs, Railways, etc.)",
      "Opportunities in renewable energy (solar, wind)",
      "Stable and respected career path",
      "Hands-on practical knowledge of electrical systems",
      "Wide industrial applications",
      "Good career growth in core sector"
    ],
    cons: [
      "Conceptually tough subjects",
      "Requires strong math and physics knowledge",
      "Core jobs are limited compared to IT",
      "Fieldwork can be physically demanding",
      "Less work-from-home opportunities",
      "Requires continuous skill upgrading",
      "Can be risky working with high voltage",
      "Slower salary growth initially"
    ],
    careers: `Electrical Engineer,\nPower Systems Engineer,\nControl Systems Engineer,\nMaintenance Engineer,\nRenewable Energy Engineer,\nGovernment Engineer (PSU),\nAutomation Engineer,\nElectrical Design Engineer`
  },

  MECHANICAL: {
    title: "MECHANICAL ENGINEERING",
    why: `Best for students interested in machines, engines, and manufacturing.
Focuses on design, analysis, and production of mechanical systems.
Covers thermodynamics, fluid mechanics, and robotics basics.
Essential in industries like automobile, aerospace, and manufacturing.
Ideal for students who enjoy practical and physical engineering work.`,
    pros: [
      "Core engineering branch with wide applications",
      "Opportunities in automobile and manufacturing industries",
      "Hands-on practical learning",
      "Strong foundation for robotics and automation",
      "Government job opportunities available",
      "Versatile field with multiple domains",
      "Opportunity to work in industrial sectors",
      "Global demand in engineering industries"
    ],
    cons: [
      "Physically demanding work environment",
      "Core jobs are limited compared to IT sector",
      "Lower starting salaries in some roles",
      "Requires strong understanding of physics",
      "Fieldwork and factory-based jobs",
      "Slow career growth initially",
      "Less remote work opportunities",
      "Needs additional skills for IT transition"
    ],
    careers: `Mechanical Engineer,\nDesign Engineer,\nProduction Engineer,\nAutomobile Engineer,\nAerospace Engineer,\nMaintenance Engineer,\nRobotics Engineer,\nThermal Engineer`
  },

  CIVIL: {
    title: "CIVIL ENGINEERING",
    why: `Best for students interested in construction, infrastructure, and design.
Focuses on building roads, bridges, buildings, and smart cities.
Covers structural engineering, environmental engineering, and surveying.
Essential for development of cities and infrastructure projects.
Ideal for students who enjoy design and outdoor project work.`,
    pros: [
      "High demand in infrastructure and construction",
      "Government job opportunities (PWD, Railways)",
      "Opportunity to work on large-scale projects",
      "Visible real-world impact of work",
      "Stable and respected career",
      "Growing demand in smart cities and urban planning",
      "Wide career opportunities in public sector",
      "Long-term career stability"
    ],
    cons: [
      "Fieldwork can be physically demanding",
      "Exposure to outdoor conditions",
      "Slower salary growth initially",
      "Requires site visits and supervision",
      "Less work-from-home flexibility",
      "Project delays can cause stress",
      "Requires strong technical knowledge",
      "Work-life balance may vary"
    ],
    careers: `Civil Engineer,\nStructural Engineer,\nSite Engineer,\nConstruction Manager,\nUrban Planner,\nEnvironmental Engineer,\nTransportation Engineer,\nGovernment Engineer`
  },

  AI_DS: {
    title: "AI & DATA SCIENCE",
    why: `Best for students interested in AI, machine learning, and data analysis.
Focuses on extracting insights from data and building intelligent systems.
Covers machine learning, deep learning, and big data technologies.
High demand in tech industries, startups, and research fields.
Ideal for students who enjoy coding, math, and data-driven decision making.`,
    pros: [
      "One of the highest paying fields",
      "Huge demand in global tech industry",
      "Work on advanced technologies like AI and ML",
      "Opportunities in top companies and startups",
      "Future-proof and rapidly growing field",
      "Work from home opportunities available",
      "Innovative and research-driven career",
      "Wide applications across industries"
    ],
    cons: [
      "Requires strong math and statistics knowledge",
      "High competition in top roles",
      "Continuous learning required",
      "Can be complex for beginners",
      "Long hours of coding and analysis",
      "Fast-changing technologies",
      "Pressure to stay updated",
      "Requires strong problem-solving skills"
    ],
    careers: `Data Scientist,\nAI Engineer,\nMachine Learning Engineer,\nData Analyst,\nBusiness Intelligence Analyst,\nResearch Scientist,\nBig Data Engineer,\nAI Developer`
  },

  ROBOTICS: {
    title: "ROBOTICS ENGINEERING",
    why: `Best for students interested in robots, automation, and AI systems.
Combines mechanical, electronics, and programming skills.
Focuses on designing intelligent machines and automation systems.
Used in industries like manufacturing, healthcare, and space exploration.
Ideal for students passionate about futuristic technologies.`,
    pros: [
      "Future-oriented and innovative field",
      "High demand in automation industries",
      "Involves cutting-edge technologies",
      "Opportunities in AI and robotics startups",
      "Hands-on and creative field",
      "Global demand in advanced industries",
      "Interdisciplinary learning",
      "High salary potential"
    ],
    cons: [
      "Requires knowledge of multiple domains",
      "Can be challenging for beginners",
      "Limited colleges offering specialization",
      "High competition in advanced roles",
      "Continuous learning required",
      "Requires strong technical skills",
      "Expensive tools and equipment",
      "Complex problem-solving needed"
    ],
    careers: `Robotics Engineer,\nAutomation Engineer,\nAI Engineer,\nEmbedded Systems Engineer,\nControl Systems Engineer,\nDrone Developer,\nResearch Scientist,\nIndustrial Automation Engineer`
  }
};


// ===== SHOW COURSE PORTAL =====
function showcourse(branch) {
  const portal = document.getElementById("course-portal");
  document.getElementById("infoPanel").style.display = "none";
  portal.style.display = "flex";

  const d = data[branch];
  if (!d) return;

  document.getElementById("course-title").innerText = d.title;
  document.getElementById("why").innerText = d.why;

  // Pros
  const prosList = document.getElementById("pros");
  prosList.innerHTML = "";
  d.pros.forEach(p => {
    const li = document.createElement("li");
    li.innerText = p;
    prosList.appendChild(li);
  });

  // Cons
  const consList = document.getElementById("cons");
  consList.innerHTML = "";
  d.cons.forEach(c => {
    const li = document.createElement("li");
    li.innerText = c;
    consList.appendChild(li);
  });

  document.getElementById("careers").innerText = d.careers;

  // Trigger slide-up animation
  portal.classList.remove("active");
  void portal.offsetWidth; // force reflow
  portal.classList.add("active");
}


// ===== CLOSE PORTAL =====
function closePortal() {
  const portal = document.getElementById("course-portal");
  portal.style.display = "none";
  portal.classList.remove("active");
  document.getElementById("infoPanel").style.display = "block";
}


// ===== 3D TILT ON BOXES =====
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((centerX - x) / centerX) * 10;
    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
});
