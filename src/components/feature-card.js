import React from 'react'
import { Box, Heading, Text } from 'theme-ui'
import Image from 'components/image'
import { Link } from 'components/link'

const FeatureCard = (props) => {
  return (
    <Box sx={styles.fevCard}>
      <a href={props.path} target='_blank'>
        <Box className='image' sx={styles.image}>
          <Image src={props.image} alt={props.title} />
        </Box>
      </a>
      <Box sx={styles.content}>
        <Heading as='h3'>
          <a href={props.path} target='_blank'>
            {props.title}
          </a>
        </Heading>
        <Text as='p'>{props.description}</Text>
      </Box>
    </Box>
  )
}

export default FeatureCard

const styles = {
  fevCard: {
    transition: '500ms',
    borderRadius: '5px',
    '&:hover': {
      boxShadow: '0px 15px 50px rgba(69, 88, 157, 0.1)',
    },
  },
  image: {
    overflow: 'hidden',
    borderTopLeftRadius: ['5px'],
    borderTopRightRadius: ['5px'],
    img: {
      display: 'block',
      width: '100%',
    },
  },
  content: {
    backgroundColor: '#fff',
    paddingLeft: [20, null, null, '30px'],
    paddingRight: [20, null, null, '30px'],
    paddingTop: ['15px', null, null, '25px'],
    borderBottomLeftRadius: ['5px'],
    borderBottomRightRadius: ['5px'],
    pb: ['10px', null, null, null, '30px'],
    border: '1px solid #F3F4F5',
    borderTop: '0',
    h3: {
      fontWeight: 'bold',
      fontSize: ['18px', null, '17px', null, 3],
      lineHeight: [1.55],
      a: {
        transition: '500ms',
        '&:hover': {
          color: 'primary',
        },
      },
    },
    p: {
      display: 'flex',
      alignItems: 'center',
      fontSize: [1, null, 2],
      lineHeight: [2],
      color: 'text',
      opacity: 0.8,
      mt: ['4px'],
      img: {
        width: ['16px', null, 'auto'],
        mr: ['8px'],
      },
    },
  },
}
