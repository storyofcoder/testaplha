import { Box, Flex } from 'components/atoms/StyledSystem'
import Page from '../../components/atomsV2/Page'

import { Typography } from 'antd'
import { useState } from 'react'
import { AuthCTAWrapper, AuthCardWrapper, AvatarImage, Balance, BalanceActionButton, BalanceButtonWrapper, BalanceSection, BalanceSectionWrapper, CurrencyCardWrapper, CurrencyListWrapper, Heading, HeadingChange, IconWrapper, MainWrapper, OpenButton, PageWrapper, PoweredByWrapper, Tab, TabsWrapper, UserInfoWrapper, WalletTopMenuWrapper } from './styled'


const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('Home')
  const [openDialog, setOpenDialog] = useState(false)

  const tabs = [
    {
      title: 'Home',
      image: './assets/images/svg/home.svg',
    },
    {
      title: 'Assets',
      image: './assets/images/svg/colorfilter.svg',
    },
    {
      title: 'Activity',
      image: './assets/images/svg/clock.svg',
    },
  ]

  return (
    <Page scale="sm">
      {!openDialog ? (
        <MainWrapper>
          <OpenButton onClick={() => setOpenDialog(true)}>
            <img className="hover" src={'./assets/images/svg/open-dialog.svg'} height={120} />
          </OpenButton>
        </MainWrapper>
      ) : (
        <PageWrapper>
          <AuthCardWrapper>
            <Box className="close-header" onClick={() => setOpenDialog(false)}>
              <img className="hover" src={'./assets/images/svg/top-close.svg'} height={28} />
            </Box>
            <WalletTopMenuWrapper mb={3}>
              <UserInfoWrapper>
                <img className="hover" src={'./assets/images/svg/user.svg'} height={28} />
                <Box className="username">thekaypo@tria</Box>
                <img className="hover" src={'./assets/images/svg/arrow-down.svg'} height={16} />
              </UserInfoWrapper>
              <Flex style={{ gap: '8px' }}>
                <IconWrapper>
                  <img className="hover" src={'./assets/images/svg/copy.svg'} height={35} />
                </IconWrapper>
                <img className="hover" src={'./assets/images/svg/polygon.svg'} height={28} />
              </Flex>
            </WalletTopMenuWrapper>
            <BalanceSectionWrapper>
              <Flex style={{ gap: '10px', alignItems: 'center' }}>
                <Heading>Assets Up</Heading>
                <HeadingChange>+2.5%</HeadingChange>
              </Flex>
              <BalanceSection>
                <Balance>$1838.83</Balance>
                <IconWrapper >
                  <img className="rotate" src={'./assets/images/svg/refresh.svg'} height={22} />
                </IconWrapper>
              </BalanceSection>
              <BalanceButtonWrapper>
                <BalanceActionButton>
                  <img src={'./assets/images/svg/buy-crypto.svg'} height={24} /> Buy{' '}
                  <img className="hover" src={'./assets/images/svg/arrow-right.svg'} height={12} />
                </BalanceActionButton>
                <BalanceActionButton>
                  <img src={'./assets/images/svg/sell-crypto.svg'} height={24} /> Sell{' '}
                  <img className="hover" src={'./assets/images/svg/arrow-right.svg'} height={12} />
                </BalanceActionButton>
              </BalanceButtonWrapper>
            </BalanceSectionWrapper>

            <CurrencyListWrapper>
              <Box>
                <Typography className="heading">Crypto</Typography>
              </Box>
              <Flex mt={2} style={{ gridGap: '10px', flexDirection: 'column', overflow: 'scroll', maxHeight: '380px' }}>
                <CurrencyCard />
                <CurrencyCard />
                <CurrencyCard />
              </Flex>
            </CurrencyListWrapper>

            <AuthCTAWrapper>
              <TabsWrapper>
                {tabs.map((value) => (
                  <Tab active={activeTab === value?.title} onClick={() => setActiveTab(value?.title)}>
                    <img src={value?.image} height={20} />
                    <span className="text">{value?.title}</span>
                  </Tab>
                ))}
              </TabsWrapper>

              <PoweredByWrapper>
                <img src={'./assets/images/svg/svg-small-logo.svg'} height={20} />
                Open Tria
                <img src={'./assets/images/svg/arrow-up.svg'} height={20} />
              </PoweredByWrapper>
            </AuthCTAWrapper>
          </AuthCardWrapper>
        </PageWrapper>
      )}
    </Page>
  )
}

export default DashboardPage

const CurrencyCard = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <CurrencyCardWrapper className="currency-list-section-wrapper" isActive={isActive}>
      <Flex className="currency-list-section" onClick={() => setIsActive(!isActive)}>
        <Box>
          <AvatarImage
            src="https://token-icons.s3.amazonaws.com/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png"
            height={44}
            width={44}
          />
        </Box>
        <Box width="100%">
          <Flex justifyContent="space-between">
            <Typography className="currency">USDC</Typography>
            <Flex style={{ gap: '5px' }}>
              <HeadingChange className="currency-change">+2.5%</HeadingChange>
              <Typography className="balance">$10</Typography>
            </Flex>
          </Flex>

          <Flex justifyContent="space-between" alignItems="center" mt={2}>
            <Flex>
              <Flex className="currency-network-wrapper">
                <AvatarImage
                  src="https://token-icons.s3.amazonaws.com/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png"
                  height={16}
                  width={16}
                />
                <Typography className="currency-network">ETH</Typography>
              </Flex>

              <Flex className="currency-network-wrapper">
                <AvatarImage
                  src="https://token-icons.s3.amazonaws.com/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png"
                  height={16}
                  width={16}
                />
                <Typography className="currency-network">ETH</Typography>
              </Flex>
            </Flex>
            <Typography className="pol">1 POL</Typography>
          </Flex>
        </Box>
        {isActive && <img src={'./assets/images/svg/up-button.svg'} height={30} />}
      </Flex>

      {isActive &&
        [1, 2, 3, 4, 5].map((index) => {
          return (
            <Flex className="currency-list-section border-top">
              <Box>
                <Typography className="currency-index">{index}</Typography>
              </Box>
              <Box>
                <AvatarImage
                  src="https://token-icons.s3.amazonaws.com/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png"
                  height={44}
                  width={44}
                />
              </Box>
              <Box width="100%">
                <Flex justifyContent="space-between">
                  <Typography className="currency">USDC</Typography>
                  <Flex style={{ gap: '5px' }}>
                    <Typography className="balance">$10</Typography>
                  </Flex>
                </Flex>
                <Flex justifyContent="space-between" alignItems="center" mt={2}>
                  <Box>
                    <Flex className="currency-network-wrapper">
                      <AvatarImage
                        src="https://token-icons.s3.amazonaws.com/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png"
                        height={16}
                        width={16}
                      />
                      <Typography className="currency-network">ETH</Typography>
                    </Flex>
                  </Box>
                  <Typography className="pol">1 POL</Typography>
                </Flex>
              </Box>
            </Flex>
          )
        })}
    </CurrencyCardWrapper>
  )
}

