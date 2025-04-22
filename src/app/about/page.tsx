'use client';

import { Container, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { TEAM_MEMBERS } from '@/utils/constants';
import { pageStyles } from '@/styles/pages/about/styles';

export default function About() {
  return (
    <Container maxWidth="lg" sx={pageStyles.container}>
      {/* Mission Statement Section */}
      <Box sx={{ textAlign: 'center', mb: 12 }}>
        <Typography 
          variant="h2" 
          sx={pageStyles.title}
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
            sx={pageStyles.missionText}
          >
            Humane Sleep Project is a committed 501(c)(3) nonprofit organization focused on supporting both unsheltered and sheltered individuals. Our recent efforts have enabled us to directly assist people across several Bay Area cities by providing essential sleep provisions, hygiene kits, clothing, and bedding supplies to improve their comfort and well-being. By building a strong community and fostering purposeful collaborations with local organizations and businesses, we strive to provide aid to those most in need. Our mission centers on helping as many homeless individuals as possible through compassion, connection, and sustained support, recognizing the importance of dignity, safety, and empowerment in their journey toward stability.
          </Typography>
        </Box>
      </Box>

      {/* Team Section */}
      <Box sx={pageStyles.teamSection}>
        <Typography 
          variant="h3" 
          sx={pageStyles.teamTitle}
        >
          Meet Our Team
        </Typography>

        <Box sx={pageStyles.teamGrid}>
          {TEAM_MEMBERS.map((member, index) => (
            <Box
              key={index}
              sx={pageStyles.teamCard}
            >
              <Box
                className="team-image"
                sx={pageStyles.teamImage}
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
                sx={pageStyles.memberName}
              >
                {member.name}
              </Typography>
              
              <Typography 
                variant="subtitle1" 
                sx={pageStyles.memberRole}
              >
                {member.role}
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={pageStyles.memberBio}
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