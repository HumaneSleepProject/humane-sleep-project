/* eslint-disable react/no-unescaped-entities */
import { RESOURCE_MAP_URL } from '@/utils/constants';
import { pageStyles } from '@/styles/pages/information/styles';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';
import Image from 'next/image';

export default function Information() {
  return (
    <Box component="main" sx={pageStyles.container}>
      <Box component="section" sx={pageStyles.section}>
        <Box sx={{ maxWidth: '7xl', mx: 'auto' }}>
          <Typography variant="h1" sx={pageStyles.title}>
            Information & Resources
          </Typography>
          
          {/* Map Section */}
          <Box sx={pageStyles.mapContainer}>
            <Typography variant="h4" sx={pageStyles.mapTitle}>
              Resource Map
            </Typography>
            <Box sx={pageStyles.mapWrapper}>
              <iframe
                src={RESOURCE_MAP_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Box>

          <Box sx={{ mt: 4, color: 'text.primary' }}> {/* Main container for the new content, ensure default text color */}
            {/* California's Homelessness Crisis: A Statistical Outlier */}
            <Box component="section" sx={{ mb: 4 }}>
              <Typography variant="h4" sx={pageStyles.sectionTitle}>
                📊 California's Homelessness Crisis: A Statistical Outlier
              </Typography>
              <Box sx={{ maxWidth: '80ch', mx: 'auto', mt: 2 }}>
                <Typography variant="body1" sx={{ my: 2, color: 'rgba(255, 255, 255, 0.8)' }}>
                  California is home to over 28% of the entire nation's homeless population, despite only making up about 12% of the U.S. population. This disparity illustrates the severity and concentration of homelessness in the state.
                </Typography>
                <Typography variant="h5" sx={{ ...pageStyles.cardTitle, fontSize: '1.5rem', mt: 3, mb: 1 }}>
                  🔢 Key Figures:
                </Typography>
                <Box component="ul" sx={{ ...pageStyles.list, pl: 2, mb: 2 }}>
                  <li>Total Homeless Population in California (2023): ~181,000</li>
                  <li>Total U.S. Homeless Population: ~653,000</li>
                  <li>Percentage of U.S. Homeless in California: 28%+</li>
                </Box>
                <Typography variant="caption" display="block" sx={{ fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.7)' }}>
                  (Source: HUD 2023 Point-in-Time Count)
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 3 }}>
                  <Box sx={{ position: 'relative', width: '100%', maxWidth: '400px', height: '300px' }}>
                    <Image
                      src="/images/information/homeless_pie_chart.png"
                      alt="Pie chart showing 28% of U.S. homeless population is in California and 72% in the rest of the U.S."
                      fill
                      style={{ 
                        objectFit: 'contain',
                        borderRadius: 12,
                        boxShadow: '0 2px 16px rgba(0,0,0,0.2)'
                      }}
                    />
                  </Box>
                  <Typography variant="caption" sx={{ mt: 1, color: 'rgba(255,255,255,0.7)' }}>
                    Share of U.S. Homeless Population in California (2023)
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Homeless Populations by Major Cities */}
            <Box component="section" sx={{ mb: 4 }}>
              <Typography variant="h4" sx={pageStyles.sectionTitle}>
                🏙️ Homeless Populations by Major Cities:
              </Typography>
              <TableContainer 
                component={Paper} 
                sx={{ 
                  my: 2, 
                  maxWidth: 'md', 
                  mx: 'auto',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  '& .MuiTableCell-root': {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                  },
                  '& .MuiTableHead-root .MuiTableCell-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    fontWeight: 'bold',
                  },
                  '& .MuiTableBody-root .MuiTableRow-root:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  }
                }}
              >
                <Table sx={{ minWidth: 650 }} aria-label="homeless populations by major cities table">
                  <TableHead>
                    <TableRow>
                      <TableCell>City</TableCell>
                      <TableCell align="right">Estimated Homeless Population (2023)</TableCell>
                      <TableCell align="right">National Rank</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { city: 'Los Angeles', population: '~71,000', rank: '1st' },
                      { city: 'San Diego', population: '~10,000', rank: '5th' },
                      { city: 'San Jose', population: '~7,200', rank: '10th' },
                      { city: 'San Francisco', population: '~7,000', rank: '11th' },
                      { city: 'Oakland', population: '~5,000', rank: '15th+' },
                    ].map((row) => (
                      <TableRow key={row.city}>
                        <TableCell component="th" scope="row">
                          {row.city}
                        </TableCell>
                        <TableCell align="right">{row.population}</TableCell>
                        <TableCell align="right">{row.rank}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ maxWidth: '80ch', mx: 'auto', mt: 2 }}>
                <Typography variant="body1" sx={{ my: 2, color: 'rgba(255, 255, 255, 0.8)' }}>
                  Many of these cities rank in the top 20 nationwide, making California home to more high-ranking homeless cities than any other state.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 4 }}>
                <Box sx={{ position: 'relative', width: '100%', maxWidth: '600px', height: '400px' }}>
                  <Image
                    src="/images/information/homeless_over_time.png"
                    alt="Line graph showing California homeless population over time from 2015 to 2023."
                    fill
                    style={{ 
                      objectFit: 'contain',
                      borderRadius: 12,
                      boxShadow: '0 2px 16px rgba(0,0,0,0.2)'
                    }}
                  />
                </Box>
                <Typography variant="caption" sx={{ mt: 1, color: 'rgba(255,255,255,0.7)' }}>
                  California Homeless Population Over Time (2015–2023)
                </Typography>
              </Box>
            </Box>

            {/* Unsheltered Homelessness in California */}
            <Box component="section" sx={{ mb: 4 }}>
              <Typography variant="h4" sx={pageStyles.sectionTitle}>
                🏕️ Unsheltered Homelessness in California
              </Typography>
              <Box sx={{ maxWidth: '80ch', mx: 'auto', mt: 2 }}>
                <Typography variant="body1" sx={{ my: 2, color: 'rgba(255, 255, 255, 0.8)' }}>
                  California continues to lead the nation in unsheltered homelessness:
                </Typography>
                <Box component="ul" sx={{ ...pageStyles.list, pl: 2, mb: 2 }}>
                  <li>75% of individuals experiencing homelessness in California are unsheltered.</li>
                  <li>Major California cities with high unsheltered rates:
                    <Box component="ul" sx={{ ...pageStyles.list, pl: 4, mt: 1 }}>
                      <li>San Jose: 83%</li>
                      <li>Los Angeles: 81%</li>
                      <li>Sacramento: 77%</li>
                      <li>Oakland: 76%</li>
                    </Box>
                  </li>
                </Box>
              </Box>
            </Box>

            {/* Why Is Homelessness So High in California? */}
            <Box component="section" sx={{ mb: 4 }}>
              <Typography variant="h4" sx={pageStyles.sectionTitle}>
                🧠 Why Is Homelessness So High in California?
              </Typography>
              <Box sx={{ maxWidth: '80ch', mx: 'auto', mt: 2 }}>
                <Typography variant="body1" sx={{ my: 2, color: 'rgba(255, 255, 255, 0.8)' }}>
                  Several key factors contribute to the state's disproportionate numbers:
                </Typography>
                <Box>
                  {[
                    {
                      title: '1. Housing Affordability Crisis',
                      points: [
                        'California has some of the highest rents and home prices in the country.',
                        'Median rent for a one-bedroom apartment in cities like San Francisco or San Jose exceeds $2,500/month.',
                        'Low-income residents are often rent-burdened, spending over 50% of their income on housing.',
                      ],
                    },
                    {
                      title: '2. Insufficient Affordable Housing',
                      points: [
                        'A shortage of nearly 1 million affordable housing units exists for extremely low-income renters in California.',
                        'Long waitlists and underfunded housing programs delay access for those at risk.',
                      ],
                    },
                    {
                      title: '3. Mental Health & Substance Use Gaps',
                      points: [
                        'Many unhoused individuals experience untreated mental illness or substance use disorders.',
                        "California's mental health infrastructure, while improving, has struggled to meet the scale of need.",
                      ],
                    },
                    {
                      title: '4. Incarceration & Reentry',
                      points: [
                        'High rates of incarceration and limited reentry support can lead to homelessness upon release.',
                        "California's justice system reforms haven't fully addressed housing for people post-incarceration.",
                      ],
                    },
                  ].map((factor, index) => (
                    <Box key={index} sx={{ mb: 3 }}>
                      <Typography variant="h5" sx={{ ...pageStyles.cardTitle, fontSize: '1.3rem', mt: 2, mb: 1 }}>
                        {factor.title}
                      </Typography>
                      <Box component="ul" sx={{ ...pageStyles.list, pl: 2 }}>
                        {factor.points.map((point, pIndex) => (
                          <li key={pIndex}>{point}</li>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* CITATIONS */}
            <Box component="section" sx={{ mb: 4, mt: 6 }}>
              <Typography variant="h5" sx={{ 
                ...pageStyles.sectionTitle, 
                fontSize: '1.1rem', 
                opacity: 0.7,
                mb: 2
              }}>
                Sources
              </Typography>
              <Box sx={{ maxWidth: '80ch', mx: 'auto' }}>
                <Box component="ul" sx={{ ...pageStyles.list, pl: 2, listStyleType: 'none' }}>
                  <Box component="li" sx={{ mb: 1.5 }}>
                    <Typography variant="body2" sx={{ opacity: 0.8, fontSize: '0.9rem' }}>
                      California State Senate Housing Committee. (2024, January). Homelessness in California 2023 Numbers. Retrieved from{' '}
                      <Link href="https://shou.senate.ca.gov/sites/shou.senate.ca.gov/files/Homelessness%20in%20CA%202023%20Numbers%20-%201.2024.pdf" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', wordBreak: 'break-all', opacity: 0.9 }}>
                        https://shou.senate.ca.gov/.../Homelessness%20in%20CA%202023%20Numbers%20-%201.2024.pdf
                      </Link>
                    </Typography>
                  </Box>
                  <Box component="li" sx={{ mb: 1.5 }}>
                    <Typography variant="body2" sx={{ opacity: 0.8, fontSize: '0.9rem' }}>
                      California Interagency Council on Homelessness. (n.d.). Homeless Data Integration System. Retrieved from{' '}
                      <Link href="https://bcsh.ca.gov/calich/hdis.html" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', wordBreak: 'break-all', opacity: 0.9 }}>
                        https://bcsh.ca.gov/calich/hdis.html
                      </Link>
                    </Typography>
                  </Box>
                  <Box component="li" sx={{ mb: 1.5 }}>
                    <Typography variant="body2" sx={{ opacity: 0.8, fontSize: '0.9rem' }}>
                      U.S. Department of Housing and Urban Development. (2023). CoC Homeless Populations and Subpopulations Report: California 2023. Retrieved from{' '}
                      <Link href="https://files.hudexchange.info/reports/published/CoC_PopSub_State_CA_2023.pdf" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', wordBreak: 'break-all', opacity: 0.9 }}>
                        https://files.hudexchange.info/reports/published/CoC_PopSub_State_CA_2023.pdf
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  )
} 