import { Card } from "@/components/ui/card";

const Stats = () => {
  const statistics = [
    {
      number: "73%",
      label: "of college students experience mental health crises",
      source: "ACHA Survey 2023"
    },
    {
      number: "85%",
      label: "report feeling overwhelmed by academic pressure",
      source: "Indian Higher Education Study"
    },
    {
      number: "42%",
      label: "never seek help due to stigma and accessibility issues",
      source: "Mental Health Foundation"
    },
    {
      number: "90%",
      label: "improvement in well-being with proper digital intervention",
      source: "Digital Health Research"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Mental Health Crisis in Higher Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the scale of the problem helps us build better solutions. 
            Here's what the data tells us about student mental health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow animate-slide-up">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <p className="text-foreground font-medium mb-3">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.source}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Student Mental Health?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join institutions across India that are pioneering evidence-based, 
            culturally-sensitive mental health support for their students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Request Demo
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;