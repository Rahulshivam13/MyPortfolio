// --- 1. DATA CONFIGURATION ---

const mySkills = [
    { name: "Java", icon: "fab fa-java" },
    { name: "Spring Boot", icon: "fas fa-leaf" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "HTML/CSS", icon: "fab fa-html5" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "React.js", icon: "fab fa-react" },
    { name: "Python", icon: "fab fa-python" }

];

const myExperience = [
    {
        role: "Software Developer Intern",
        company: "Priya Qubit Pvt Ltd",
        duration: "Jan 2025 – July 2025",
        desc: "Built responsive Cloudnest Qubit using Spring Boot and integrated SQL database operations for efficient data management."
    },
    {
        role: "Front-End Developer Intern",
        company: "Priya Qubit Pvt Ltd",
        duration: "Oct 2022 – Jan 2023",
        desc: "Enhanced Qubit Code website design using HTML, CSS, and JS, ensuring responsive design and seamless database integration."
    }
];

const myProjects = [
    { 
        title: "Taxi Booking System", 
        desc: "A Spring Boot application using REST APIs and JPA to manage real-time ride requests, fare calculations, and secure database transactions.", 
        tech: "Java, Spring, JPA", 
        img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=400", 
        link: "#" 
    },
    { 
       title: "Bill Buddy", 
    desc: "Full-stack expense tracker featuring secure group authentication...", 
    tech: "Java, MySQL, JS", 
     img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400", 
    link: "#"
    },
    { 
        title: "ATM Interface", 
        desc: "Robust Java-based banking console implementing OOP principles, secure login validation, and exception handling for reliable financial transaction management.", 
        tech: "Java, OOPs", 
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400", 
        link: "#" 
    },
    { 
        title: "Cloudnest Qubit", 
        desc: "Scalable cloud management interface developed during internship to optimize data management workflows and enhance user interaction through responsive design.", 
        tech: "Spring, SQL, JS", 
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400", 
        link: "#" 
    },
    { 
        title: "Portfolio Engine", 
        desc: "Custom-built personal brand platform featuring a royal aesthetic, optimized for performance using Tailwind CSS and dynamic JavaScript data rendering.", 
        tech: "Tailwind, JS", 
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400", 
        link: "#" 
    }
];

const myCertificates = [
    { 
        title: "Java Full Stack Development", 
        issuer: "JSpiders, Bangalore", 
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400",
        link: "#" 
    },
    { 
        title: "AWS / DevOps", 
        issuer: "Techno Geeks, Pune", 
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800", 
        link: "#" 
    }
];
// --- 2. RENDERING LOGIC ---

// Render Experience
const expContainer = document.getElementById('experience-container');
myExperience.forEach(exp => {
    expContainer.innerHTML += `
        <div class="card-hover p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h3 class="text-2xl font-bold text-gold">${exp.role}</h3>
                <p class="text-white/80 font-semibold">${exp.company}</p>
                <p class="text-gray-400 text-sm mt-2 max-w-2xl">${exp.desc}</p>
            </div>
            <div class="text-gold font-mono text-sm border border-gold/30 px-4 py-2 rounded-full">
                ${exp.duration}
            </div>
        </div>`;
});

// Render Skills
const skillsContainer = document.getElementById('skills-container');
mySkills.forEach(s => {
    skillsContainer.innerHTML += `
        <div class="card-hover p-6 rounded-xl text-center">
            <i class="${s.icon} text-4xl text-gold mb-3"></i>
            <p class="font-medium text-sm tracking-wide uppercase">${s.name}</p>
        </div>`;
});

// Render Projects
const projectsContainer = document.getElementById('projects-container');
myProjects.forEach(p => {
    projectsContainer.innerHTML += `
        <div class="card-hover rounded-2xl overflow-hidden group">
            <img src="${p.img}" class="w-full h-48 object-cover opacity-70 group-hover:opacity-100 transition duration-500">
            <div class="p-6">
                <h3 class="text-xl font-bold text-gold">${p.title}</h3>
                <p class="text-gray-400 mt-2 text-sm">${p.desc}</p>
                <a href="${p.link}" class="inline-block mt-4 text-gold font-bold hover:text-white transition">View Live →</a>
            </div>
        </div>`;
});

// Render Certificates
const certsContainer = document.getElementById('certs-container');
myCertificates.forEach(c => {
    certsContainer.innerHTML += `
        <div class="card-hover p-4 rounded-xl">
            <img src="${c.img}" class="cert-img w-full h-40 object-cover rounded-lg mb-4">
            <h3 class="text-gold font-bold">${c.title}</h3>
            <p class="text-sm text-gray-500">${c.issuer}</p>
            <a href="${c.link}" class="text-xs mt-3 block text-gray-300 underline hover:text-gold transition">Verify Credentials</a>
        </div>`;
});