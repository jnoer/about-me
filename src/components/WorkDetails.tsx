import {motion} from "motion/react";
import {ReactNode} from "react";

interface Props {
  children?: ReactNode,
}

const WorkDetails = ({ children } : Props) => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>{children}</motion.div>
  )
}

export default WorkDetails;