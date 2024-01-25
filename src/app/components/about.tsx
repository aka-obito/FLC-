import '../globals.css';
import Image from 'next/image';
import image from '../../../public/assets/Logo/flc-logo.png';


export default function About() {
    return (
      <>
        <section>
          <h2 className="sectionTitle">
            <b>About</b>
          </h2>
        </section>
        <section className="about-section">
          <div className="FLC">
            <Image
              src={image} alt="Foreign Language Club Logo" height={1350} width={1400} />
          </div>
          <div className="container">
            <h2>
              <b>Foreign Language Club</b>
            </h2>
            <p>
              Foreign Language Club, MITAOE is a vibrant and engaging community
              that brings together students with a shared passion for languages
              and diverse cultures from around the world which started in the
              year 2021. Club was founded by Shubham Shikhare (B. Tech
              Mechanical) along with Neha Chitrakar (B.Tech Mechanical) and
              Prof. Surendra Barewar ( Assistant Professor, School of mechanical
              engineering). One of the main objectives of the Foreign Language
              Club is to foster linguistic proficiency among its members. The
              club offers a wide range of activities to cater to different
              proficiency levels, including language workshops, conversation
              practice sessions, and language games. These activities not only
              provide valuable opportunities for language practice but also
              create a supportive and inclusive environment where students can
              learn from one another. Beyond language learning, the Foreign
              Language Club is dedicated to promoting cultural awareness and
              understanding. It provides a platform for students to develop
              their language skills, engage in cross-cultural activities, and
              expand their horizons.
            </p>

            <p>
              The foreign language club aims to create awareness among the
              students about foreign languages which will help them in their
              careers and raise opportunities for learning foreign languages. It
              also helps students to learn about new cultures and have fun We
              aim to connect like-minded people and make everyone bilingual. We
              work towards building the same by organizing various events such
              as foreign language workshops, quizzes, and culture throughout the
              year.
            </p>

          </div>
        </section>
      </>
    );
}