import { Layout } from 'antd'
import Link from 'next/link'
import { useRef } from 'react'
import styled from 'styled-components'

import { NextLinkFromReactRouter } from '../../atoms/NextLink'
import { Box, Flex, Text } from '../../atoms/StyledSystem'

const { Header } = Layout

const Container = styled(Box)`
  background: ${(p) => p.theme.colors.headerBackground} !important;
  position: sticky;
  top: 0;
  width: 100%;
  //height: 64px;
  z-index: 50;
  //transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
  box-shadow: ${(p) => p.theme.colors.headerBorderBottom};
  backdrop-filter: saturate(180%) blur(5px);
`

const StyledHeader = styled(Header)`
  z-index: ${(p) => p.theme.zIndexes[7]};
  padding: 0 20px;

  ${(p) => p.theme.media.md} {
    padding: 0 40px;
  }

  .active {
    opacity: 1;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: auto;

  img {
    margin-right: 30px !important;
  }
`

const Logo = styled(Text)`
  position: relative;

  span {
    position: absolute;
    right: -30px;
    top: -7px;
    font-size: 10px;
  }
`

const HeaderCustom = () => {
  const ref = useRef(null)

  return (
    <Container ref={ref}>
      <StyledHeader className="header">
        <Flex alignItems="center" justifyContent="space-between" height={'100%'}>
          <NextLinkFromReactRouter to="/" activeClassName="logo-active">
            <LogoWrapper style={{ position: 'relative' }}>
              <Link href="/">
                <Logo fontWeight={500} fontSize={24}>
                  Tria
                </Logo>
              </Link>
            </LogoWrapper>
          </NextLinkFromReactRouter>

        </Flex>
      </StyledHeader>
    </Container>
  )
}

export default HeaderCustom
