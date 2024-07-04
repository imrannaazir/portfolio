import { motion } from "framer-motion"
import { ContainerDelay } from "./Motion"



const MotionWrapper = (Component: React.FC, idnavigate?: string) =>
    function HOC() {
        return (
            <motion.section
                variants={ContainerDelay()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
            >
                {idnavigate && <span className="" id={idnavigate}>
                    &nbsp;
                </span>}
                <Component />
            </motion.section>
        )
    }
export default MotionWrapper