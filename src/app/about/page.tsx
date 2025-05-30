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

      {/* Impact Section */}
      <Box sx={{ mt: 12, mb: 8 }}>
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 700, mb: 4 }}>
          Our Impact
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 6, maxWidth: '1100px', mx: 'auto' }}>
          <Box sx={{ flex: 1, minWidth: 280 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              2024 Highlights
            </Typography>
            <ul style={{ fontSize: '1.1rem', marginBottom: 16 }}>
              <li>500 self care kits distributed</li>
              <li>100 sleeping bags distributed</li>
              <li>400 blankets distributed</li>
              <li>400 beanies and socks distributed</li>
              <li>15 partnerships</li>
              <li>6 cities served</li>
            </ul>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 4 }}>
              2023 Highlights
            </Typography>
            <ul style={{ fontSize: '1.1rem' }}>
              <li>172 self care kits distributed</li>
              <li>7 sleeping bags distributed</li>
              <li>26 blankets distributed</li>
              <li>18 beanies and socks distributed</li>
              <li>4 partnerships</li>
              <li>2 cities served</li>
            </ul>
          </Box>
          <Box sx={{ flex: 1, minWidth: 280, display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/information/HSPeffect.png"
              alt="Humane Sleep Projects Effect Bar Graph"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
            />
          </Box>
        </Box>
        <Typography variant="body1" sx={{ textAlign: 'center', mt: 4, color: 'text.secondary' }}>
          Humane Sleep Project has rapidly expanded its reach and impact, more than doubling the number of people and cities served in just one year. Our growth is a testament to the power of community, collaboration, and compassion.
        </Typography>
      </Box>
    </Container>
  );
} 