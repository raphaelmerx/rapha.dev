/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import { styled } from '@mui/material/styles'

const StyledA = styled('a')({
  textDecoration: 'underline',
  '&:hover': {
    textDecoration: 'underline',
    // slight opacity on hover
    opacity: 0.8,
  },
})

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href} legacyBehavior>
        <StyledA {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <StyledA href={href} {...rest} />
  }

  return <StyledA target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
