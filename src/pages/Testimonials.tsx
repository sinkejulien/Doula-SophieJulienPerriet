import { Layout } from "@/components/Layout";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Star } from "lucide-react";

const TestimonialsPage = () => {
  const testimonials = [
    {
      quote: "J'ai eu l'occasion de participer à une semaine de jeûne et détox organisée par Sophie. Cela a été l'occasion de repousser un peu mes limites en toute sérénité et bienveillance au sein d'un petit groupe de femmes très différentes les unes des autres. Grâce à Sophie, nous avons appris à mieux connaître notre corps et à nous reconnecter à nous-mêmes par le biais de séances de Yoga et de courtes méditations. Ça a été une super semaine, pleine de doutes, de cohésion et de rire. Et pour clôturer cette semaine déjà mémorable, nous avons eu droit à une séance de rebozo: du bonheur en barre dans la régression, et une cérémonie Cacao qui m'a toute retournée émotionnellement! Sophie est une prof de Yoga, une naturopathe et une « initiatrice » de Rebozo extra!! Je la recommande +++.",
      context: "Jeûne & Détox, Yoga, Rebozo, Cérémonie Cacao",
      featured: true
    },
    {
      quote: "J'ai débuté le yoga avec Sophie il y a deux ans. Sophie est particulièrement bienveillante et sait mettre à l'aise et en confiance ses élèves. Elle est à l'écoute pour que chacun s'épanouisse dans sa pratique. Elle met à profit ses connaissances pour le bien-être de ses élèves. J'ai eu la chance d'être initiée au rebozo lors d'un cours de yoga et cette pratique m'a permis de découvrir de nouvelles sensations intenses et libératrices. Il me tarde de participer à d'autres ateliers ! Je conseille vivement les cours et ateliers de Sophie à toutes les personnes en quête de bien-être et de reconnexion.",
      context: "Yoga & Rebozo"
    },
    {
      quote: "Merci à toi Sophie pour cette cérémonie cacao que j'appréhendais un peu, mais j'en suis sortie forte et sereine, je ne m'attendais pas à ce résultat: les bienfaits sont encore là pourvu que ça dure 🙂 je recommande donc toutes les activités que Sophie propose car elle a ce don d'envelopper, d'écouter et de conseiller toujours dans la bienveillance. Je conseille vivement.",
      context: "Cérémonie Cacao"
    },
    {
      quote: "Entre exigence et bienveillance, Sophie sait accompagner ses élèves pour les faire progresser à leur rythme, en s'adaptant aux spécificités de chacun. Ses connaissances précises sur le yoga (postures, techniques de respiration, chakras), l'anatomie, la nutrition, rendent ses cours très complets. La méditation finale est très bien menée. Sa gentillesse et sa bonne humeur sont fort appréciées. On ressort des cours de yoga de Sophie détendu, apaisé et énergisé.",
      context: "Cours de yoga"
    },
    {
      quote: "Sophie a une grande connaissance du corps et du yoga. Elle sait emmener sur le chemin de la relaxation, de la proprioception, de la tonification, de la détente, ou bien encore de l'imagination. On en sort équilibré, apaisé, ressourcé. Pour le Yoga prénatal adapté au corps en transformation et alourdi de la femme enceinte, elle donne plein d'outils essentiels en s'adaptant aux stades de la grossesse et état du moment, qui soulagent, entretiennent à la fois corps et esprit, et préparent à l'accouchement. Postures, mouvements et exercices, détente, travail sur chaise ou ballon ou au sol, ses conseils personnalisés au sein des séances de pratique collective font d'elles une grande pédagogue Yogi.",
      context: "Yoga prénatal",
      featured: true
    }
  ];

  return (
    <Layout>
      <title>Témoignages | Sophie Julien-Perriet</title>
      <meta name="description" content="Découvrez les témoignages des femmes accompagnées par Sophie en yoga, rituels, cercles de femmes et accompagnement doula." />

      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soleil/40 text-terre text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Témoignages
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Ce que disent les femmes que j'accompagne
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ces témoignages reflètent les expériences vécues lors de mes accompagnements. Chaque histoire est unique, chaque transformation est personnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                quote={testimonial.quote}
                context={testimonial.context}
                variant={testimonial.featured ? "featured" : "default"}
                className={testimonial.featured ? "md:col-span-2 lg:col-span-1" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="À votre tour d'être accompagnée"
        subtitle="Chaque femme mérite un accompagnement bienveillant et personnalisé. Réservez votre appel découverte pour discuter de vos besoins."
        primaryButtonText="Réserver un appel découverte"
        primaryButtonLink="/contact"
        variant="warm"
      />
    </Layout>
  );
};

export default TestimonialsPage;
