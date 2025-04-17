'use client';

import { Container, Typography, Box, Paper } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sidharth Sreedar",
    role: "CEO",
    image: "/team/sid.png",
    bio: "My name is Sidharth Sreedar, and I’m the CEO of Humane Sleep Project. I created this organization envisioning a future of corrected sleeping measures for people of unprivileged communities. This endeavor will help the community foster change in others, and this is something in my personal life I strive to do. As of right now, I am attending the Life Chiropractic College West in order to become a Chiropractor."
  },
  {
    name: "Abhi Vishwas",
    role: "CFO",
    image: "/team/abhi.jpeg",
    bio: "You know I'm a chiefer."
  },
  {
    name: "Aditi Sharma",
    role: "COO",
    image: "/team/aditi.jpg",
    bio: "My name is Aditi Sharma and I am the COO and Secretary of Humane Sleep Project. I graduated from UC Davis and aspire to be a physician. I co-founded the Humane Sleep Project with a belief that every individual, regardless of their financial situation, should have access to essential sleeping supplies. I am committed to providing kindness and vital resources to ensure the well-being of every individual experiencing homelessness through HSP! ."
  }
];

const MotionPaper = motion(Paper);
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Mission Statement Section */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{ textAlign: 'center', mb: 12 }}
      >
        <MotionTypography 
          variant="h2" 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          sx={{
            color: 'var(--primary-purple)',
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: 'var(--primary-purple)',
              borderRadius: '2px',
            }
          }}
        >
          About Us
        </MotionTypography>
        
        <MotionPaper 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          elevation={0}
          sx={{ 
            p: { xs: 3, sm: 6 }, 
            mt: 6, 
            borderRadius: 4,
            backgroundColor: 'rgba(75, 46, 131, 0.02)',
            border: '1px solid rgba(75, 46, 131, 0.1)'
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              lineHeight: 1.8,
              color: 'text.secondary'
            }}
          >
            Humane Sleep Project is a committed 501(c)(3) nonprofit organization focused on supporting both unsheltered and sheltered individuals. Our recent efforts have enabled us to directly assist people across several Bay Area cities by providing essential sleep provisions, hygiene kits, clothing, and bedding supplies to improve their comfort and well-being. By building a strong community and fostering purposeful collaborations with local organizations and businesses, we strive to provide aid to those most in need. Our mission centers on helping as many homeless individuals as possible through compassion, connection, and sustained support, recognizing the importance of dignity, safety, and empowerment in their journey toward stability.
          </Typography>
        </MotionPaper>
      </MotionBox>

      {/* Team Section */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        sx={{ textAlign: 'center', mb: 8 }}
      >
        <MotionTypography 
          variant="h3" 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          sx={{
            color: 'var(--primary-purple)',
            fontWeight: 700,
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            mb: 6
          }}
        >
          Meet Our Team
        </MotionTypography>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          },
          gap: 4
        }}>
          {teamMembers.map((member, index) => (
            <MotionPaper
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              whileHover={{ y: -5 }}
              elevation={2}
              sx={{
                p: { xs: 2, sm: 4 },
                borderRadius: 4,
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(75, 46, 131, 0.15)'
                }
              }}
            >
              <MotionBox
                whileHover={{ scale: 1.05 }}
                sx={{
                  width: { xs: 150, sm: 200 },
                  height: { xs: 150, sm: 200 },
                  position: 'relative',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  mb: 3,
                  mx: 'auto',
                  border: '3px solid',
                  borderColor: 'var(--primary-purple)',
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </MotionBox>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'var(--primary-purple)',
                  fontWeight: 600,
                  mb: 1,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' }
                }}
              >
                {member.name}
              </Typography>
              
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  color: 'var(--secondary-purple)',
                  mb: 2,
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              >
                {member.role}
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              >
                {member.bio}
              </Typography>
            </MotionPaper>
          ))}
        </Box>
      </MotionBox>
    </Container>
  );
} 