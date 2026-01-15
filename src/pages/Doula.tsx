import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Baby, Sun, CloudRain, Heart, Check, Gift, Sparkles, ArrowRight } from "lucide-react";
import doulaAccompagnement from "@/assets/doula-accompagnement.webp";
import motherBlessing from "@/assets/mother-blessing.webp";
import bolChantant from "@/assets/bol-chantant.webp";

const DoulaPage = () => {
  return (
    <Layout>
      <title>Accompagnements Doula | Sophie Julien-Perriet</title>
      <meta name="description" content="Accompagnement de doula large spectre pour la maternité, la ménopause et le deuil. Soutien bienveillant, rituels et reconnexion à votre puissance." />

      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soleil/40 text-terre text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Doula Large Spectre
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Je vous accompagne dans les grandes étapes de votre vie de femme
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              J'ai toujours été passionnée par la sororité et les moyens de vivre notre vie de femme avec confiance, joie et douceur. En tant que Doula, je vous propose de vous accompagner afin de vous soutenir dans ces périodes de vulnérabilité en vous offrant une écoute bienveillante et sans jugement tout en vous permettant de retrouver votre plein pouvoir.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 bg-background border-b border-border/50">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Écoute bienveillante", desc: "Un soutien sans faille et sans jugement à travers une présence pleine et entière." },
              { title: "Authenticité", desc: "Un accompagnement dans la douceur et le respect de votre personne et de vos valeurs profondes." },
              { title: "Évolution personnelle", desc: "Je cheminerai à vos côtés pour des transformations durables sans culpabilité." },
              { title: "Empuissancement", desc: "Je vous transmettrai les connaissances pour puiser dans vos ressources intérieures." }
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maternity Section */}
      <section id="maternite" className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-soleil flex items-center justify-center">
                  <Baby className="w-7 h-7 text-terre" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground">
                  Accompagner la maternité
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Le temps de la maternité est une période de grands chamboulements et de nombreux questionnements. En effet, la grossesse, avec tous ses changements physiologiques et parfois ses douleurs, va entraîner une plus grande vulnérabilité car tout est inconnu, tout est différent d'une grossesse à une autre, et surtout c'est le temps qui précède un grand changement d'identité.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                On passe du statut de fille à celui de mère, du statut de mère d'un enfant à celui de mère de plusieurs enfants. Et cela s'accompagne de grands bouleversements psychologiques et émotionnels.
              </p>

              <blockquote className="border-l-4 border-soleil pl-6 py-2 mb-6 italic text-terre">
                « Les femmes ne deviennent pas mères en accouchant mais en étant maternées. »
                <footer className="text-sm text-muted-foreground mt-2 not-italic">— Dana Raphaël, anthropologue américaine</footer>
              </blockquote>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Elles doivent donc être soutenues dans leur quotidien, entendues dans leurs réflexions, comprises dans l'ambivalence qui accompagne la matrescence et rassurées dans leur capacité à incarner leur nouveau rôle de mère.
              </p>
            </div>

            <div className="lg:sticky lg:top-32">
              <img src={doulaAccompagnement} alt="Sophie accompagnant une femme enceinte" className="rounded-2xl shadow-card mb-6" />
              
              <div className="bg-soleil/20 rounded-2xl p-6">
                <h4 className="font-display text-lg text-foreground mb-4">Mon accompagnement est fait pour vous si :</h4>
                <ul className="space-y-3">
                  {[
                    "Vous vous sentez anxieuse par rapport à tous les bouleversements de votre grossesse",
                    "Vous avez peur de l'accouchement",
                    "Vous vous sentez seule et perdue avec votre nouveau-né",
                    "Vous vivez une dépression du post-partum",
                    "Vous souhaitez prévenir ces états et vivre au mieux votre grossesse"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-terre">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Doula toolkit */}
          <div className="mt-12 bg-card rounded-2xl p-8 shadow-soft border border-border/50">
            <h3 className="font-display text-2xl text-foreground mb-6 text-center">Ma trousse de Doula</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Discussions sur des sujets qui vous questionnent",
                "Prévention et informations basées sur des données probantes",
                "Références de livres utiles",
                "Yoga et exercices somatiques",
                "Chant prénatal",
                "Relaxation",
                "Ma petite herboristerie",
                "Massage et resserrage du bassin au rebozo",
                "Yonisteam",
                "Conseils naturopathiques",
                "Conseils sur l'alimentation",
                "Relais auprès de bébé"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Sparkles className="w-4 h-4 mt-0.5 text-soleil flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border/50">
              <h4 className="font-medium text-foreground mb-3">Rituels optionnels :</h4>
              <div className="flex flex-wrap gap-3">
                {["Motherblessing", "Rebozo", "Fermeture du vortex de la naissance"].map((ritual) => (
                  <span key={ritual} className="px-4 py-2 bg-rose/20 text-terre rounded-full text-sm">
                    {ritual}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Réserver un accompagnement maternité
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Gift className="w-4 h-4" />
              Disponible en présentiel, virtuel et carte cadeau
            </div>
          </div>
        </div>
      </section>

      {/* Menopause Section */}
      <section id="menopause" className="section-padding bg-sable/30">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 lg:sticky lg:top-32">
              <img src={bolChantant} alt="Bol chantant dans la nature" className="rounded-2xl shadow-card mb-6" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-rose flex items-center justify-center">
                  <Sun className="w-7 h-7 text-terre" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground">
                  Accueillir la ménopause
                </h2>
              </div>

              <p className="text-xl font-display text-terre mb-6 italic">
                Non, la ménopause n'est pas le début de la fin.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Il peut être questionnant et source d'anxiété parce que d'abord, la société a tendance à le stigmatiser et à le dévaloriser, et ensuite parce que, là encore, il s'agit d'un nouveau changement d'identité.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Mais c'est tout un univers de possibles qui s'offre à nous quand nous sommes affranchies de notre cycle reproducteur. Nous détenons les enseignements de notre ancienne vie cyclique pour aborder la vie avec plus de sagesse et en étant moins sous l'emprise des influences extérieures.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Il peut bien sûr y avoir une période transitoire challengeante, la pré-ménopause avec une certaine cacophonie hormonale et des symptômes parfois dérangeants. Il s'agit là encore d'un portail puissant plein d'inconnus.
              </p>

              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 mb-8">
                <h4 className="font-display text-lg text-foreground mb-4">Au programme de votre accompagnement personnalisé :</h4>
                <ul className="space-y-3">
                  {[
                    "Temps de discussion autour de vos problématiques du moment",
                    "Réflexions sur les grands aspects de la ménopause",
                    "Conseils et astuces pour résoudre les symptômes (bouffées de chaleur, irritabilité...)",
                    "Conseils naturopathiques",
                    "Yoga et exercices somatiques",
                    "Massage et rebozo",
                    "Ma petite herboristerie"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 mt-0.5 text-rose flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact">
                <Button variant="warm" size="lg">
                  Réserver un accompagnement ménopause
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grief Section */}
      <section id="deuil" className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-xl bg-terre/20 flex items-center justify-center">
                <CloudRain className="w-7 h-7 text-terre" />
              </div>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-8">
              Accompagnement du deuil
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 text-center">
                <h4 className="font-display text-lg text-foreground mb-3">Des ressources pour accompagner votre processus</h4>
                <p className="text-sm text-muted-foreground">
                  Je vous propose des techniques de relaxation, des pratiques de pleine conscience, ainsi que des conseils pour prendre soin de vous-même.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 text-center">
                <h4 className="font-display text-lg text-foreground mb-3">Des rituels pour tisser votre histoire</h4>
                <p className="text-sm text-muted-foreground">
                  Des rituels personnalisés pour honorer la mémoire de votre être cher, faire la paix avec la perte, et trouver un sens à votre deuil.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 text-center">
                <h4 className="font-display text-lg text-foreground mb-3">Une présence douce pour un chemin de résilience</h4>
                <p className="text-sm text-muted-foreground">
                  Mon accompagnement vise à vous aider à retrouver votre force intérieure, à honorer vos émotions, à avancer à votre rythme.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Être accompagnée dans un processus de deuil
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Personalization */}
      <section className="py-12 bg-soleil/20">
        <div className="container-wide mx-auto px-4 md:px-8 text-center">
          <p className="text-lg text-terre max-w-2xl mx-auto">
            <strong>Chaque accompagnement est totalement personnalisé</strong> pour répondre au mieux à vos besoins du moment. Tous mes accompagnements sont disponibles en présentiel, en virtuel et en carte cadeau.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Êtes-vous prête à manifester votre puissance ?"
        subtitle="Réservez votre appel découverte de 20 minutes gratuit pour discuter de vos besoins."
        primaryButtonText="Réserver un appel découverte"
        primaryButtonLink="/contact"
        variant="featured"
      />
    </Layout>
  );
};

export default DoulaPage;
