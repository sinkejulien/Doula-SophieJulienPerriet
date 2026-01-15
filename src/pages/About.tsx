import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Heart, Book, GraduationCap, Eye, Star, Users, Lightbulb, ArrowRight } from "lucide-react";
import sophiePortrait from "@/assets/sophie-portrait.webp";
import sophieYoga from "@/assets/sophie-yoga-nature.webp";

const AboutPage = () => {
  const formations = [
    { year: "2005", title: "Professeur de Lettres modernes", institution: "Éducation nationale" },
    { year: "2015", title: "Formation de professeur de yoga", institution: "Centre international Sivananda de yoga vedanta" },
    { year: "2016", title: "Certification en yoga prénatal et postnatal", institution: "Centre international Sivananda de yoga vedanta" },
    { year: "2016", title: "Certification en yoga senior", institution: "Centre international Sivananda de yoga vedanta" },
    { year: "2016-2017", title: "Reiki niveau I et II", institution: "Céline Boutot – Maître Reiki de tradition Usui Shiko Ryoho" },
    { year: "2019", title: "Diplôme de Naturopathe", institution: "Institut de Formation Naturopathique Inc." },
    { year: "2021", title: "Praticienne et facilitatrice de cérémonie cacao", institution: "Chamane Soisic de Filipo" },
    { year: "2022", title: "Bandage du ventre post-accouchement & massage Shantala", institution: "Maternité Sacré – Camille Laperle" },
    { year: "2022", title: "Formation à l'utilisation du rebozo et au rituel Rebozo", institution: "École Française du Rebozo – Laurence Kerbarh" },
    { year: "2022", title: "Massage de la femme enceinte et massage détox", institution: "École du Wellness" },
    { year: "2024", title: "Accompagner sereinement le deuil périnatal", institution: "Académie internationale du deuil périnatal" },
    { year: "2025", title: "Certification de Doula large spectre", institution: "École Quantik – Karine Langlois et Mélanie Chevarie" }
  ];

  const visionItems = [
    { icon: <Eye className="w-6 h-6" />, text: "Être pleinement présente et vous écouter avec bienveillance" },
    { icon: <Lightbulb className="w-6 h-6" />, text: "Vous permettre de faire des choix éclairés et de reprendre le pouvoir sur votre vie" },
    { icon: <Heart className="w-6 h-6" />, text: "Vous aider à cheminer en respectant votre personnalité et vos valeurs" },
    { icon: <Book className="w-6 h-6" />, text: "Me former en continu et m'appuyer sur des données probantes" }
  ];

  return (
    <Layout>
      <title>À Propos | Sophie Julien-Perriet - Doula & Yoga</title>
      <meta name="description" content="Découvrez le parcours de Sophie Julien-Perriet, Doula large spectre et professeure de yoga. Métissage des îles, sororité et formations." />

      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soleil/40 text-terre text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              À propos de moi
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Laissez-moi vous parler de moi
            </h1>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Héritage et quête d'identité
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Je m'appelle <strong className="text-terre">Sophie Julien-Perriet</strong> et je suis issue d'un « métissage des îles » au cœur de la Lorraine !
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Les multiples déménagements au cours de mon enfance et la rencontre avec le bouddhisme à l'adolescence, m'ont ouvert des horizons insoupçonnés et un goût pour la découverte de la richesse des autres cultures.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Constamment en quête d'identité et de racines, j'ai expérimenté la force de la sororité lors de mes années d'internat et j'ai compris que mes racines ne pouvaient se cantonner aux frontières d'un pays et à une période particulière de ma vie.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Je suis d'un naturel curieux, c'est ce qui explique ma soif d'apprentissage et mes formations en continu.
              </p>
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
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-soleil/30 rounded-full blur-xl -z-10" />
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-soleil/20 rounded-2xl text-center">
            <p className="font-display text-2xl text-terre italic">
              Être utile, transmettre et accompagner, voilà ce qui m'a toujours animée.
            </p>
          </div>
        </div>
      </section>

      {/* Life Journey */}
      <section className="section-padding bg-sable/30">
        <div className="container-wide mx-auto px-4 md:px-8">
          <SectionHeader
            title="Mon parcours de vie"
            alignment="left"
          />

          <div className="max-w-4xl">
            <p className="text-muted-foreground leading-relaxed mb-6">
              J'ai d'abord commencé ma carrière professionnelle en tant que <strong className="text-terre">professeure de lettres</strong>, matière que j'ai enseignée avec passion et joie pendant 14 ans.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Parallèlement à cela, je me suis formée en tant que <strong className="text-terre">professeure de yoga</strong>, discipline que j'enseigne depuis 2015.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Et pourtant, en 2016, j'ai vécu un burn-out car je ne me retrouvais plus alignée avec l'évolution de l'Éducation nationale. Ce fut une période douloureuse de remise en question mais qui s'est avérée très riche en enseignements. J'en suis ressortie plus forte et plus consciente de mes limites et de ces parties de moi qui avaient besoin de s'exprimer.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              C'est ainsi que j'ai développé mes accompagnements autour de la santé et du mieux-être après avoir suivi une <strong className="text-terre">formation en naturopathie en 2019</strong> et étoffé chaque année mes compétences en yoga.
            </p>
          </div>
        </div>
      </section>

      {/* Mother Life */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ma vie de mère
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Je suis également l'heureuse maman de 3 merveilleux enfants qui m'ont questionnée sur ma vision de la maternité et sur ses besoins spécifiques. Avec eux, j'en apprends tous les jours sur mon rôle de mère, sur mes valeurs fondamentales et sur moi-même.
            </p>
            <p className="text-xl font-display text-terre italic mb-8">
              C'est très riche et aussi très épuisant ! D'où la nécessité d'être soutenue !
            </p>
          </div>
        </div>
      </section>

      {/* Quantik Doula */}
      <section className="section-padding bg-nuit text-creme">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <GraduationCap className="w-16 h-16 text-soleil mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl text-creme mb-6">
              Quantik Doula
            </h2>
            <p className="text-creme/80 leading-relaxed mb-6">
              J'ai pu suivre avec bonheur, la merveilleuse formation de l'École Quantik auprès de Karine Langlois et Mélanie Chevarie et je suis officiellement une <strong className="text-soleil">Quantik Doula depuis 2025</strong>.
            </p>
            <p className="text-creme/80 leading-relaxed mb-6">
              Cette formation a confirmé ma vocation de Doula, dans ma posture d'accompagnante de la femme, en me donnant des outils très riches entre « science et sacré » pour vous soutenir avec plus de justesse encore.
            </p>
            <p className="text-creme/80 leading-relaxed">
              Je pense qu'en tant que mère et en tant que femme, nous avons besoin de nous soutenir car nous donnons beaucoup, tout le temps. C'est dans cette optique que j'organise des cercles de femmes, des rituels et des accompagnements sur les 3 grands portails de la maternité, de la ménopause et du deuil.
            </p>
          </div>
        </div>
      </section>

      {/* Formations Timeline */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <SectionHeader
            badge="Mes formations"
            title="Un parcours de formation continu"
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {formations.map((formation, i) => (
                <div key={i} className="flex gap-6 p-4 bg-card rounded-xl shadow-soft border border-border/50 hover:shadow-card transition-all duration-300">
                  <div className="flex-shrink-0 w-20 text-center">
                    <span className="inline-block px-3 py-1 bg-soleil/30 text-terre text-sm font-medium rounded-full">
                      {formation.year}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{formation.title}</h4>
                    <p className="text-sm text-muted-foreground">{formation.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-soleil/10">
        <div className="container-wide mx-auto px-4 md:px-8">
          <SectionHeader
            badge="Ma vision"
            title="Ce qui guide ma pratique"
          />

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {visionItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-soleil/30 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          <blockquote className="max-w-3xl mx-auto text-center p-8 bg-card rounded-2xl shadow-card border border-border/50">
            <p className="font-display text-2xl text-terre italic mb-4">
              « Je crois fondamentalement en la capacité de chaque femme à trouver les ressources en elle pour traverser les tempêtes et prendre son envol avec confiance »
            </p>
          </blockquote>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dans toutes mes pratiques, je suis authentique et généreuse car tout ce que j'entreprends, je le fais avec le cœur !
            </p>
            <p className="text-lg text-terre font-medium mb-8">
              Si mon énergie vous plaît, si cela résonne pour vous alors, nul doute que nous devons nous rencontrer pour cheminer un peu ensemble !
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Me contacter
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
