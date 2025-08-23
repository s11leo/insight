import React, { ReactNode, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useIntl } from "react-intl";

import { useWallet } from "@solana/wallet-adapter-react";
import { useAtom } from "jotai";

import { SessionToken } from "@repo/shared/constants";

import { Comments, ErrorAlert, Faqs, Hero, MobileHeader } from "@/components";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { useAuthentication, useSetupAnchorProvider } from "@/hooks";
import { isTokenExpired } from "@/lib";
import { walletSelectionAtom } from "@/store";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const intl = useIntl();

  const [cookies] = useCookies([SessionToken.ACCESS]);

  const [isWalletSelected, setIsWalletSelected] = useAtom(walletSelectionAtom);

  const { connected, publicKey, signMessage } = useWallet();

  const {
    authenticate,
    tokenRefresh,
    errorMessage: authenticationErrorMessage
  } = useAuthentication();

  useSetupAnchorProvider();

  useEffect(() => {
    if (isWalletSelected && connected && publicKey && signMessage) {
      authenticate({ publicKey, signMessage });

      setIsWalletSelected(false);
    }
  }, [
    connected,
    isWalletSelected,
    publicKey,
    signMessage,
    authenticate,
    setIsWalletSelected
  ]);

  useEffect(() => {
    const accessToken = cookies.accessToken;

    if (
      accessToken &&
      isTokenExpired({
        token: accessToken
      })
    ) {
      tokenRefresh();
    }
  }, [cookies, tokenRefresh]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MobileHeader className="block lg:hidden" />
      {authenticationErrorMessage && (
        <ErrorAlert
          title={intl.formatMessage({ id: "error.authentication" })}
          message={authenticationErrorMessage}
          actionMessage={intl.formatMessage({ id: "action.retry" })}
        />
      )}
      <Hero />

      <main className="flex-1">{children}</main>
      <Faqs />
      <Comments />
      <Footer />
    </div>
  );
};
