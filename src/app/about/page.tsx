'use client';

import { Container, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { TEAM_MEMBERS } from '@/utils/constants';

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Mission Statement Section */}
      <Box sx={{ textAlign: 'center', mb: 12 }}>
        <Typography 
          variant="h2" 
          sx={{
            color: 'white',
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
              backgroundColor: 'white',
              borderRadius: '2px',
            }
          }}
        >
          About Us
        </Typography>
        
        <Box 
          sx={{ 
            p: { xs: 3, sm: 6 }, 
            mt: 6,
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            Humane Sleep Project is a committed 501(c)(3) nonprofit organization focused on supporting both unsheltered and sheltered individuals. Our recent efforts have enabled us to directly assist people across several Bay Area cities by providing essential sleep provisions, hygiene kits, clothing, and bedding supplies to improve their comfort and well-being. By building a strong community and fostering purposeful collaborations with local organizations and businesses, we strive to provide aid to those most in need. Our mission centers on helping as many homeless individuals as possible through compassion, connection, and sustained support, recognizing the importance of dignity, safety, and empowerment in their journey toward stability.
          </Typography>
        </Box>
      </Box>

      {/* Team Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography 
          variant="h3" 
          sx={{
            color: 'white',
            fontWeight: 700,
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            mb: 6
          }}
        >
          Meet Our Team
        </Typography>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          },
          gap: 4
        }}>
          {TEAM_MEMBERS.map((member, index) => (
            <Box
              key={index}
              sx={{
                p: { xs: 2, sm: 4 },
                borderRadius: 4,
                transition: 'all 0.3s ease-in-out',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  '& .team-image': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
                  }
                }
              }}
            >
              <Box
                className="team-image"
                sx={{
                  width: { xs: 150, sm: 200 },
                  height: { xs: 150, sm: 200 },
                  position: 'relative',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  mb: 3,
                  mx: 'auto',
                  border: '3px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'white',
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
                  color: 'rgba(255, 255, 255, 0.7)',
                  mb: 2,
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              >
                {member.role}
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              >
                {member.bio}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
} 