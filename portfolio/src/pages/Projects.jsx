import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Dashboard",
      image: "https://images.pexels.com/photo/abstract-technology-2609544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Full-stack e-commerce platform with admin dashboard and analytics",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
    },
    {
      title: "Task Management App",
      image: "https://images.pexels.com/photo/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Collaborative task management with real-time updates",
      technologies: ["React", "Firebase", "Redux"]
    },
    {
      title: "Portfolio Website",
      image: "https://images.pexels.com/photo/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Responsive portfolio website with dark mode",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Weather Application",
      image: "https://images.pexels.com/photo/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Real-time weather forecasts with 5-day predictions",
      technologies: ["React", "OpenWeather API", "Chart.js"]
    },
    {
      title: "Recipe Finder",
      image: "https://images.pexels.com/photo/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Search and save recipes with nutritional information",
      technologies: ["Vue.js", "Spoonacular API", "IndexedDB"]
    },
    {
      title: "Fitness Tracker",
      image: "https://images.pexels.com/photo/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Workout logging and progress tracking application",
      technologies: ["React Native", "Firebase", "Expo"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
