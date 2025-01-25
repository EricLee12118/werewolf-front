"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; 

const Page = () => {
  const text = "少女祈祷中...";
  const textArray = text.split(""); 
  const router = useRouter(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <motion.div
        style={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          border: '5px solid #f3f3f3',
          borderTop: '5px solid #3498db',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        style={{
          display: 'flex',
          marginTop: '20px',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#3498db',
        }}
      >
        {textArray.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{
              delay: index * 0.1, 
              duration: 0.5, 
              ease: 'easeOut', 
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Page;