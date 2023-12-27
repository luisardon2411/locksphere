import { motion } from "framer-motion"

const Register = () => {
  const pagesVariants = {
    initial: { opacity: 0, x: '-100vw' },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: '100vw' },
  }
  const pagesTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1.5
  }
  return (
    <motion.div
    initial='initial'
    animate='in'
    exit='out'
    variants={pagesVariants}
    transition={pagesTransition}
    className="h-full w-full xs:flex xs:flex-col xs:justify-center xs:items-center">
      Register
    </motion.div>
  )
}

export default Register