import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Mail, Phone, MapPin, Gift, Calendar, Send } from "lucide-react";

// IMPORTANT: Remplacez cette URL par votre lien Calendly personnel
const CALENDLY_URL = "https://calendly.com/sophiejulien";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    wantsCall: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      wantsCall: false
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      <title>Contact | Sophie Julien-Perriet - Doula & Yoga</title>
      <meta name="description" content="Contactez Sophie pour réserver un accompagnement, un rituel ou un appel découverte. Disponible en présentiel et en ligne." />

      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soleil/40 text-terre text-sm font-medium mb-6">
              <Mail className="w-4 h-4" />
              Contact
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Contactez-moi
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Si vous souhaitez réserver une séance, prendre un accompagnement ou organiser un rituel sur-mesure, ou pour tout autre renseignement.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl text-foreground mb-6">
                Informations pratiques
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-soleil/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-terre" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <a href="mailto:contact@sophie-doula.fr" className="text-muted-foreground hover:text-terre transition-colors">
                      sophie@sojyoti.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-soleil/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-terre" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Localisation</h4>
                    <p className="text-muted-foreground">
                      1 chemin des bombes URY
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-soleil/30 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-terre" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Appel découverte</h4>
                    <p className="text-muted-foreground">
                      20 minutes gratuites pour faire connaissance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose/30 flex items-center justify-center flex-shrink-0">
                    <Gift className="w-5 h-5 text-terre" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Cartes cadeaux</h4>
                    <p className="text-muted-foreground">
                      Offrez un accompagnement à une personne qui vous est chère
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="mt-10 p-6 bg-soleil/20 rounded-2xl">
                <p className="font-display text-lg text-terre italic leading-relaxed">
                  "Ma mission est de soutenir les femmes dans les grands portails de leur vie en les aidant à se reconnecter à leur puissance, leur paix intérieure et leur joie dans la douceur"
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <h2 className="font-display text-2xl text-foreground mb-6">
                  Envoyez-moi un message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Votre prénom"
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.com"
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="06 12 34 56 78"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Accompagnement maternité, Rituel Rebozo, Yoga prénatal..."
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Décrivez vos besoins, vos questions ou ce qui vous amène vers moi..."
                      rows={6}
                      className="bg-background resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="wantsCall"
                      checked={formData.wantsCall}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, wantsCall: checked as boolean }))
                      }
                    />
                    <Label htmlFor="wantsCall" className="text-sm text-muted-foreground cursor-pointer">
                      Je souhaite réserver un appel découverte de 20 minutes gratuit
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        Envoyer mon message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="section-padding bg-soleil/10">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nuit text-creme text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Appel découverte
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Réservez votre appel découverte de 20 minutes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ce premier entretien sera l'occasion de voir si nos personnalités s'accordent bien et si nous sommes à même de cheminer ensemble.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-card overflow-hidden">
            <CalendlyEmbed url={CALENDLY_URL} className="rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Closing message */}
      <section className="py-16 bg-nuit text-creme text-center">
        <div className="container-wide mx-auto px-4 md:px-8">
          <p className="font-display text-2xl md:text-3xl max-w-2xl mx-auto">
            En attendant, prenez bien soin de vous !
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
