import {Title, WorkDetails} from "./WorkDetails.tsx";
import TechImage, {containerVariants} from "./TechImage.tsx";
import icons from "./icons.ts";
import {motion} from "motion/react";

const AcquiaTitle = () => {
  return (
    <>
      <Title style={{display: 'inline', verticalAlign: "baseline"}}>Acquia</Title>

      <span style={{marginLeft: 10}}>
        (formerly Widen)
      </span>
    </>
  )
}

const AcquiaDetails = () => {
  return (
    <WorkDetails title={<AcquiaTitle/>}>
      <p>
        Full-stack developer on the flagship SaaS application as part of an agile, highly collaborative team. Involved
        in new feature development from ideation to development to implementation. Explore new technologies to
        incorporate into the software's continuous evolution. Mentored new developers and participated in the hiring
        process. 3 time hackathon winner. Revamped
        <a href="https://www.thebodgery.org"
          style={{color: 'black', textDecoration: 'underline'}}
          target="_blank">thebodgery.org</a>
        in a Design Like Mad event.
      </p>

      <motion.div
        style={{marginTop: '30px'}}
        variants={containerVariants}
        initial="out"
        animate="in"
      >
        <TechImage src={icons.react.icon} name={icons.react.name}/>
        <TechImage src={icons.angular.icon} name={icons.angular.name}/>
        <TechImage src={icons.jest.icon} name={icons.jest.name}/>
        <TechImage src={icons.java.icon} name={icons.java.name}/>
        <TechImage src={icons.hibernate.icon} name={icons.hibernate.name}/>
        <TechImage src={icons.spring.icon} name={icons.spring.name}/>
        <TechImage src={icons.elasticsearch.icon} name={icons.elasticsearch.name}/>
        <TechImage src={icons.aws.icon} name={icons.aws.name}/>
        <TechImage src={icons.docker.icon} name={icons.docker.name}/>
        <TechImage src={icons.kubernetes.icon} name={icons.kubernetes.name}/>
        <TechImage src={icons.mysql.icon} name={icons.mysql.name}/>
      </motion.div>
    </WorkDetails>
  )
}

export default AcquiaDetails;