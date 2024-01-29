import { Typography } from 'antd'
import { Box, Flex } from 'components/atoms/StyledSystem'
import styled from 'styled-components'

export const PageWrapper = styled(Box)`
  justify-content: center;
  display: flex;
`

export const AuthCardWrapper = styled(Box)`
  width: 448px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
  background-color: rgb(16, 16, 16);
  height: 840px;
  padding: 16px;
  flex-direction: column;
  justify-content: space-between;
  display: inline-flex;
  transform: scale(0.7);
  font-family: Montserrat, sans-serif;
  border: 2px solid #80808008;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.25);
  position: absolute;
  right: 0;

  .close-header {
    position: absolute;
    top: -30px;
    margin: auto;
    left: calc(50% - 50px);
    cursor: pointer;
  }
`

export const AuthCTAWrapper = styled(Box)`
  margin-top: auto;
  background: linear-gradient(0deg, #101010 7.05%, rgba(16, 16, 16, 0) 44.44%);
`

export const PoweredByWrapper = styled(Flex)`
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  width: fit-content;
  border-radius: 16px;
  margin: auto;
  margin-top: 12px;
  :hover {
    background-color: var(--surface-alpha-light-4, rgba(250, 250, 250, 0.04));
    transition: background-color 0.1s ease-in-out;
  }
  color: #808080;
  
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
`

export const BalanceSectionWrapper = styled(Box)`
  height: 189.771px;
  padding: 16px;
  align-items: flex-start;
  gap: 14.057px;
  align-self: stretch;
  border-radius: var(--borer-radius-12, 12px);
  border: 1px solid #6350c2;
  background: linear-gradient(170deg, rgb(0, 0, 0) 42%, #433fe5);
  :hover {
    background: linear-gradient(170deg, rgb(45, 44, 44) 42%, #433fe5);
  }
`

export const Heading = styled(Typography)`
  color: var(--text-light-secondary, rgba(250, 250, 250, 0.7));
  text-align: center;
  
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 16px */
  opacity: 0.6;
`

export const HeadingChange = styled(Box)`
  display: flex;
  padding: 1.757px 7.029px;
  align-items: center;
  gap: 7.029px;
  border-radius: 26.357px;
  background: rgba(37, 89, 55, 0.4);

  color: var(--text-light-feedback-positive, #55cc7d);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 16.8px */
`

export const BalanceSection = styled(Flex)`
  gap: 8px;
  margin-top: 8px;
  align-items: center;
`

export const Balance = styled(Flex)`
  color: #fff;

  text-align: center;
  
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 43.2px */
`

export const BalanceButtonWrapper = styled(Flex)`
  gap: 14px;
  width: 100%;
  margin-top: 47px;
`

export const BalanceActionButton = styled(Box)`
  display: flex;
  height: 44px;
  padding: 8.786px 10.543px;
  justify-content: center;
  align-items: center;
  gap: 7.029px;
  flex: 1 0 0;

  border-radius: 7.029px;
  background: rgba(16, 16, 16, 0.5);

  color: var(--text-light-primary, #fafafa);
  text-align: center;
  
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 19.2px */
  cursor: pointer;

  background: linear-gradient(to right, #9f8bff 50%, rgba(16, 16, 16, 0.5) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.2s ease-out;

  .hover {
    width: 0;
    transition: width 0.2s ease-out;
  }

  :hover {
    background-position: left bottom;
    color: white;
    .hover {
      width: 20px;
    }
  }
`
export const CurrencyListWrapper = styled(Box)`
  margin-top: 20px;

  .heading {
    color: var(--text-light-tertiary, rgba(250, 250, 250, 0.3));
    
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 19.2px */
  }
  .currency-network-wrapper {
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 4px;
    border-radius: var(--borer-radius-max, 9999999px);
    border: 1px solid var(--border-light-primary, rgba(250, 250, 250, 0.16));
    background: var(--surface-neutral-dark-surface-900, #1a1a1a);

    transition: all 0.2s ease-out;
  }
`

export const CurrencyCardWrapper = styled(Box)`
  border-radius: var(--borer-radius-12, 12px);
  background: ${(p) => (p.isActive ? '#191919' : '')};

  :hover {
    border: 1px solid #1a1a1a;
    background-color: #191919;

    .currency-network {
      display: inline-block;
      width: 100%;
    }
    .currency-network-wrapper {
      margin-right: 5px;
    }
  }

  .currency-list-section {
    align-items: center;
    padding: 12px;
    cursor: pointer;
    gap: 20px;
    :hover {
      .currency-change {
        opacity: 1;
      }
    }
  }

  .border-top {
    border-top: 1px solid var(--text-light-tertiary, rgba(250, 250, 250, 0.3));
  }
  .currency-index {
    color: var(--surface-neutral-dark-surface-600, #41413e);
    
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 19.2px */
  }
  .pol {
    color: var(--text-light-tertiary, rgba(250, 250, 250, 0.3));
    text-align: center;
    
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 16.8px */
  }
  .balance {
    color: var(--text-light-primary, #fafafa);
    text-align: center;
    
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 19.2px */
  }
  .currency {
    color: #fafafa;

    
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 21.6px */
  }
  .currency-network {
    color: #fff;

    text-align: center;
    
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 12px */
    width: ${(p) => (p.isActive ? '100%' : 0)};
    transition: width 0.6s ease-in-out;
    display: ${(p) => (p.isActive ? 'inline-block' : 'none')};
  }
  .currency-change {
    opacity: ${(p) => (p.isActive ? 1 : 0)};
    transition: all 0.2s ease-in-out;
  }
`

export const AvatarImage = styled.img<any>`
  height: ${(p) => (p.height ? p.height : 44)}px;
  width: ${(p) => (p.width ? p.width : 44)}px;
  border-radius: 50%;
`

export const IconWrapper = styled(Box)`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 7px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background: var(--surface-neutral-dark-surface-700, #333331);
  }

  .rotate{
    transition-property: transform;
    transition-duration: 1s;
  
    :hover {
    animation-name: rotate; 
    animation-duration: 2s; 
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    }

    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
  }
`

export const UserInfoWrapper = styled(Flex)`
  gap: 8px;
  align-items: center;
  padding: 8px;
  border-radius: var(--borer-radius-12, 12px);
  cursor: pointer;

  .username {
    color: rgba(250, 250, 250, 0.8);
    text-align: center;
    
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 19.2px */
  }

  :hover {
    background: var(--surface-alpha-light-8, rgba(250, 250, 250, 0.08));
  }

`
export const MainWrapper = styled(Box)`
  position: absolute;
  right: 0;
  bottom: 0;
`

export const OpenButton = styled(Box)`
  cursor: pointer;
`

export const WalletTopMenuWrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;

`

export const TabsWrapper = styled(Flex)`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: var(--borer-radius-max, 9999999px);
  border: 1px solid var(--border-light-secondary, rgba(250, 250, 250, 0.08));
  width: fit-content;
  margin: auto;
`
export const Tab = styled(Flex)`
  display: flex;
  padding: 8px;
  gap: ${(p) => (p.active ? '8' : 0)}px;
  justify-content: center;
  align-items: center;

  border-radius: 99999px;
  border: 1px solid var(--border-light-secondary, rgba(250, 250, 250, 0.08));
  background: ${(p) => (p.active ? 'var(--surface-neutral-dark-surface-700, #333331);' : '')};
  cursor: pointer;

  color: #fff;

  text-align: center;
  
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 19.2px */

  .text {
    width: ${(p) => (p.active ? '100%' : 0)};
    max-width: ${(p) => (p.active ? '100%' : 0)};
    overflow: hidden;
    transition: width 0.2s ease-in;
    /* display: ${(p) => (p.active ? 'inline' : 'none')}; */
  }
`
