import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import { Leaf, Heart, Check, ArrowRight, Baby, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import yogaPrenatalGroupe from "@/assets/yoga-prenatal-groupe.webp";
import sophieYoga from "@/assets/sophie-yoga-nature.webp";

const YogaPage = () => {
  const pillars = [
    "La respiration juste",
    "Les postures justes", 
    "La relaxation",
    "L'alimentation",
    "La méditation et la pensée positive"
  ];

  const formules = [
    {
      name: "Séance découverte",
      duration: "2h",
      price: "115€",
      description: "Séance idéale pour découvrir le yoga de façon générale ou pour l'aborder à travers le prisme d'une problématique particulière.",
      features: ["1 séance personnalisée", "1 routine construite ensemble pour votre pratique personnelle"]
    },
    {
      name: "Formule initiation",
      duration: "1 mois",
      price: "365€",
      description: "Un mois pour explorer le yoga et approfondir votre conscience corporelle avec votre objectif particulier.",
      features: ["4 séances individuelles et personnalisées", "Accès à une plateforme de ressources en ligne"],
      featured: true
    },
    {
      name: "Formule exploration",
      duration: "4 mois",
      price: "785€",
      description: "Un parcours de 4 mois de yoga pour aller plus loin dans votre pratique, pour observer concrètement votre cheminement profond.",
      features: ["12 séances individuelles et personnalisées", "Accès à une plateforme de ressources en ligne"]
    }
  ];

  const faqs = [
    {
      question: "Puis-je faire du yoga si je ne suis pas souple ?",
      answer: "Pour faire du yoga, il n'est absolument pas nécessaire d'être souple, ni musclé, ni d'avoir l'habitude de pratiquer une activité physique. C'est la pratique du yoga qui va, au fil du temps, assouplir et renforcer votre corps grâce à son travail sur des postures isométriques. De plus, l'assouplissement du corps a aussi une dimension psychique et émotionnelle : quand on accepte de lâcher certaines choses dans le mental, le corps aussi accepte de relâcher certaines résistances."
    },
    {
      question: "Quels sont les bienfaits du yoga ?",
      answer: "La pratique du yoga offre une multitude de bénéfices, en particulier pour la santé des femmes. En intégrant des postures de yoga doux ou dynamique dans votre routine, vous favorisez non seulement un meilleur équilibre hormonal, mais aussi une meilleure circulation sanguine et une réduction du stress. Le yoga permet de cultiver la conscience corporelle, essentielle pour écouter son corps et répondre à ses besoins."
    },
    {
      question: "Pourquoi choisir un cours de yoga particulier ?",
      answer: "Choisir un cours particulier de yoga présente de nombreux avantages. Tout d'abord, cela vous permet d'avoir un accompagnement sur-mesure, adapté à vos besoins et objectifs spécifiques. Contrairement aux cours collectifs, les cours individuels vous offrent une attention personnalisée et un suivi régulier. Cela vous permet de progresser à votre rythme et de bénéficier de conseils adaptés à votre corps et à votre état d'esprit."
    },
    {
      question: "Quel est l'intérêt de pratiquer le yoga après l'accouchement ?",
      answer: "En post-partum, le yoga postnatal permet de retrouver son corps en douceur tout en renforçant le lien avec son bébé. Après l'accouchement, la pratique du yoga a pour premier objectif de réaligner la jeune maman dans son corps, de lui permettre de se retrouver elle-même dans son nouveau statut, de lui redonner confiance en sa capacité à être la mère qu'elle désire être. Ce n'est que bien plus tard (pas avant 9 mois après l'accouchement) que le yoga pourrait être considéré comme un outil de remodelage du corps."
    }
  ];

  return (
    <Layout>
      <title>Yoga au Féminin | Sophie Julien-Perriet</title>
      <meta name="description" content="Yoga au féminin, Dragon's Wisdom, yoga prénatal et postnatal. Accompagnement personnalisé pour vous reconnecter à vous-même et à votre corps." />

      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soleil/40 text-terre text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Yoga au Féminin
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Reconnectez-vous en profondeur à vous-même
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              On a souvent tendance à réduire le yoga au simple fait de dérouler son tapis et d'exécuter des exercices respiratoires et diverses postures. Mais en réalité, le yoga est bien plus qu'une pratique physique. C'est une philosophie de vie qui impacte diverses dimensions de notre être.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Pillars */}
      <section className="py-12 bg-background border-b border-border/50">
        <div className="container-wide mx-auto px-4 md:px-8">
          <h3 className="font-display text-xl text-center text-foreground mb-6">Les 5 piliers du yoga</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {pillars.map((pillar, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-soleil/20 rounded-full">
                <Leaf className="w-4 h-4 text-terre" />
                <span className="text-sm text-terre font-medium">{pillar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dragon's Wisdom */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-rose/30 text-terre text-sm font-medium mb-4">
                Dragon's Wisdom
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Yoga au féminin
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dans les accompagnements que je vous propose, spécifiquement adaptés aux besoins des femmes, je vous aiderai à vous recentrer sur vous-même et à retrouver l'équilibre que nos rythmes de vie effrénés mettent à mal.
              </p>

              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 mb-6">
                <h4 className="font-display text-lg text-foreground mb-4">Au programme :</h4>
                <ul className="space-y-3">
                  {[
                    "Séances de yoga personnalisées",
                    "Méditation guidée",
                    "Conseils sur la santé de la femme",
                    "Capsules spécifiques pour des situations spécifiques",
                    "Ma petite herboristerie"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Sparkles className="w-4 h-4 mt-0.5 text-soleil flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-muted-foreground text-sm">
                Mon approche se veut bienveillante et respectueuse de votre rythme. Que vous choisissez des séances en présentiel ou en ligne, je vous offre un espace où vous pourrez reconnecter votre corps et votre esprit. Ensemble, nous travaillerons sur vos problématiques personnelles, qu'il s'agisse de stress, d'ancrage, d'équilibre ou d'autres objectifs.
              </p>
            </div>

            <div className="bg-soleil/10 rounded-3xl p-8">
              <TestimonialCard
                quote="Entre exigence et bienveillance, Sophie sait accompagner ses élèves pour les faire progresser à leur rythme, en s'adaptant aux spécificités de chacun. Ses connaissances précises sur le yoga, l'anatomie, la nutrition, rendent ses cours très complets. La méditation finale est très bien menée."
                context="Cours de yoga"
                variant="featured"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prenatal & Postnatal */}
      <section className="section-padding bg-sable/30">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <img src={yogaPrenatalGroupe} alt="Cours de yoga prénatal en groupe" className="rounded-2xl shadow-card" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-rose flex items-center justify-center">
                  <Baby className="w-7 h-7 text-terre" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground">
                  Yoga prénatal et postnatal
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                La pratique du yoga revêt également une importance particulière pendant la grossesse et en post-partum. Le yoga prénatal est conçu pour accompagner les femmes tout au long de cette période unique, en favorisant l'ancrage et l'équilibre, tout en préparant le corps à l'accouchement.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Grâce à des postures adaptées, vous développerez une connexion corps-esprit qui vous aidera à gérer les changements physiques et émotionnels. Ce sera également l'occasion d'entrer en contact avec votre bébé et de commencer à tisser ce lien qui vous unira tout au long de votre vie.
              </p>

              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
                <h4 className="font-display text-lg text-foreground mb-4">Quels sont les bénéfices du yoga prénatal ?</h4>
                <ul className="space-y-3">
                  {[
                    "Assouplissement de votre corps pour faciliter vos mouvements du quotidien",
                    "Amélioration de votre posture pour limiter les douleurs dans le dos",
                    "Meilleure mobilité de votre bassin pour faciliter l'accouchement",
                    "Prise de conscience de votre périnée pour éviter les déchirures",
                    "Meilleure conscience de sa respiration pour gagner en énergie",
                    "Détente accrue au rythme des relaxations guidées"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 mt-0.5 text-rose flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 max-w-3xl mx-auto">
            <TestimonialCard
              quote="Sophie a une grande connaissance du corps et du yoga. Pour le Yoga prénatal adapté au corps en transformation de la femme enceinte, elle donne plein d'outils essentiels en s'adaptant aux stades de la grossesse et état du moment, qui soulagent, entretiennent à la fois corps et esprit, et préparent à l'accouchement."
              context="Yoga prénatal"
              variant="featured"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <SectionHeader
            badge="Mes formules"
            title="Accompagnements yoga personnalisés"
            subtitle="Mes accompagnements sont une invitation à explorer votre bien-être féminin, à cultiver votre force intérieure et à créer un espace d'écoute et d'acceptation de soi."
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {formules.map((formule, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  formule.featured
                    ? "bg-soleil/20 border-2 border-soleil shadow-card scale-105"
                    : "bg-card border border-border/50 shadow-soft hover:shadow-card"
                }`}
              >
                {formule.featured && (
                  <span className="inline-block px-3 py-1 bg-soleil text-terre text-xs font-medium rounded-full mb-4">
                    Recommandé
                  </span>
                )}
                <h3 className="font-display text-2xl text-foreground mb-2">{formule.name}</h3>
                <p className="text-3xl font-display text-terre mb-1">{formule.price}</p>
                <p className="text-sm text-muted-foreground mb-4">{formule.duration}</p>
                <p className="text-sm text-muted-foreground mb-6">{formule.description}</p>
                <ul className="space-y-2 mb-6">
                  {formule.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 mt-0.5 text-soleil flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block">
                  <Button variant={formule.featured ? "hero" : "outline"} className="w-full">
                    Réserver
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-sable/20">
        <div className="container-wide mx-auto px-4 md:px-8">
          <SectionHeader
            badge="Questions récurrentes"
            title="Tout savoir sur le yoga"
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-xl px-6 border border-border/50 shadow-soft"
                >
                  <AccordionTrigger className="text-left font-display text-lg text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Prête à explorer votre bien-être féminin ?"
        subtitle="Je vous propose un appel découverte de 20 minutes pour discuter de vos objectifs et de la problématique sur laquelle vous souhaitez travailler."
        primaryButtonText="Réserver une séance de yoga"
        primaryButtonLink="/contact"
        secondaryButtonText="Appel découverte gratuit"
        secondaryButtonLink="/contact"
        variant="warm"
      />
    </Layout>
  );
};

export default YogaPage;
