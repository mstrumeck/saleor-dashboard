import { Button } from "@material-ui/core";
import HorizontalSpacer from "@saleor/apps/components/HorizontalSpacer";
import VerticalSpacer from "@saleor/apps/components/VerticalSpacer";
import Link from "@saleor/components/Link";
// import CardMenu, { CardMenuItem } from "@saleor/components/CardMenu";
import PageHeader from "@saleor/components/PageHeader";
import useNavigator from "@saleor/hooks/useNavigator";
import { sectionNames } from "@saleor/intl";
import { Notification } from "@saleor/macaw-ui";
import { productAddUrl } from "@saleor/products/urls";
import { productTypeAddUrl } from "@saleor/productTypes/urls";
import { ProductTypeKindEnum } from "@saleor/types/globalTypes";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

import { giftCardsListHeaderMenuItemsMessages as messages } from "./messages";
import { useHeaderStyles as useStyles } from "./styles";

interface GiftCardsListHeaderProps {
  onIssueButtonClick: () => void;
}

const GiftCardsListHeader: React.FC<GiftCardsListHeaderProps> = ({
  onIssueButtonClick
}) => {
  const intl = useIntl();
  const classes = useStyles({});
  const navigate = useNavigator();

  // const menuItems: CardMenuItem[] = [
  //   {
  //     label: intl.formatMessage(messages.settings),
  //     testId: "settingsMenuItem"
  //     //   onSelect:
  //   },
  //   {
  //     label: intl.formatMessage(messages.bulkIssue),
  //     testId: "bulkIssueMenuItem"
  //     //   onSelect:
  //   },
  //   {
  //     label: intl.formatMessage(messages.exportCodes),
  //     testId: "exportCodesMenuItem"
  //     //   onSelect:
  //   }
  // ];

  return (
    <>
      <PageHeader title={intl.formatMessage(sectionNames.giftCards)}>
        {/* <CardMenu menuItems={menuItems} data-test="menu" /> */}
        <HorizontalSpacer spacing={2} />
        <Button
          color="primary"
          variant="contained"
          onClick={onIssueButtonClick}
        >
          {intl.formatMessage(messages.issueButtonLabel)}
        </Button>
      </PageHeader>
      <Notification
        title={intl.formatMessage(messages.noGiftCardsNotificationTitle)}
        content={intl.formatMessage(
          messages.noGiftCardsNotificationDescription,
          {
            createGiftCardProductType: (
              <Link
                onClick={() =>
                  navigate(
                    productTypeAddUrl({
                      kind: ProductTypeKindEnum.GIFT_CARD
                    })
                  )
                }
              >
                <FormattedMessage
                  {...messages.noGiftCardsNotificationCreateProductType}
                />
              </Link>
            ),
            giftCardProduct: (
              <Link onClick={() => navigate(productAddUrl())}>
                <FormattedMessage
                  {...messages.noGiftCardsNotificationCreateProduct}
                />
              </Link>
            )
          }
        )}
        type="warning"
        onClose={() => undefined}
        className={classes.notification}
      />
      <VerticalSpacer spacing={2} />
    </>
  );
};

export default GiftCardsListHeader;
