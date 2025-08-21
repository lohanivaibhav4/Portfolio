import { ArrowRight, Book, BookOpen, Code } from "lucide-react";
import cn from "../lib/utils";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-semibold">Experience</h3>
            <h4 className="font-bold text-2xl">
              Software Developement <span className="text-primary">Intern</span>
            </h4>

            <h5 className="font-bold">
              <span className="text-primary">Bluestock</span> Fintech - ( Nov'24
              - Dec'24 )
            </h5>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-muted-foreground">
                    Delivered 5+ responsive UI components for a React-based IPO
                    application, improving cross device performance and reducing
                    CSS maintenance by 30% through modular architecture.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-muted-foreground">
                    Delivered 5+ responsive UI components for a React-based IPO
                    application, improving cross device performance and reducing
                    CSS maintenance by 30% through modular architecture.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-muted-foreground">
                    Delivered 5+ responsive UI components for a React-based IPO
                    application, improving cross device performance and reducing
                    CSS maintenance by 30% through modular architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <h3 className="text-4xl font-semibold">Education</h3>

            <div>
                    <h4 className="font-bold text-xl">
                        <span className="text-primary">Master</span> Of Computer Applications</h4>
                    
                    <h5 className="font-bold">
                        Shri Shankaracharya{" "}
                        <span className="text-primary">Technical{" "}</span>Campus
                    </h5>

                    <h5 className="text-center font-bold">( 2023 - 2025 )</h5>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <p className="text-left p-0.75">
                    Specialized in advanced computer science and emerging technologies. 
                    Focused on building expertise in Artificial Intelligence, Data Science, 
                    Data Structures & Algorithms, DBMS, and Computer Networks, 
                    with practical applications in secure and scalable systems.
                </p>
              </div>
            </div>
            <div>
                    <h4 className="font-bold text-xl">
                        <span className="text-primary">Bachelor</span> Of Computer Applications</h4>
                    
                    <h5 className="font-bold">
                        Maharaja Agrasen {" "}
                        <span className="text-primary">International{" "}</span>College
                    </h5>

                    <h5 className="text-center font-bold">( 2017 - 2020 )</h5>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <p className="text-left">
                    Built a strong foundation in core computer science principles and applied mathematics.
                    Gained hands-on experience in programming with Java and C++ 
                </p>
                
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#contact"
                className={cn(
                  "px-6 py-2 rounded-full border border-primary",
                  "hover:bg-primary/10 transition-colors duration-300"
                )}
              >
                Download Resume
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
