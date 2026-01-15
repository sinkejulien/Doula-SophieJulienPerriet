import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Heart, Flower2, Moon, Leaf, Sparkles, Users, ArrowRight, Baby, Sun, CloudRain } from "lucide-react";
import sophieYoga from "@/assets/sophie-yoga-nature.webp";
import cercleFemmes from "@/assets/cercle-femmes-mains.webp";
import sophiePortrait from "@/assets/sophie-portrait.webp";
import sophieCours from "@/assets/sophie-cours-yoga.webp";
import backgroundImg from "@/assets/hero-wellness.jpg"

const Index = () => {
  return (
    <Layout>
      {/* SEO */}
      <title>Sophie Julien-Perriet | Doula Large Spectre & Yoga au Féminin</title>
      <meta name="description" content="Doula large spectre spécialisée dans l'accompagnement de la maternité, ménopause et deuil. Yoga au féminin, cercles de femmes et rituels. Lorraine et en ligne." />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={sophieCours}
            alt="Sophie enseignant le yoga à un groupe de femmes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-wide mx-auto px-4 md:px-8 py-20">
          <div className="max-w-2xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soleil/40 text-terre text-sm font-medium mb-6 animate-fade-in">
              <Flower2 className="w-4 h-4" />
              Doula Large Spectre
            </span>

            {/* Main Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 animate-slide-up">
              Je vous accompagne pour vivre une{" "}
              <span className="text-terre italic">féminité zen et joyeuse</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-slide-up delay-100">
              Je suis Sophie, votre Doula spécialisée dans l'accompagnement de la maternité, 
              de la ménopause et du deuil. Yoga au féminin, cercles de femmes et rituels 
              pour vous reconnecter à votre puissance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-200">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Réserver un appel découverte
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/doula">
                <Button variant="hero-outline" size="xl">
                  Découvrir mes accompagnements
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* 3 Portals Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <SectionHeader
            badge="Les 3 grands portails"
            title="Les grandes étapes de votre vie de femme"
            subtitle="La grossesse, la ménopause et le deuil sont des périodes de grands chamboulements où nous avons fondamentalement besoin d'être soutenues, vues et entendues."
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <ServiceCard
              icon={<Baby className="w-7 h-7" />}
              title="Accompagner la maternité"
              description="Le temps de la maternité est une période de grands chamboulements. La grossesse va entraîner une plus grande vulnérabilité car tout est inconnu. Je serai là pour vous écouter, pour vous soutenir dans ce grand portail de la maternité."
              linkTo="/doula"
              linkText="Découvrir l'accompagnement"
              variant="featured"
            />

            <ServiceCard
              icon={<Sun className="w-7 h-7" />}
              title="Accueillir la ménopause"
              description="Non, la ménopause n'est pas le début de la fin. C'est tout un univers de possibles qui s'offre à nous quand nous sommes affranchies de notre cycle reproducteur. Nous détenons les enseignements de notre ancienne vie cyclique."
              linkTo="/doula"
              linkText="Découvrir l'accompagnement"
            />

            <ServiceCard
              icon={<CloudRain className="w-7 h-7" />}
              title="Accompagnement du deuil"
              description="Vivre un deuil peut être accablant, mais il existe des ressources et des outils pour vous aider à traverser cette étape. Je vous propose une présence douce et bienveillante pour que vous ne soyez pas seule face à cette épreuve."
              linkTo="/doula"
              linkText="Découvrir l'accompagnement"
            />
          </div>
        </div>
      </section>

      {/* Yoga Section */}
      <section className="section-padding bg-soleil/10">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-soleil/40 text-terre text-sm font-medium mb-4">
                Yoga au féminin
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Le yoga comme fil rouge de votre reconnexion
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                On a souvent tendance à réduire le yoga au simple fait de dérouler son tapis et d'exécuter des exercices respiratoires et diverses postures. Mais en réalité, le yoga est bien plus qu'une pratique physique. C'est une philosophie de vie qui impacte diverses dimensions de notre être.
              </p>

              {/* 5 Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {["La respiration juste", "Les postures justes", "La relaxation", "L'alimentation", "La méditation"].map((pillar, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-terre">
                    <Leaf className="w-4 h-4 text-terre-light flex-shrink-0" />
                    {pillar}
                  </div>
                ))}
              </div>

              <Link to="/yoga">
                <Button variant="cta" size="lg">
                  Explorer mes accompagnements yoga
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
                <img
                  src={sophieYoga}
                  alt="Sophie pratiquant le yoga en pleine nature"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-soleil/30 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-rose/30 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Circles & Rituals Teaser */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <SectionHeader
            badge="Cercles & Rituels"
            title="Des moments de transformation et de connexion"
            subtitle="Parce que dans notre société nous avons perdu nos repères et nos savoirs liés aux grands passages de nos vies, j'avais à cœur de pouvoir proposer des cercles de femmes et des rituels qui sont de véritables opportunités de transformation."
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <Users className="w-10 h-10 text-rose mb-4" />
              <h3 className="font-display text-2xl text-foreground mb-3">Cercles de femmes</h3>
              <p className="text-muted-foreground mb-4">
                Un doux moment de sororité, une parole libérée, une écoute bienveillante et sans jugement. Des moments où le temps semble suspendu.
              </p>
              <p className="text-sm text-terre font-medium">Durée: 2h30 • Tarif: 25€</p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <Sparkles className="w-10 h-10 text-soleil mb-4" />
              <h3 className="font-display text-2xl text-foreground mb-3">Rituels sacrés</h3>
              <p className="text-muted-foreground mb-4">
                Motherblessing, Rebozo, fermeture du vortex, cérémonie cacao... Des rituels pour marquer et célébrer les grands passages de votre vie.
              </p>
              <p className="text-sm text-terre font-medium">À partir de 325€</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/cercles-rituels">
              <Button variant="outline" size="lg">
                Découvrir les cercles & rituels
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="section-padding bg-sable/30">
        <div className="container-wide mx-auto px-4 md:px-8">
          <SectionHeader
            badge="À qui je m'adresse"
            title="Mon accompagnement est fait pour vous"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Baby className="w-6 h-6" />,
                title: "Vous êtes enceinte ou jeune maman",
                description: "Si vous vous sentez anxieuse par rapport à tous les bouleversements de votre grossesse, si vous avez peur de l'accouchement, si vous vous sentez seule avec votre nouveau-né.",
                link: "/doula"
              },
              {
                icon: <Moon className="w-6 h-6" />,
                title: "Vous traversez la ménopause",
                description: "Si vous vivez la pré-ménopause avec sa cacophonie hormonale ou si vous souhaitez aborder ce portail puissant avec plus de sagesse et de sérénité.",
                link: "/doula"
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Vous traversez un deuil",
                description: "Si vous cherchez des ressources et une présence douce pour traverser cette étape, honorer vos émotions et avancer vers la reconstruction.",
                link: "/doula"
              },
              {
                icon: <Flower2 className="w-6 h-6" />,
                title: "Vous souhaitez vous reconnecter",
                description: "Si vous cherchez à vous recentrer sur vous-même, à retrouver l'équilibre que nos rythmes de vie effrénés mettent à mal.",
                link: "/yoga"
              }
            ].map((item, i) => (
              <Link key={i} to={item.link} className="group">
                <div className="h-full bg-card rounded-2xl p-6 shadow-soft border border-border/50 transition-all duration-300 hover:shadow-card hover:border-soleil/30">
                  <div className="w-12 h-12 rounded-xl bg-soleil/30 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <SectionHeader
            badge="Témoignages"
            title="Ce que disent les femmes que j'accompagne"
          />

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="J'ai eu l'occasion de participer à une semaine de jeûne et détox organisée par Sophie. Grâce à Sophie, nous avons appris à mieux connaître notre corps et à nous reconnecter à nous-mêmes par le biais de séances de Yoga et de courtes méditations."
              context="Jeûne & Détox, Rebozo, Cérémonie Cacao"
              variant="featured"
            />
            <TestimonialCard
              quote="Sophie est particulièrement bienveillante et sait mettre à l'aise et en confiance ses élèves. Elle est à l'écoute pour que chacun s'épanouisse dans sa pratique. J'ai eu la chance d'être initiée au rebozo lors d'un cours de yoga."
              context="Yoga & Rebozo"
            />
            <TestimonialCard
              quote="Merci à toi Sophie pour cette cérémonie cacao que j'appréhendais un peu, mais j'en suis sortie forte et sereine. Elle a ce don d'envelopper, d'écouter et de conseiller toujours dans la bienveillance."
              context="Cérémonie Cacao"
            />
          </div>

          <div className="text-center mt-10">
            <Link to="/temoignages">
              <Button variant="outline" size="lg">
                Lire tous les témoignages
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding bg-nuit text-creme">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-soleil/30 text-soleil text-sm font-medium mb-4">
                À propos
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-creme mb-6">
                Issue d'un métissage des îles au cœur de la Lorraine
              </h2>
              <p className="text-creme/80 leading-relaxed mb-6">
                Je m'appelle Sophie Julien-Perriet. Constamment en quête d'identité et de racines, j'ai expérimenté la force de la sororité. Après 14 ans comme professeure de lettres, un burn-out m'a amenée à me reconvertir vers le bien-être et le yoga.
              </p>
              <p className="text-creme/80 leading-relaxed mb-8">
                Je suis officiellement une Quantik Doula depuis 2025. Cette formation a confirmé ma vocation de Doula, en me donnant des outils très riches entre « science et sacré » pour vous soutenir avec justesse.
              </p>
              <Link to="/a-propos">
                <Button variant="hero" size="lg">
                  Découvrir mon histoire
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-soleil/40 shadow-2xl">
                  <img
                    src={sophiePortrait}
                    alt="Sophie Julien-Perriet"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Êtes-vous prête à exprimer toute votre puissance ?"
        subtitle="Réservez votre appel découverte de 20 minutes gratuit pour discuter de vos besoins et voir comment je peux vous accompagner."
        primaryButtonText="Réserver un appel découverte"
        primaryButtonLink="/contact"
        variant="warm"
      />
    </Layout>
  );
};

export default Index;
