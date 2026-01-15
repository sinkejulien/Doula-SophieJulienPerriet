import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Users, Sparkles, Heart, Baby, Moon, CloudRain, Flame, ArrowRight } from "lucide-react";
import cercleFemmes from "@/assets/cercle-femmes-mains.webp";
import statueFemme from "@/assets/statue-femme-lotus.jpg";
import motherBlessing from "@/assets/mother-blessing.webp";

const CerclesRituelsPage = () => {
  const rituels = [
    {
      name: "Motherblessing",
      icon: <Baby className="w-6 h-6" />,
      description: "Un doux rituel pour célébrer la mère que vous vous apprêtez à devenir, pour honorer tout votre parcours de grossesse, pour recevoir les vœux et les enseignements de vos proches. C'est un beau moment de communion avec les personnes que vous aimez avec pour intention de vous donner la force et la sérénité nécessaires avant votre enfantement.",
      note: "C'est un moment intime où toute l'attention est tournée sur vous, ce qui le distingue d'une baby shower où l'attention est centrée sur le bébé."
    },
    {
      name: "Fermeture du vortex de la naissance",
      icon: <Sparkles className="w-6 h-6" />,
      description: "Après l'effervescence de la naissance, le corps et l'esprit peuvent encore être en mouvement, entre des émotions intenses ressenties, un corps qui se remet de l'accouchement et un nouveau quotidien qui prend forme. Ce rituel est une parenthèse douce, conçue pour ramener la jeune maman dans son corps, la reconnecter à sa féminité et prendre soin d'elle autant qu'elle prend soin de son nouveau-né.",
      note: "Il peut aussi s'adresser avec tendresse aux mamans qui vivent un deuil, afin qu'elles se sentent soutenues, écoutées et apaisées."
    },
    {
      name: "Rebozo",
      icon: <Heart className="w-6 h-6" />,
      description: "Ce rituel douceur, conçu pour accompagner les grands passages de la vie d'une femme, réunit massage enveloppant, huile nourrissante, temps de sudation, enveloppement et resserrage à l'aide du rebozo. Il ramène petit à petit la femme dans son corps, la reconnecte à son essence profonde, et offre un espace pour libérer émotions et traumas dans un cadre sûr et bienveillant.",
      note: "Vous sortirez de cette expérience avec une sensation d'enveloppement, de libération et de confiance renouvelée."
    },
    {
      name: "Dragon Wisdom",
      icon: <Moon className="w-6 h-6" />,
      description: "Le rituel Dragon Wisdom est une invitation à accueillir sereinement ce nouveau chapitre de votre vie – une célébration de votre sagesse acquise, de votre pouvoir et de la beauté qui s'élèvent avec le temps. Conçu pour être pleinement personnalisé, il s'adapte à vous, à votre culture et à vos besoins du moment.",
      note: "Il peut se vivre en solo ou entourée par vos proches, pour que vous vous sentiez soutenue et portée par une énergie de confiance dans ce passage à la ménopause."
    },
    {
      name: "Rituel de deuil",
      icon: <CloudRain className="w-6 h-6" />,
      description: "Le deuil est une expérience intime qui traverse le corps autant que l'esprit. Quand les mots manquent, le corps peut parler à travers des tensions, des respirations qui se font plus lourdes. En tant que doula et praticienne en exercice somatique, j'accompagne avec douceur et présence ceux et celles qui traversent une perte.",
      note: "C'est un accompagnement personnalisé, adaptable à votre histoire, à vos croyances et à votre rythme."
    },
    {
      name: "Cérémonie cacao",
      icon: <Flame className="w-6 h-6" />,
      description: "La cérémonie cacao offre un espace sacré et doux pour ralentir, écouter son corps et accueillir ce qui se présente. C'est un rituel d'auto-nourrissement et de soutien : le cacao agit comme un vecteur d'ouverture du cœur, de clarté intérieure et de connexion à soi et à son entourage.",
      note: "Je vous propose une approche respectueuse, sécurisée et transformative, adaptée à chaque femme."
    }
  ];

  return (
    <Layout>
      <title>Cercles de Femmes & Rituels | Sophie Julien-Perriet</title>
      <meta name="description" content="Cercles de femmes, Motherblessing, Rebozo, cérémonie cacao et rituels sacrés. Des moments de transformation et de connexion entre femmes." />

      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soleil/40 text-terre text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Cercles & Rituels
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Des moments de transformation et de connexion
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Parce que dans notre société nous avons perdu nos repères et nos savoirs liés aux grands passages de nos vies, j'avais à cœur de pouvoir proposer des cercles de femmes et des rituels qui sont de véritables opportunités de transformation et de connexion entre femmes.
            </p>
          </div>
        </div>
      </section>

      {/* Circles Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-rose flex items-center justify-center">
                  <Users className="w-7 h-7 text-terre" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground">
                  Cercles de femmes
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Un doux moment de sororité, une parole libérée, une écoute bienveillante et sans jugement, voilà l'ambiance d'un cercle de femmes. Ce sont des moments où le temps semble suspendu et où nous nous sentons en communion les unes avec les autres, œuvrant pour transcender nos peurs et nos difficultés et célébrant nos réussites.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Dans les cercles de femmes que je vous propose, vous découvrirez un espace « sacré » où l'intention première est que vous vous sentiez libre d'être qui vous êtes. Ici, vous pouvez vous libérer de votre masque social et vous dévoiler avec votre vulnérabilité, vos ressources, vos peurs, votre tristesse, votre joie, votre vécu, vos désirs et vos besoins.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Ce qui rend ces cercles si précieux, c'est que, tout en travaillant sur des aspects individuels, vous partagez votre histoire de vie, vos blessures et vos réussites. Ce processus contribue à une évolution collective, favorisant la guérison des blessures de chaque femme présente.
              </p>

              <div className="flex items-center gap-4 p-4 bg-soleil/20 rounded-xl mb-6">
                <div>
                  <p className="font-medium text-terre">Durée : 2h30</p>
                  <p className="font-medium text-terre">Tarif : 25€</p>
                </div>
              </div>
            </div>

            <div>
              <img src={cercleFemmes} alt="Cercle de femmes - mains unies" className="rounded-2xl shadow-card" />
            </div>
          </div>

          {/* Circle Types */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <h3 className="font-display text-xl text-foreground mb-4">Cercle de femmes</h3>
              <p className="text-muted-foreground text-sm">
                Ces cercles sont ouverts à toutes les personnes se reconnaissant dans l'identité de femmes, quel que soit leur âge, leur appartenance ethnique, leur milieu social… Nous y aborderons diverses thématiques en lien avec notre féminité pour l'honorer et la célébrer. Je vous partagerai également des méditations et des activités inspirantes.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <h3 className="font-display text-xl text-foreground mb-4">Cercle de futures et jeunes mamans</h3>
              <p className="text-muted-foreground text-sm">
                Ces cercles sont organisés spécialement pour les personnes enceintes, afin qu'elles trouvent un espace où exprimer leurs craintes, leurs émotions et célébrer les différentes phases de leur grossesse. Et pour les jeunes mamans pour qu'elles puissent déposer leur fatigue, raconter leur histoire d'accouchement, partager sans risque d'être jugées.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/contact">
              <Button variant="cta" size="lg">
                Rejoindre un cercle de femmes
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Rituals Introduction */}
      <section className="py-12 bg-terre text-creme">
        <div className="container-wide mx-auto px-4 md:px-8 text-center">
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Notre société moderne a globalement perdu les rites et rituels qui accompagnaient autrefois les grands passages de notre vie et qui leur donnaient du sens. C'est dans cette optique de réappropriation des savoirs que je vous propose ces différents rituels.
          </p>
        </div>
      </section>

      {/* Rituals Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <SectionHeader
            badge="Un portail - un rituel"
            title="Rituels de transformation"
            subtitle="Les rituels ont une véritable force de transformation. Cette puissance m'a plus d'une fois surprise et m'a confortée dans l'importance de proposer ces rituels aux personnes désireuses de ramener du sens dans leurs expériences de vie."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rituels.map((rituel, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-soleil/30 flex items-center justify-center mb-4">
                  {rituel.icon}
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{rituel.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{rituel.description}</p>
                <p className="text-sm text-terre italic">{rituel.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doula des rituels */}
      <section className="section-padding bg-soleil/10">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={statueFemme} alt="Statuette de femme en méditation" className="rounded-2xl shadow-card" />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Je suis une Doula des rituels et une tisseuse des histoires de vie
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Les rituels m'accompagnent dans mon quotidien : ils m'ancrent dans l'instant, ils me donnent de la force, ils me libèrent de certains poids, ils donnent du sens à chaque expérience vécue.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Pour chaque rituel, je vous proposerai un temps d'échange pour mieux vous connaître, pour préparer et personnaliser le rituel. Les maîtres-mots sont la douceur, la bienveillance et le respect de votre personne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <SectionHeader
            badge="Tarifs"
            title="Investissement pour votre rituel"
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 text-center">
              <h3 className="font-display text-2xl text-foreground mb-2">Rituel de votre choix</h3>
              <p className="text-sm text-muted-foreground mb-4">(hors Motherblessing)</p>
              <p className="text-4xl font-display text-terre mb-2">325€</p>
              <p className="text-sm text-muted-foreground">Durée d'environ 3h + temps d'échange</p>
            </div>

            <div className="bg-soleil/20 rounded-2xl p-8 shadow-card border-2 border-soleil text-center">
              <h3 className="font-display text-2xl text-foreground mb-2">Rituel avec 2 praticiennes</h3>
              <p className="text-sm text-muted-foreground mb-4">Fermeture du vortex ou Rebozo</p>
              <p className="text-4xl font-display text-terre mb-2">450€</p>
              <p className="text-sm text-muted-foreground">Pour une expérience plus enveloppante</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-6">
              Vous souhaitez organiser un Motherblessing ou un rituel sur-mesure pour un événement particulier ?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Organiser un rituel sur-mesure
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Me contacter pour un Motherblessing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Êtes-vous prête à exprimer toute votre puissance ?"
        subtitle="Les rituels sont des moments puissants pour honorer votre histoire et vous transformer."
        primaryButtonText="Réserver un appel découverte"
        primaryButtonLink="/contact"
        variant="featured"
      />
    </Layout>
  );
};

export default CerclesRituelsPage;
