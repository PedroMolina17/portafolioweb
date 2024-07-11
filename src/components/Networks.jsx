import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Networks = () => {
  return (
    <>
      <div className="flex flex-col fixed text-2xl md:text-4xl justify-center items-center md:left-2 left-1  text-slate-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center"
        >
          <div className="border-r border-[#33353F] h-40 md:h-60"></div>
          <div className="flex flex-col gap-3 pt-2">
            <Link href="https://wa.me/51934629301">
              <FaWhatsapp />
            </Link>
            <Link href="https://github.com/PedroMolina17">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/pedro-molina-noa-a18aa91b9/">
              <FaLinkedin />
            </Link>
            <Link href="https://www.facebook.com/pedro.molinanoa.5/">
              <FaFacebook />
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Networks;
