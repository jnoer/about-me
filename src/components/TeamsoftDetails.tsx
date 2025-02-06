import { motion } from "motion/react";

const TeamsoftDetails = () => {
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <h1>Teamsoft</h1>

      <p>Worked at Teamsoft</p>
    </motion.div>
  )
}

export default TeamsoftDetails;