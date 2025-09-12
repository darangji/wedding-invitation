import styled from '@emotion/styled';
import data from 'data.json';
import AccountWrap from './AccountWrap.tsx';
import Accordion from '@/components/Accordion.tsx';
import ContentWrapper from '@/components/ContentWrapper.tsx';

const Account = () => {
  const { hostInfo } = data;
  return (
    <ContentWrapper>
      {hostInfo.map((host) => {
        return (
          <Accordion title={host.host} key={host.host}>
            {host.accountInfo.map((account) => {
              return (
                <AccountWrap
                  key={account.name}
                  name={account.name}
                  relation={account.relation}
                  bank={account.bank}
                  account={account.account}
                  kakaopayAccount={account.kakaopayAccount}
                  tossAccount={account.tossAccount}
                />
              );
            })}
          </Accordion>
        );
      })}
    </ContentWrapper>
  );
};

export default Account;
