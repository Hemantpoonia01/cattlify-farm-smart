import gopiSaraswat from "@/assets/gopi-saraswat.jpg";
import himanshu from "@/assets/himanshu.jpg";
import hemant from "@/assets/hemant.jpg";
import aarohi from "@/assets/aarohi.jpg";
import teamMember5 from "@/assets/team-member-5.jpg";
import teamMember6 from "@/assets/team-member-6.jpg";


const TeamSection = () => {
  const teamMembers = [
    { 
      name: "Gopi Saraswat",
      role: "Team Leader",
      image: gopiSaraswat
    },
    {
      name: "Himanshu Sharma",
      role: "APP Developer",
      image: himanshu
    },
    {
      name: "Deepak Sodhi", 
      role: "Backend Developer",
      image: teamMember6
    },
    {
      name: "Hemant Poonia",
      role: "UI/UX Designer",
      image: hemant
    },
    {
      name: "AAROHI AGARWAL",
      role: "Research Analysis",
      image: aarohi
    },
    {
      name: "AAKANKSHA RATHORE",
      role: "Cordinator",
      image: teamMember6
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A passionate team dedicated to making cattle care smarter and easier.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 mx-auto w-32 h-32 md:w-40 md:h-40">
               <img
                src={member.image}
                      alt={`${member.name} - ${member.role}`}
                          className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-soft group-hover:shadow-elegant transition-all duration-300 grayscale hover:grayscale-0"
                        />
                  
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-brand-dark mb-2">
                {member.name}
              </h3>
              <p className="text-muted-foreground">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
