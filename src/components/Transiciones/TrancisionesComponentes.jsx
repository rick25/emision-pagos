import React from 'react'
import { motion } from "framer-motion";



const FadeOpacity = ({ activo, children, ...rest }) => (
  <motion.div
    {...rest}
    initial={{ opacity: 0 }}
    animate={{
      opacity: activo ? 1 : 0,
    }}
  >{children}</motion.div>
)

export { FadeOpacity }