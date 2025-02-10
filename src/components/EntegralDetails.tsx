import WorkDetails from "./WorkDetails.tsx";
import TechImage from "./TechImage.tsx";
import icons from "./icons.ts";
import { motion } from "motion/react";


const EntegralDetails = () => {
  return (
    <WorkDetails title="Entegral">
      <p>
        Influential software engineer on a full-stack team developing a modern, responsive web
        application that connects insurers and automakers. A key technical resource and mentor
        assisting with design, coding, and troubleshooting.
      </p>

      <motion.div
        style={{marginTop: '30px'}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: .75}}
      >
        <TechImage src={icons.TypeScriptIcon}/>
        <TechImage src={icons.AngularIcon}/>
        <TechImage src={icons.JestIcon}/>
        <TechImage src={icons.NGXSIcon}/>
        <TechImage src={icons.JavaIcon}/>
        <TechImage src={icons.HibernateIcon}/>
        <TechImage src={icons.SpringIcon}/>
        <TechImage src={icons.GCPIcon}/>
        <TechImage src={icons.Docker}/>
        <TechImage src={icons.KubernetesIcon}/>
        <TechImage src={icons.MySQLIcon}/>
        <TechImage src={icons.CypressIcon}/>
      </motion.div>
    </WorkDetails>
  )
}

export default EntegralDetails;