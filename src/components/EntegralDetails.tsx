import { motion } from "motion/react";

const EntegralDetails = () => {
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <h1>Entegral</h1>

      <p>Worked at Entegral</p>
    </motion.div>
  )
}

export default EntegralDetails;