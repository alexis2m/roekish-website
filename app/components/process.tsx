import ProcessCard from '@/components/processCard';

export default function Process() {
  return (
    <div className="flex flex-col mt-10 justify-center text-center items-center">
      <h2 className="text-2xl font-bold text-center">
        Rejoindre la prochaine session
      </h2>
      <div className="flex items-center sm:w-1/2">
        <p className="text-center">
          Notre processus de sélection et développement est simple, direct et
          permet un match optimal entre votre projet et nos qualités
        </p>
      </div>
      <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 w-full mt-8">
        <ProcessCard
          title={'Questionnaire'}
          description={
            "Remplissez le questionnaire et recevez une réponse d'éligibilité sous 24h"
          }
          contentText={
            "Prenez 5 minutes pour répondre à nos quelques questions nous permettrons d'évaluer l'adéquation entre votre projet et notre expertise. Nous vous répondrons sous 24h avec plus d'informations sur les étapes suivantes."
          }
          buttonLink={'https://tally.so/r/nW5R4k'}
          buttonText={'Passer le questionnaire'}
          target={'_blank'}
        />
        <ProcessCard
          title={'Places disponibles'}
          description={
            'Attribution du premier slot de développement disponible pour votre projet: mise en place'
          }
          contentText={
            "Les slots de développement nous permettent d'assurer à tout moment une disponibilité maximale, un développement rapide et une bonne communication. La liste des slots est mise-à-jour tous les jours."
          }
          buttonLink={'#openseats'}
          buttonText={'Voir la liste'}
          target={''}
        />
        <ProcessCard
          title={'Développement'}
          description={
            'Développement du projet avec un lien permanent du responsable projet'
          }
          contentText={
            "A l'aide de notre expertise, et notre logiciel de gestion de projet, nous développons votre projet en suivant un processus agile. Vous avez un lien permanent avec le responsable projet pour suivre l'avancement."
          }
          buttonLink={'https://tally.so/r/nW5R4k'}
          buttonText={'Vérifier mon éligibilité'}
          target={'_blank'}
        />
        <ProcessCard
          title={'Maintenance'}
          description={
            'Maintenance de votre projet et suivi de l’évolution des besoins'
          }
          contentText={
            "Notre équipe continue d'assurer la maintenance technique de votre projet. Nous protégeons votre site, et le mettons-à-jour selon vos besoins et ceux de vos utilisateurs via une stratégie itérative."
          }
          buttonLink={'https://cal.com/alexismaison/discutons-de-votre-projet'}
          buttonText={'Prendre rendez-vous'}
          target={'_blank'}
        />
      </div>
    </div>
  );
}
