import Logo from '../../assets/logo.svg'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './Init.css'

const Init = () => {
    const pagesVariants = {
        initial: { opacity: 0, x: '-100vw' },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: '100vw' },
    }
    const pagesTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 1
    }
    return (
        <>
            {/** Logo */}
            <motion.div 
            initial='initial'
            animate='in'
            exit='out'
            variants={pagesVariants}
            transition={pagesTransition}
            className="h-full w-full xs:flex xs:flex-col xs:justify-center xs:items-center">
                <motion.img src={Logo} alt="Logo"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, type: 'spring', bounce: 0.15, delay: 0.5 }}
                    className='xs:object-contain xs:w-1/3 md:h-1/2 xs:h-32 xl:h-1/3' />
                {/** Text */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1, type: 'spring', bounce: 0.15 }}
                    className='relative'>
                    <div className="flex items-center xs:gap-1 xs:text-md lg:text-lg">
                        <span className="text-black">Gestiona tus credenciales de</span>
                        <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700">
                            <span className='xs:text-md lg:text-lg'>manera segura</span>
                        </div>
                    </div>
                </motion.div>
                {/** Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1.5, type: 'spring', bounce: 0.15 }}
                    className='flex flex-col items-center gap-2 mt-5'>
                    <NavLink to="/register" className='bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-full'>
                        ¡Iniciemos!
                    </NavLink>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Init