import WorkDetails from "./WorkDetails.tsx";
import TechImage from "./TechImage.tsx";
import icons from "./icons.ts";
import { motion } from "motion/react";

const TeamsoftDetails = () => {
  return (
    <WorkDetails title="Teamsoft">
      <p>
        As a software engineer, designed and developed web sites and web services and in a
        Linux environment, utilizing the open source technologies including JBoss, EJB, Struts,
        Spring, Hibernate, JAX-WS, LDAP, SAML, Maven, JUnit, and Subversion. Served as an
        important resource for enhancing and developing new features for the internal CRM web
        site. Mentored less experienced developers.
      </p>

      <motion.div
        style={{marginTop: '30px'}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: .75}}
      >
        <TechImage src={icons.java.icon} name={icons.java.name}/>
        <TechImage src={icons.spring.icon} name={icons.spring.name}/>
        <TechImage src={icons.hibernate.icon} name={icons.hibernate.name}/>
        <TechImage src={icons.struts.icon} name={icons.struts.name}/>
        <TechImage src={icons.junit.icon} name={icons.junit.name}/>
      </motion.div>
    </WorkDetails>
  )
}

export default TeamsoftDetails;