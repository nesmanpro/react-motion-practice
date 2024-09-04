'use client'
import classNames from "classnames";
import { motion } from "framer-motion";


export default function PageWrapper({ children, className }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={classNames('wrapper', className)}>
            {children}
        </motion.div>
    )
}
