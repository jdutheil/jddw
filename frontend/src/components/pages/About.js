import './About.scss'

const About = () => {
  return (
    <section className='home-section home-section--about'>
      <h2 className='home-section__title'>À propos</h2>

      <p className='home-section__text'>
        Diplômé d'une grande école d'ingénieur en 2014, je pratique le
        développement web (frontend et backend) depuis une dizaine d'années.
        J'ai pu acquérir une bonne expérience, en effectuant de nombreuses
        missions variées (en régie, au forfait, ... / intégration, développement
        complet, mais également interventions en tant que formateur).
      </p>

      <p className='home-section__text'>
        À titre personnel, j'ai également travaillé sur l'optimisation SEO et
        référencement naturel, avec de bons résultats. Je suis donc très
        sensible à ces problématiques.
      </p>

      <p className='home-section__text'>
        Je peux intervenir sur tous les aspects du développement web, et vous
        accompagner au mieux dans la réalisation de votre projet.
      </p>

      <p className='home-section__text'>
        Technologies Frontend : HTML5 / CSS3 / Javascript / jQuery / framework
        Bootstrap / ReactJS. <br />
        Technologies Backend : Symfony / NodeJs
      </p>

      <p className='home-section__text'>
        N'hésitez pas à me contacter afin de discuter.
      </p>
    </section>
  )
}

export default About
