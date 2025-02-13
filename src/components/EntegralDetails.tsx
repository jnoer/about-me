import {Title, WorkDetails} from "./WorkDetails.tsx";
import TechImage, {containerVariants} from "./TechImage.tsx";
import icons from "./icons.ts";
import {motion} from "motion/react";

const EntegralDetails = () => {
  return (
    <WorkDetails title={<Title>Entegral</Title>}>
      <p>
        Influential software engineer on a full-stack team developing a modern, responsive web
        application that connects insurers and automakers. A key technical resource and mentor
        assisting with design, coding, and troubleshooting.
      </p>
      <br/>
      <p>
        Quickly learned Angular and NGXS to make significant enhancements in revamping the application, modifying the
        layout and increasing the utilization of the NGXS store. Employed years of experience to assist team members
        with Angular, JavaScript, RxJS, Java, IntelliJ IDEA, Artifactory, Gradle, and other technologies.
      </p>

      <motion.div
        style={{marginTop: '30px'}}
        variants={containerVariants}
        initial="out"
        animate="in"
      >
        <TechImage src={icons.typescript.icon} name={icons.typescript.name}/>
        <TechImage src={icons.angular.icon} name={icons.angular.name}/>
        <TechImage src={icons.jest.icon} name={icons.jest.name}/>
        <TechImage src={icons.ngxs.icon} name={icons.ngxs.name}/>
        <TechImage src={icons.java.icon} name={icons.java.name}/>
        <TechImage src={icons.hibernate.icon} name={icons.hibernate.name}/>
        <TechImage src={icons.spring.icon} name={icons.spring.name}/>
        <TechImage src={icons.gcp.icon} name={icons.gcp.name}/>
        <TechImage src={icons.docker.icon} name={icons.docker.name}/>
        <TechImage src={icons.kubernetes.icon} name={icons.kubernetes.name}/>
        <TechImage src={icons.mysql.icon} name={icons.mysql.name}/>
        <TechImage src={icons.cypress.icon} name={icons.cypress.name}/>
      </motion.div>
    </WorkDetails>
  )
}

export default EntegralDetails;