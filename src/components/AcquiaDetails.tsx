import { motion } from "motion/react";

const AcquiaDetails = () => {
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <h1>Acquia</h1>

      <p>Worked at Acquia</p>
    </motion.div>
  )
}

export default AcquiaDetails;