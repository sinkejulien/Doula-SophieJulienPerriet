import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const yogaFaqs = [
    {
      question: "Puis-je faire du yoga si je ne suis pas souple ?",
      answer: "Pour faire du yoga, il n'est absolument pas nécessaire d'être souple, ni musclé, ni d'avoir l'habitude de pratiquer une activité physique. C'est la pratique du yoga qui va, au fil du temps, assouplir et renforcer votre corps grâce à son travail sur des postures isométriques. De plus, l'assouplissement du corps a aussi une dimension psychique et émotionnelle : quand on accepte de lâcher certaines choses dans le mental, le corps aussi accepte de relâcher certaines résistances. En ce cela que l'on peut expérimenter la connexion corps-cœur-esprit."
    },
    {
      question: "Quels sont les bienfaits du yoga ?",
      answer: "La pratique du yoga offre une multitude de bénéfices, en particulier pour la santé des femmes. En intégrant des postures de yoga doux ou dynamique dans votre routine, vous favorisez non seulement un meilleur équilibre hormonal, mais aussi une meilleure circulation sanguine et une réduction du stress. Le yoga permet de cultiver la conscience corporelle, essentielle pour écouter son corps et répondre à ses besoins. Grâce à des techniques de respiration consciente et de relaxation profonde, vous apprendrez à gérer vos émotions, à renforcer votre force intérieure et à développer votre souplesse, tant physique qu'émotionnelle. En vous reconnectant à votre cycle féminin, vous serez en mesure d'accepter les différentes phases de votre vie avec sérénité et confiance."
    },
    {
      question: "Pourquoi choisir un cours de yoga particulier ?",
      answer: "Choisir un cours particulier de yoga présente de nombreux avantages. Tout d'abord, cela vous permet d'avoir un accompagnement sur-mesure, adapté à vos besoins et objectifs spécifiques. Contrairement aux cours collectifs, où l'attention est partagée entre plusieurs participants, les cours individuels vous offrent une attention personnalisée et un suivi régulier. Cela vous permet de progresser à votre rythme, d'explorer en profondeur les postures qui vous conviennent le mieux et de bénéficier de conseils adaptés à votre corps et à votre état d'esprit. De plus, l'intimité d'un cours particulier favorise l'expression de soi et l'acceptation de soi, créant ainsi un environnement propice à la confiance et à l'épanouissement."
    },
    {
      question: "Quel est l'intérêt de pratiquer le yoga après l'accouchement ?",
      answer: "En post-partum, le yoga postnatal permet de retrouver son corps en douceur tout en renforçant le lien avec son bébé. Cette période demande une attention particulière à la récupération physique et émotionnelle, et le yoga peut être un outil précieux pour favoriser la souplesse et la force, tout en permettant une relaxation profonde. Après l'accouchement, la pratique du yoga a pour premier objectif de réaligner la jeune maman dans son corps, de lui permettre de se retrouver elle-même dans son nouveau statut, de lui redonner confiance en sa capacité à être la mère qu'elle désire être, en ses ressources intérieures pour prendre les meilleures décisions pour elle et son bébé. Ce n'est que bien plus tard (pas avant 9 mois après l'accouchement) que le yoga pourrait être considéré comme un outil de remodelage du corps. Il y a un temps pour tout !"
    }
  ];

  const doulaFaqs = [
    {
      question: "Comment se déroule un accompagnement de doula ?",
      answer: "Chaque accompagnement est totalement personnalisé pour répondre au mieux à vos besoins du moment. Nous commençons par un appel découverte de 20 minutes gratuit pour faire connaissance et voir si nos personnalités s'accordent bien. Ensuite, selon vos besoins, nous définissons ensemble le contenu de l'accompagnement : discussions, yoga, rituels, conseils naturopathiques, etc."
    },
    {
      question: "Les accompagnements sont-ils disponibles en ligne ?",
      answer: "Oui, tous mes accompagnements sont disponibles en présentiel et en virtuel. Vous pouvez choisir le mode qui vous convient le mieux selon votre situation géographique ou vos préférences personnelles."
    },
    {
      question: "Peut-on offrir un accompagnement en cadeau ?",
      answer: "Absolument ! Tous mes accompagnements sont disponibles en carte cadeau, que ce soit pour une liste de naissance, un mariage, ou simplement pour offrir un moment de bien-être à une personne qui vous est chère. C'est un cadeau unique et personnalisé."
    },
    {
      question: "Quelle est la durée d'un rituel ?",
      answer: "Un rituel dure environ 3 heures, avec un temps d'échange en amont pour préparer et personnaliser le rituel, puis un temps d'échange après pour discuter de votre expérience et de votre ressenti."
    },
    {
      question: "Puis-je être accompagnée par deux praticiennes pour un rituel ?",
      answer: "Oui, c'est possible pour le rituel de fermeture du vortex de la naissance et le rituel Rebozo. Cela permet une expérience encore plus enveloppante et soutenante. Le tarif est alors de 450€."
    }
  ];

  return (
    <Layout>
      <title>Questions Fréquentes | Sophie Julien-Perriet</title>
      <meta name="description" content="Réponses aux questions fréquentes sur le yoga, les accompagnements doula, les rituels et les cercles de femmes." />

      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soleil/40 text-terre text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Questions fréquentes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Retrouvez ici les réponses aux questions les plus courantes sur mes accompagnements.
            </p>
          </div>
        </div>
      </section>

      {/* Yoga FAQ */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <SectionHeader
            badge="Yoga"
            title="Questions sur le yoga"
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {yogaFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`yoga-${i}`}
                  className="bg-card rounded-xl px-6 border border-border/50 shadow-soft"
                >
                  <AccordionTrigger className="text-left font-display text-lg text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Doula FAQ */}
      <section className="section-padding bg-sable/20">
        <div className="container-wide mx-auto px-4 md:px-8">
          <SectionHeader
            badge="Accompagnements"
            title="Questions sur les accompagnements et rituels"
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {doulaFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`doula-${i}`}
                  className="bg-card rounded-xl px-6 border border-border/50 shadow-soft"
                >
                  <AccordionTrigger className="text-left font-display text-lg text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
        title="Vous avez d'autres questions ?"
        subtitle="N'hésitez pas à me contacter, je serai ravie de vous répondre."
        primaryButtonText="Me contacter"
        primaryButtonLink="/contact"
        variant="warm"
      />
    </Layout>
  );
};

export default FAQPage;
